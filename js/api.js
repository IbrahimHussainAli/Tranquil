"use strict";

(function() {

  let queryBox = document.getElementById("metQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");

  let baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="

  //const fetchButton = document.getElementById("fetch-button");
  //const fetchResult = document.getElementById("fetch-result");


searchForm.addEventListener("submit", function(ev) {
 console.log(queryBox.value);

let url = baseURL + queryBox.value;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        //console.log(response.json());
       return response.json();

      }).then(function(data) {
        console.log(data);

      })
      queryBox.value = "";
    ev.preventDefault();
  }, false);





}());
