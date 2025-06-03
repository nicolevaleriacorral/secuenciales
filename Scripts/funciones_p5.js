function calcularCheque(){
    const dias= parseFloat(document.getElementById("dias").value);
    const hotel= parseFloat(document.getElementById("hotel").value);
    const comida= parseFloat(document.getElementById("comida").value);
    const otros = dias * 100;
    const totalHotel = hotel * dias;
    const totalComida = comida * dias;
    const total = totalHotel + totalComida + otros;

    document.getElementById("total").innerText= "Monto del cheque: $" + total;
};