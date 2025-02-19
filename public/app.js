import { api_key } from "../src";

$(document).ready(function() {
    console.log(api_key);
    console.log("ready!");
    loadClient().then(authenticate).then(execute);
});