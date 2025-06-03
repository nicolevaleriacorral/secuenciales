function calcularTiempo(){
    const fechaNacimiento = new Date(document.getElementById("nacimiento").value);
    const fechaActual = new Date(document.getElementById("actual").value);

    const diferenciaMS = fechaActual - fechaNacimiento;
    const diferenciaDias = Math.floor(diferenciaMS / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(diferenciaDias / 7);
    const meses = Math.floor(diferenciaDias / 30.44);
    const horas = Math.floor(diferenciaMS / (1000 * 60 * 60));

    document.getElementById("diferenciaDias").innerText= "Días vividos:" + diferenciaDias;
    document.getElementById("semanas").innerText= "Semanas vividas:" + semanas;
    document.getElementById("meses").innerText= "Meses vividos:" + meses;
    document.getElementById("horas").innerText= "Horas vividas:" + horas;
};