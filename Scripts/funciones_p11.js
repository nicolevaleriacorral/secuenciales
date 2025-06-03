function calcularCosto(){
    const dias= parseFloat(document.getElementById("dias").value);
    const habitacion=parseFloat(document.getElementById("habitacion").value);
    const costo=dias*habitacion

    document.getElementById("costo").innerText= "Costo de su estancia: $" + costo;
};