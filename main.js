var age = Number(prompt("What is your age?"));

if (age < 0){
    alert("Sorry, you enetred an invalid age")
}
if (age === 21 ){
    alert("Happy Birthday!")
}
if (age % 2 !== 0){
    alert("Your age is odd!")
}
if (age % Math.sqrt(age) === 0) {
    alert("Perfect square");
}

document.getElementById("age").style.display = 'none';

