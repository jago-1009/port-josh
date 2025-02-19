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
        let title = "";
        let artist = "";
        let description = "";
        // &#124; is the pipe character
        // &#58; is the colon character
        if (video.snippet.title.includes("&#58;")) {
          title = video.snippet.title.split("&#58;")[0];
          artist = video.snippet.title.split("&#58;")[0];
        }
        if (title.includes("&#124;")) {
          title = title.split("&#124;")[0];
        }
        console.log (title);
        console.log (artist);
        console.log (description);
        $("#pieces").append(` <div class="piece">
            <iframe  src="https://www.youtube.com/embed/${video.id}?si=PCYc4DmLv_6xyYgJ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="piece-info">
                    <h2>${title}</h2>
                    <h3>By: ${artist}</h3>
                    <p>${video.snippet.description}</p>
                </div>
            </div>`)
          console.log(video.snippet.title);
      });
  }, function(err) {
      console.error("Error executing request", err);
  });
}

