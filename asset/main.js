function Numeros(){
    let i = 0;
    while (i < 100) {
        i++;
            let h1 = document.createElement( "h1" );
            h1.innerHTML = i;
            document.getElementById("Resposta1").append(h1);
    }
}