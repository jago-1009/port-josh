import { api_key } from "./bundle.js";

$(document).ready(function() {
    console.log(api_key);
    console.log("ready!");
    loadClient().then(authenticate).then(execute);
});