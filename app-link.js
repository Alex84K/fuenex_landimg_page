// Shared app-signup URL resolver — mirrors the domain-sniffing pattern used in
// home_build_client/src/utils/api.ts, so landing page content stays identical
// between the `main` and `production` branches (only the deploy target differs).
(function () {
    "use strict";

    var PROD_HOSTS = ["fliesenflow.de", "www.fliesenflow.de"];
    var PROD_APP_URL = "https://client.fliesenflow.de/sign-in";
    var TEST_APP_URL = "https://home-build.smartsoftsystem.de";

    window.FUENEX_APP_BASE_URL =
        PROD_HOSTS.indexOf(window.location.hostname) !== -1 ? PROD_APP_URL : TEST_APP_URL;

    document.querySelectorAll("[data-app-link]").forEach(function (el) {
        el.setAttribute("href", window.FUENEX_APP_BASE_URL);
    });
})();
