// Certain objects properties define the state of an object
function HelloWorld(){
    console.log("hello world");
} 
let obj = {
    name: "jacob",
    age:26,
    greeting: function() {console.log("Hellow my name is" + this.name)}
};

class Student {
    constructor(name,age,greeting){
        this.name = name;
        this.age = age;
        //this.greeting = greeting;
    }greeting(){
        console.log("hello world" + this.name);
    };
};

let student1 = new Student("Jacob", 26);
let student2 = new Students("Ryan",20);
student1.greeting();
student2.greeting();
