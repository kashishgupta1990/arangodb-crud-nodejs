var arangojs = require("arangojs");
var db = new arangojs.Database({
    url: "http://localhost:8529"
});
db.useDatabase("cms");
db.useBasicAuth("root", "toor");
var Student = db.collection('student');
var obj = {
    name:"Mayank",
    age: 22,
    class: 4,
    rank: 4
};
Student.save(obj).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});
console.log(Student);