console.log('test');
//pobieranie wartosci z inputa

var kwotaPLN = document.getElementById("amount");
var btn = document.getElementById("count");

btn.addEventListener("click", function(){
    var wynik = document.getElementById("wynik");
    wynik.innerHTML = (parseFloat(kwotaPLN.value) / 3.65).toFixed(2);

});


    


