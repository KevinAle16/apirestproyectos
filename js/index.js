document.getElementById("btnCargar").addEventListener("click", cargarDatos);
document.getElementById("btnLimpiar").addEventListener("click", limpiarTabla);

fetch ('html/partials/head.html')
.then (response=>response.text())
.then (data=>document.getElementById('head_contenido').innerHTML=data);

fetch ('html/partials/header.html')
.then (response=>response.text())
.then (data=>document.getElementById('header_contenido').innerHTML=data);

fetch ('html/partials/footer.html')
.then (response=>response.text())
.then (data=>document.getElementById('footer_contenido').innerHTML=data);

async function cargarDatos() {

    const url = "https://microserkaft.duckdns.org/apirest/3";

    try {
        const response = await fetch(url);
        const data = await response.json();
        agregarFila(data);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

function agregarFila(data) {
    limpiarTabla();
    const tablaBody = document.getElementById("tbodyDatos");

    const nuevaFila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = data.nombre;

    const celdaDomicilio = document.createElement("td");
    celdaDomicilio.textContent = data.domicilio;

    const celdaEdad = document.createElement("td");
    celdaEdad.textContent = data.edad;

    const celdaSexo = document.createElement("td");
    celdaSexo.textContent = data.sexo;

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaDomicilio);
    nuevaFila.appendChild(celdaEdad);
    nuevaFila.appendChild(celdaSexo);

    tablaBody.appendChild(nuevaFila);
}

function limpiarTabla() {
    const tablaBody = document.getElementById("tbodyDatos");
    tablaBody.innerHTML = ""; 
}
