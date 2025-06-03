function calcularPago(){
    const metrosCubicos= parseFloat(document.getElementById("metrosCubicos").value);

    const resultado=metrosCubicos*30;
    document.getElementById("resultado").innerText= "Total a pagar: $" + resultado;
};