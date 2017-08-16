
var userInt = document.getElementById("UserInt");

var btn = document.getElementById("zgaduj");

var poczatek = document.getElementById("from");

var koniec = document.getElementById("to");

var play = document.getElementById("zagraj");

var gra = document.getElementById("gra");

var liczba = 0;
console.log(liczba);
                         

play.addEventListener("click", function(){
    
    liczba = Math.floor(parseInt(poczatek.value) + Math.random()*(koniec.value - poczatek.value));
  
    console.log(liczba);
    
    
    if (gra.style.display == 'none') {
    gra.style.display = 'block';
    }
    
});


    







//var settings = document.getElementById("settings");
//var gra = document.getElementById("gra");
//zagraj.addEventListener("click", function(){
    
    // if (gra.style.display === 'none') {
    //    gra.style.display = 'block';
    // }
//});



var aud = document.getElementById("aud");



btn.addEventListener("click", function(){
   
    if(liczba == userInt.value){
        alert("BRAWO! LICZBA PRAWIDŁOWA!!!");
          aud.volume = 1.0;
    }
    else if(liczba<userInt.value) alert("ZA DUŻO!");
    else if(liczba>userInt.value) alert("ZA MAŁO!");
 
    
    
});