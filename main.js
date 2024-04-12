const dictionary_app_apiform = document.querySelector(".dictionaryapp-apiform");
const inputqueryfield = document.getElementById("inputqueryfield");
const apidata_box = document.querySelector(".apidata-box");
const apidetails_word = document.getElementById("apidetails-word");
const apidetails_definition = document.getElementById("apidetails-definition");
const loader = document.querySelector(".loader-box");
const show_apiresponse_loader = () => {
  loader.style.display = "block";
};

const hide_apiresponse_loader = () => {
  loader.style.display = "none";
};

const dictionaryapi = (inputuserquery) => {
  // ======================================= show the loader before making the api request =======================================
  show_apiresponse_loader();
  const networkrequestdetails = {
    method: "GET",
    // ======================================= api credentials =======================================
    headers: {
      "X-RapidAPI-Key": "your api key",
      "X-RapidAPI-Host": "your api host",
    },
  };
  const apiurl = `your api url?word=userinputfield`;
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
    })
    .finally(() => {
      // =================================== hide the loader when the api response is received ===================================
      hide_apiresponse_loader();
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
