import { api_key } from "./bundle.js";

$(document).ready(function () {
  console.log("Document is ready!");
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
  const playlistIdSolo = 'PLADY51v0-uEBXrwk64v18nCdKZpUZnoIw'; 
  const playlistIdQuintet = 'PLADY51v0-uEATEtITAzTXRfwIsuU1UvVJ'; 
  gapi.client.youtube.playlistItems.list({
      part: "snippet,contentDetails",
      playlistId: playlistIdSolo,
      maxResults: 10
  }).then(function(response) {
      let videos = response.result.items;
      videos.forEach(video => {
        let title = "";
      
        // &#124; is the pipe character
        // &#58; is the colon character
   

        if (video.snippet.title.includes("|")) {
          title = `<h2>${video.snippet.title.split('|')[0].trim()}</h2`

          
        }
        else {
          title = video.snippet.title
        }

        $("#pieces-solo").append(` <div class="piece">
            <iframe  src="https://www.youtube.com/embed/${video.contentDetails.videoId}?si=PCYc4DmLv_6xyYgJ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="piece-info">
                    <h2>${title}</h2>
                </div>
            </div>`)
      });
  }, function(err) {
      console.error("Error executing request", err);
  });
  gapi.client.youtube.playlistItems.list({
    part: "snippet,contentDetails",
    playlistId: playlistIdQuintet,
    maxResults: 10
}).then(function(response) {
    let videos = response.result.items;
    videos.forEach(video => {
      let title = "";
    
      // &#124; is the pipe character
      // &#58; is the colon character
 

      if (video.snippet.title.includes("|")) {
        title = `<h2>${video.snippet.title.split('|')[0].trim()}</h2`

        
      }
      else {
        title = video.snippet.title
      }

      $("#pieces-quintet").append(` <div class="piece">
          <iframe  src="https://www.youtube.com/embed/${video.contentDetails.videoId}?si=PCYc4DmLv_6xyYgJ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div class="piece-info">
                  <h2>${title}</h2>
              </div>
          </div>`)
    });
}, function(err) {
    console.error("Error executing request", err);
});
  
}

