import { authenticate, loadClient, execute } from "../src";

$(document).ready(function() {
    loadClient().then(authenticate).then(execute);
});