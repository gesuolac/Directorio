function doGet(e) {

  var hoja = SpreadsheetApp
    .openById("1g9nAjq-jTuKQsK9XMmkWj-UAVlqtYO-jsCLutOxv6Rs")
    .getSheetByName("Hoja1");

  var buscar = e.parameter.buscar;

  var datos = hoja.getDataRange().getValues();

  for (var i = 1; i < datos.length; i++) {

    if (String(datos[i][0]).toLowerCase() == String(buscar).toLowerCase()) {

      return ContentService
        .createTextOutput(JSON.stringify(datos[i]))
        .setMimeType(ContentService.MimeType.JSON);

    }

  }

  return ContentService
    .createTextOutput(JSON.stringify({
      encontrado: false
    }))
    .setMimeType(ContentService.MimeType.JSON);

}
