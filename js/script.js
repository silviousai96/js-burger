// Il programma dovrà consentire di calcolare il prezzo del panino 
// selezionando o deselezionando gli ingredienti proposti.

var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener ('click', function(){
    //prezzo standard panino
    var prezzoBurger = 10;
    
    //ciclo per vedere quali ingredienti sono stati checkkati 
    //e sommare il prezzo degli ingedienti al panino.
    var addCheckboxes = document.getElementsByClassName('add');
    
    for( var i=0; i < addCheckboxes.length; i++) {
        var thisCheckbox = addCheckboxes[i];
        

        if (thisCheckbox.checked == true) {
            var price = parseInt(thisCheckbox.value);
            console.log( i, price );

            prezzoBurger = prezzoBurger + price;
        }
    }

    //CONTROLLO CODICE DISCOUNT    
    //array con i codici sconto validi
    var arrayDiscount = ["ZX789CV", "AS123DF", "QW789ER"];

    //inserisco la input del codice sconto in una variabile
    var inputDiscount = document.getElementById('discount');
    var codeDiscount = inputDiscount.value;
    console.log('discount: ' + codeDiscount);

    //uso .includes per vedere se l' input del codice sconto è incluso nell'array dei codici sconto validi
    var n = arrayDiscount.includes(codeDiscount);
    console.log(n);

    //se il codice è presente mi darà true, quindi applico lo sconto del 15%
    if ( n == true) {
        prezzoBurger = prezzoBurger - (prezzoBurger * 0.15);
    }

    //stampo il risultato del prezzo finale
    document.getElementById('prezzo-finale').innerHTML = '€' + prezzoBurger;
});








