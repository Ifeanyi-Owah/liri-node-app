require('dotenv').config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require("moment");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

 spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });