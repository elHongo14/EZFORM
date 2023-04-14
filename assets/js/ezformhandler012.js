// EZ-FORM Handler por elHongo14 claro que si pai
// Se encarga de agregar la lógica de añadir filas a las tablas
// Así como permitir que se muestren las imagenes cargadas en el apartado de firma


// Añadir filas a la tabla principal

var i = 0;

function addRow() {
    var row = document.getElementById("rowToClone"); // Encuentra la fila a copiar
    var table = document.getElementById("tableToModify"); // Encuentra la tabla a implementar la fila
    var clone = row.cloneNode(true); // Copia el hijo de la tabla
    clone.id = "newID"; // Cambia el ID u otros atributos
    table.appendChild(clone); // Añade la fila clonada a la tabla

    
    i++;
    table.rows[i].cells[0].innerHTML = i+1;
  }


// FIRMA DIC03
var loadFile1 = function(event) {
    var image = document.getElementById('firma1'); // Encuentra la etiqueta de Imagen por su ID
    image.src=URL.createObjectURL(event.target.files[0]); // Establece la imagen subida en el valor "src" de la etiqueta Imagen
};


// FIRMA DIC01
var loadFile2 = function(event) {
    var image = document.getElementById('firma2'); // Encuentra la etiqueta de Imagen por su ID
    image.src=URL.createObjectURL(event.target.files[0]); // Establece la imagen subida en el valor "src" de la etiqueta Imagen
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var saveBtn = document.getElementById("saveBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
saveBtn.onclick = function() {
  modal.style.display = "flex";
  modal.style.paddingInline = "30%";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function readyToExport(){

    // BODY
    var body = document.getElementById("fullpage");
    body.style.fontSize = "10px";

    // HOJA
    var page = document.getElementById("page");
    page.style.margin = "0";
    page.style.width = "100%";
    page.style.paddingInline = "0";

    // CAMPO CARRERA
    var carrera = document.getElementById("carrera");
    carrera.style.border = "none";
    carrera.style.borderBlockEnd = "1px solid #000000";

    // CAMPO CARRERA
    var cuatri = document.getElementById("cuatri");
    cuatri.style.border = "none";
    cuatri.style.borderBlockEnd = "1px solid #000000";
    cuatri.style.textAlign = "center";

    // CAMPO CARRERA
    var grupo = document.getElementById("grupo");
    grupo.style.border = "none";
    grupo.style.borderBlockEnd = "1px solid #000000";
    grupo.style.textAlign = "center";

    // TABLA DATOS
    var tablaDatos = document.getElementById("tabla_datos");
    tablaDatos.style.padding = "0";

    // BOTÓN AÑADIR
    var btnAddRow = document.getElementById("añadirFila");
    btnAddRow.style.display = "none";

    // MENÚ ACCIONES
    var actions = document.getElementById("actions");
    actions.style.display = "none";
}

function reloadCSS(){

    // BODY
    var body = document.getElementById("fullpage");
    body.style.fontSize = "medium";

    // HOJA
    var page = document.getElementById("page");
    page.style.margin = "100px auto";
    page.style.width = "80%";
    page.style.paddingInline = "50px";

    // CAMPO CARRERA
    var carrera = document.getElementById("carrera");
    carrera.style.border = "2px solid #616161";

    // CAMPO CARRERA
    var cuatri = document.getElementById("cuatri");
    cuatri.style.border = "1px solid #616161";
    cuatri.style.textAlign = "start";

    // CAMPO CARRERA
    var grupo = document.getElementById("grupo");
    grupo.style.border = "2px solid #616161";
    grupo.style.textAlign = "start";

    // TABLA DATOS
    var tablaDatos = document.getElementById("tabla_datos");
    tablaDatos.style.padding = "10px";

    // BOTÓN AÑADIR
    var btnAddRow = document.getElementById("añadirFila");
    btnAddRow.style.display = "block";

    // MENÚ ACCIONES
    var actions = document.getElementById("actions");
    actions.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#exportBtn");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body;
        var docName = document.getElementById("docName").value;

        readyToExport();
        modal.style.display = "none";
        html2pdf()
            .set({
                margin: 1,
                top: 0,
                filename: docName,
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "cm",
                    format: "a4",
                    orientation: 'portrait'
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
            setTimeout(()=> {
              reloadCSS();
           }
           ,1000);
           setTimeout(()=> {
            alert('!El documento "' +String(docName)+ '" ha sido exportado con éxito! ¡Gracias por usar EZ-FORM!');
         }
         ,1200);
    })
})