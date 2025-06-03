function calcularPotencia(){
    const resistencia= parseFloat(document.getElementById("resistencia").value);
    const intensidad= parseFloat(document.getElementById("intensidad").value);
    const voltaje=resistencia*intensidad;
    const potencia=voltaje*intensidad;
    document.getElementById("potencia").innerText= "Potencia: " + potencia;
    document.getElementById("voltaje").innerText= "Voltaje: " + voltaje;
};