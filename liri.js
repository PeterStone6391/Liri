// Pseudocode
var keys = require("./keys.js");
var axios = require("axios");
var userInput = "";
userInput = process.argv;
var command = process.argv[2];
var printed = "";
var searchTerm = "";
// var Spotify = require("node-spotify-api");
// make a secret id function

// install all the given packages
for (var i = 3; i < userInput.length; i++) {
  printed = printed + " " + userInput[i];
}
// require("dotenv").config();
// require keys.js
// var keys = require("./keys.js")
// * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
for (var i = 3; i < userInput.length; i++) {
  if (i > 3 && i < userInput.length) {
    searchTerm = searchTerm + "+" + userInput[i];
  } else {
    searchTerm += userInput[i];
  }
}

// * [Axios](https://www.npmjs.com/package/axios)
if (command == "movie-this" && userInput) {
  console.log("Your movie is:" + printed);

  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        searchTerm +
        "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    });

  //   * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

  // * [Moment](https://www.npmjs.com/package/moment)
} else if (command == "concert-this" && userInput) {
  console.log("Your concert is:" + printed);

  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        searchTerm +
        "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    });

  // * [DotEnv](https://www.npmjs.com/package/dotenv)
} else if (command == "spotify-this-song" && userInput) {
  console.log("Your song is:" + printed);
} else if (command == "do-what-it-says" && userInput) {
  console.log("BITCH:" + printed);
}
//var spotify = new Spotify(keys.spotify);

// User command choice
// process.argv or inquirer
// userChoice for movie/song/concert
// process.argv or inquirer

// check for user command
// if or switch
// cond(concert-this)
// create a function concert(userChoice)
// cond(spotify-this-song)
// create a function spotify()
// cond(movie-this)
// create a function movie()
// cond(do-what-it-says)
// create a function dowhatitsays()

// concert(userChoice)
// have to use axios
// use this url : "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// display name, location, date

// dowhatitsays()
// fs.readFile
// data.split(', ')[1]
// spotify(data.split(', ')[1])
