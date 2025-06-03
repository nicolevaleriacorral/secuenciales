function calcularAhorro(){
    const sueldo= parseFloat(document.getElementById("sueldo").value);
    const ahorroSemanal= sueldo*0.15;
    const semanasAño=12*4;
    const ahorroAnual= ahorroSemanal*semanasAño;

    document.getElementById("ahorroAnual").innerText= "Total ahorrado: $" + ahorroAnual;
};