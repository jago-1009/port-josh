import { authenticate, loadClient, execute } from "./module.js";

$(document).ready(function() {
    loadClient().then(authenticate).then(execute);
});