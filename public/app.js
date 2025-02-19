let api_key = process.env.API_KEY;

$(document).ready(function() {
    console.log("ready!");
    console.log(api_key)
    loadClient().then(authenticate).then(execute);
});