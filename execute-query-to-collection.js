var arangojs = require("arangojs");
var db = new arangojs.Database({
    url: "http://localhost:8529"
});
db.useDatabase("cms");
db.useBasicAuth("root", "toor");
var now = Date.now();
db.query({
    query: "FOR x IN student RETURN x",
    bindVars: {

    }
}).then(function (cursor) {
        return cursor.all().then(function (result) {
            console.log(result);
        });
    })
    .catch(function (err) {
        console.log(err)
    });