console.log(window.name); // Malathi
var name = "Malathi";
console.log(window.name); // Malathi
testFunc(); //regular function can be called before or after its definition
function testFunc(){
    var name = "Sravani";
    console.log(window.name); // Malathi
    console.log(this.name); // Malathi
    console.log(window.name); // Malathi
    console.log(name); // Sravani
    console.log(name === window.name); // true
    //funEpr(); // Not allowed for function expression and throws 'funEpr is not a function error'
    var funEpr = function demo(){
        var name = "Function Demo's Name";
        console.log(name); // Function Demo's Name
        console.log(this.name); // Malathi
        console.log(intro); // undefined
        console.log(this.intro); // it is called before varialbe expresstion so it is returning undefined
    }
    funEpr(); // Function expression must me called only after it declaration.
    let personObj = {
        firstName: "Katti", 
        lastName: "Aadya",
        age : 2,
        fullName : function(){
            console.log(`My name is ${this.firstName} ${this.lastName} and am ${this.age} years old`);// anonymous fun pointing to its object where it is defined
        }
    }
    personObj.fullName(); // Katti Aadya
}

//Nested Function (Closures)
console.log(intro); // it is called before varialbe expresstion so it is returning undefined
var intro = "Hi"; // Can be accessed in any function and also out of any function
console.log(intro);
grantParent();
function grantParent(){
    console.log(this.name); // Malathi
    var grantParentName = `Devi`;
    console.log(`${intro}, My name is ${grantParentName}`);
    console.log(`Am the Grand Parent`);
    //console.log(`${parentName}`); Not allowed to access any of the child variables
    parent();
    function parent(){
        var parentName = `Prabha`;
        console.log(`${intro}, My name is ${parentName}, my mother is ${grantParentName}`);
        console.log(`Am the Parent`);
        child();
        function child(){
            var childName = `Sravanthi`;
            console.log(`${intro}, My name is ${childName}, my mother is ${parentName}, my grand mother is ${grantParentName}`);
            console.log(`Am the child`);
            grandChild();
            function grandChild(){
                var grandChildName = `Aadya`;
                console.log(`${intro}, My name is ${grandChildName}, my mother is ${childName}, my grand mother is ${parentName}, my grate grand mother is ${grantParentName}`);  // can access all the variables of it parent functions including global
                console.log("Am the grand child");
            }
        }
    } 
}
console.log(intro);

//Variables
console.log(c); // undefined
var c;
c = 2;
console.log(c); // 2
c = true;
console.log(c); // true
c = `Malathi`;
console.log(c); // Malathi