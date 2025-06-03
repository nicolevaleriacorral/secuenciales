function calcularArea(){
    const lado= parseFloat(document.getElementById("lado").value);

    const resultado=lado*lado;
    document.getElementById("resultado").innerText= "Area:" + resultado;
};