let limit = 20;
let arr = [];
let uArr = [];
for(let l = 0; l < limit; l++){
  let num = Math.floor(Math.random() * limit) + 1;
    arr.push(num);
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (uArr.indexOf(arr[i]) == -1) {
    uArr.push(arr[i]);
  }
}
console.log(uArr);


function checkEligibility(gender, dob){
    var age = ((new Date).getFullYear()) - dob;
    console.log(age);
    if((gender == "male") && (age > 18 && age <21)){
        console.log("%c Eligible to vote" + "%c but not marriage", "color:green", "color:red");
    }
    else if((gender == "male" && age > 21) || (gender == "female" && age > 18)){
        console.log("%c Eligible to vote and marriage", "color:green");
    }else{
        console.log("%c Not eligible to vote or marry", "color:red");
    }
}
checkEligibility("male", 2010);
checkEligibility("male", 1995);
checkEligibility("female", 1995);
checkEligibility("male", 2010);
checkEligibility("female", 2010);
checkEligibility("male", 2000);
checkEligibility("female", 2010);
