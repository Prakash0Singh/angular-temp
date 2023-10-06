// Interface
fetch('https://jameshenry.blog/foo/bar')
    .then(function (response) {
    console.log(response.statu);
});

// Class
var Respons = /** @class */ (function () {
    function Respons() {
    }
    return Respons;
}());
fetch('https://jameshenry.blog/foo/bar')
    .then(function (response) {
    console.log(response.status);
});
