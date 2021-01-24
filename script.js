console.log('script.js cargado')

function tablaToJson() {
  const table = document.querySelector("#tablaDePuntosDiv > table > tbody")
  var data = [];
  // first row needs to be headers
  var headers = ['N°_contrato', 'Entidad_legal', 'Rol', 'Referente', 'Pr.', 'Confirmado', 'Programado', 'Cod_Recorte'];
  // go through cells
  for (var i = 3; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
      if (j == 4 || j == 5 || j == 6) {
        rowData[headers[j]] = parseInt(tableRow.cells[j].textContent.replace(',', ''))
      } else {
        rowData[headers[j]] = tableRow.cells[j].textContent
      }
    }
    data.push(rowData);
  }
  return data;
}

function tablaToArray() {
  const table = document.querySelector("#tablaDePuntosDiv > table > tbody")
  var data = [];
  // first row needs to be headers
  var headers = ['N°_contrato', 'Entidad_legal', 'Rol', 'Referente', 'Pr.', 'Confirmado', 'Programado', 'Cod_Recorte'];
  // go through cells
  for (var i = 0; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = [];
    for (var j = 0; j < tableRow.cells.length; j++) {
      if (j == 4 || j == 5 || j == 6) {
        rowData.push(parseInt(tableRow.cells[j].textContent.replaceAll(',', '')))
      } else {
        rowData.push(tableRow.cells[j].textContent)
      }
    }
    data.push(rowData);
  }
  return data;
}

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function () {
    console.log('copiado')
    /* clipboard successfully set */
  }, function () {
    console.log('error')
    /* clipboard write failed */
  });
}

function copyToClipboard(array) {
  var csv = '', row, cell;
  for (row = 0; row < array.length; row++) {
    for (cell = 0; cell < array[row].length; cell++) {
      csv += (array[row][cell] + '').replace(/[\n\t]+/g, ' ');
      if (cell + 1 < array[row].length) csv += '\t';
    }
    if (row + 1 < array.length) csv += '\n';
  }
  updateClipboard(csv);
  console.table(array);
}

function addBtn() {
  let prevBtn = document.querySelector(".btn")
  prevBtn ? prevBtn.remove() : false
  let btn = document.createElement('button')
  let div = document.querySelector("#btnHolder")
  div.appendChild(btn)
  btn.textContent = 'Copiar Tabla'
  btn.classList.add('btn')
  btn.style.margin = '8px'
  btn.addEventListener('click', e => {
    e.preventDefault()
    copyToClipboard(tablaToArray())
  })
}

document.addEventListener('DOMContentLoaded', event => {
  event.preventDefault()
  console.log('Se cargó la pagina');
});

const listar = document.querySelector('#listarPartialSubmit')

document.addEventListener('click', event => {
  event.preventDefault()
  const tabla = document.querySelector('#tablaDePuntos')
  if (tabla) {
    console.log('Le diste a Listar');
    addBtn();
  }
});

