const dictionary_app_apiform = document.querySelector(".dictionaryapp-apiform");
const inputqueryfield = document.getElementById("inputqueryfield");
const apidata_box = document.querySelector(".apidata-box");
const apidetails_word = document.getElementById("apidetails-word");
const apidetails_definition = document.getElementById("apidetails-definition");

const dictionaryapi = (inputuserquery) => {
  const networkrequestdetails = {
    method: "GET",
    // ======================================= api credentials =======================================
    headers: {
      "X-RapidAPI-Key": "your apikey",
      "X-RapidAPI-Host": "your api hostname",
    },
  };
  const apiurl = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${inputqueryfield.value}`;
  let fetchapi = fetch(apiurl, networkrequestdetails);
  fetchapi
    .then((response) => {
      return response.json();
    })
    .then((apidata) => {
      // if the dictionary api has the meaning related to your query containing the word and definition then ti will return the desired result other custom text will be shown
      if (apidata.word && apidata.definition) {
        apidetails_word.innerHTML = apidata.word;
        apidetails_definition.innerHTML = apidata.definition;
      } else {
        apidetails_word.innerHTML = "no knowledge about this word";
        apidetails_definition.innerHTML = "no knowledge about this definition";
      }
      console.log(apidata);
    })
    .catch((error) => {
      console.log(error);
    });
};
dictionary_app_apiform.addEventListener("submit", (e) => {
  e.preventDefault();
  dictionaryapi(inputqueryfield.value);
});
// ============================ reset the form each and every single time as the page gets refreshed ============================
document.addEventListener("DOMContentLoaded", () => {
  dictionary_app_apiform.reset();
});
