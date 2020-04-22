"use strict";

(function() {

  let queryBox = document.getElementById("metQuery");
  let searchForm = document.getElementById("searchForm");

  let baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="

  //const fetchButton = document.getElementById("fetch-button");
  const fetchResult = document.getElementById("fetch-result");


  searchForm.addEventListener("submit", function(ev) {
    //clear the list when submit is pressed
    while (fetchResult.hasChildNodes()) {
      fetchResult.removeChild(fetchResult.firstChild);
    }


    let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function(response) {

        return response.json();

      }).then(function(data) {
        let i;

        for (i = 0; i < 10; i++) {

          let obj = (data.objectIDs[i]);

          let objULR = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`

          fetch(objULR).then(function(response) {
            return response.json();

          }).then(function(data) {

            let title = data.title;
            let img = data.primaryImage;
            let artistName = data.artistDisplayName;

            let list = document.createElement("li");
            list.innerHTML = "<strong>" + title + "<br>" + artistName + `<img class="api-image" src="${img}" alt="${title}"/>`;
            fetchResult.appendChild(list);

          });

        }

      })
    queryBox.value = "";
    ev.preventDefault();
  }, false);


}());
