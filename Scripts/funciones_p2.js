function calcularPago(){
    const KILOWATTS= parseFloat(document.getElementById("KILOWATTS").value);

    const resultado=KILOWATTS*3.50;
    document.getElementById("resultado").innerText= "Total a pagar: $" + resultado;
};