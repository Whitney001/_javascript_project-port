const myText = document.getElementById('myText');
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;


mySubmit.onclick = function (){

    age = myText.value;
    age = Number(age);
    if(age >= 100){
        result.textContent = `Too Old for The Site`
    }
    else if (age == 0){
        result.textContent = `you cant enter. you are a baby`
    }
    else if (age > 18){
        result.textContent = `You are Old enough to enter this site`
    }
    
}