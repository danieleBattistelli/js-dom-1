const lampadaAccesa = document.getElementById("lampada-accesa");//seleziono Lampada accesa
const lampadaSpenta = document.getElementById("lampada-spenta");//seleziono Lampada spenta
const btnLamp = document.getElementById("click-btn");//seleziono il bottone



//aggiungo Listener al bottone

btnLamp.addEventListener('click', function(){
    if(lampadaAccesa.style.display === 'none'){
        lampadaAccesa.style.display = 'block';
        lampadaSpenta.style.display = 'none' ;
        btnLamp.textContent = 'Spegni';  
    } else {
        lampadaAccesa.style.display = 'none';
        lampadaSpenta.style.display = 'block';
        btnLamp.textContent = 'Accendi'
    }
});

