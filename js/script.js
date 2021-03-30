// Il programma dovrà consentire di calcolare il prezzo del panino 
// selezionando o deselezionando gli ingredienti proposti.

var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener ('click', function(){
    
    var prezzoBurger = 10;

    var addCheckboxes = document.getElementsByClassName('add');
    
    for( var i=0; i < addCheckboxes.length; i++) {
        var thisCheckbox = addCheckboxes[i];
        

        if (thisCheckbox.checked == true) {
            var price = parseInt(thisCheckbox.value);
            console.log( i, price );

            prezzoBurger = prezzoBurger + price;
        }
    }
    //stampo il risultato del prezzo finale
    document.getElementById('prezzo-finale').innerHTML = 'Prezzo: ' + prezzoBurger + '€';
});








