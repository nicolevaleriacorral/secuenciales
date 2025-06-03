function calcularPago(){
    const precio= parseFloat(document.getElementById("precio").value);
    const resultado=precio*0.20;
    const precioConDescuento=precio-resultado;

    const iva=precio*0.15;
    const precioFinal=precioConDescuento+iva;

    

    document.getElementById("precioConDescuento").innerText= "Precio con descuento: $" + precioConDescuento;
    document.getElementById("precioFinal").innerText= "Total a pagar: $" + precioFinal;
};