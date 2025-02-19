import {api_key}  from "./bundle.js";

$(document).ready(function() {
    console.log("Document is ready!");
    console.log(api_key);
    gisLogin();
 
});
 
function gisLogin() {
  google.accounts.oauth2.initTokenClient({
      client_id: "581903922488-giinvk56chi3ee548h688ns14gk00ole.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/youtube.readonly",
      callback: (response) => {
          if (response.access_token) {
              accessToken = response.access_token;
              console.log("Sign-in successful");
              loadClient(); // Load YouTube API after authentication
              execute(); // Execute the API request
          } else {
              console.error("Authentication failed");
          }
      }
  }).requestAccessToken();
}
function loadClient() {
  gapi.load("client", () => {
      gapi.client.setApiKey(api_key);
      gapi.client.load("youtube", "v3", () => {
          console.log("GAPI client loaded for YouTube API");
      });
  });
}
function execute() {
  if (!accessToken) {
      console.error("User is not authenticated");
      return;
  }

  gapi.client.youtube.channels.list({
      part: "snippet,contentDetails,statistics",
      mine: true
  }).then(function(response) {
      console.log("YouTube Data:", response);
  }, function(err) {
      console.error("Error executing request", err);
  });
}