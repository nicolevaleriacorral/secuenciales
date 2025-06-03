function calcularPromedio(){
    const exam1= parseFloat(document.getElementById("exam1").value);
    const exam2= parseFloat(document.getElementById("exam2").value);
    const exam3= parseFloat(document.getElementById("exam3").value);
    const promedio = (exam1 * 0.25) + (exam2 * 0.25) + (exam3 * 0.50);

    document.getElementById("promedio").innerText= "Promedio:" + promedio;
};