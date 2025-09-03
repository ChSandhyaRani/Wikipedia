let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendResults(result) {
    let {
        title,
        link,
        description
    } = result;

    //create Container
    let containerEl = document.createElement('div');
    containerEl.classList.add("result-item");
    searchResults.appendChild(containerEl);

    //Anchor - title
    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");
    containerEl.appendChild(titleEl);

    // break
    let breakEl = document.createElement("br");
    containerEl.appendChild(breakEl);

    //Anchoe - link 
    let linkEl = document.createElement("a");
    linkEl.textContent = link;
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.classList.add("result-url");
    containerEl.appendChild(linkEl);

    //paragraph - description
    let descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add('link-description');
    containerEl.appendChild(descriptionEl);
}


function displaySearchResults(search_results) {
    spinner.classList.add("d-none");
    for (let result of search_results) {
        createAndAppendResults(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinner.classList.remove('d-none');
        searchResults.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displaySearchResults(search_results);
            })
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);