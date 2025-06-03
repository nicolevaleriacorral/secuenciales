function calcularCosto(){
    const duracion= parseFloat(document.getElementById("duracion").value);
    const costo = duracion*7

    document.getElementById("costo").innerText= "Costo de su llamada: $" + costo;
};