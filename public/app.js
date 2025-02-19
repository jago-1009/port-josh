import { api_key } from "./bundle.js";

$(document).ready(function () {
  console.log("Document is ready!");
  console.log(api_key);
  loadClient();
});
function loadClient() {
  gapi.load("client", () => {
      gapi.client.setApiKey(api_key); // Use your API key here
      gapi.client.load("youtube", "v3", () => {
          console.log("GAPI client loaded for YouTube API");
          execute();  // Call execute() to fetch data once client is loaded
      });
  });
}

function execute() {
  const playlistId = 'PLADY51v0-uEBXrwk64v18nCdKZpUZnoIw'; // Replace with your playlist ID
  gapi.client.youtube.playlistItems.list({
      part: "snippet,contentDetails",
      playlistId: playlistId,
      maxResults: 10
  }).then(function(response) {
      console.log("YouTube Data:", response.result.items);
      let videos = response.result.items;
      videos.forEach(video => {
          console.log(video.snippet.title);
      });
  }, function(err) {
      console.error("Error executing request", err);
  });
}

