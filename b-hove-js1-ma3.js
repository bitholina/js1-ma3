// Question 1 


(a, b) => a - b;


// Question 2

const sportsUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        getGames(json);
    })

    .catch(function(error) {
        document.location.href = "/error.html"; // in all the examples I find in is says to console.dir error. What is right?
    });

    function getGames(json) {
        console.dir(json);
        const gameNames = json.results;
    
        for (let i = 0; i < gameNames.length; i++) {
            console.log(gameNames[i].name);
        }
    }
    


//Question 3

//<h3>These cats are outrageous.</h3>
// const genreSentence = document.querySelector("h3");
// genreSentence.innerText = genres;

const formattedExampleSentence = genres.replace("cats", "giraffes");

// genreSentence.innertext = formattedExampleSentence;

// Question 4

if (params.has(!"id")) {
    document.location.href = "/third.html";);
}
else if(params.has("id"< 10)) {
    document.location.href = "/first.html";
}
else(params.has("id"> 10)) {
    document.location.href = "/second.html";
}




// Question 5

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

container.removeChild(btn);


// Question 6

// select the list
const animalList = document.querySelector(".animals");
concole.log(animalList);
//create list item
const newListItem = document.createElement("li");
concole.log(newListItem);
//add class
newListItem.className="parrots";
// Add text
const newListContent = document.createTextNode("Parrots");
// Add list to list
newList.appendChild(newListContent);
console.log(newList);


//  Question 7

const Url = "https://api.rawg.io/api/games/3801";

fetch(Url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        getRes(json);
    })

    .catch(function(error) {
        console.log(error);
    });

    function getRes(json) {
        console.dir(json);
        const gameRes = json.results;
        
        const divRating = document.querySelector(".rating");

    
    }