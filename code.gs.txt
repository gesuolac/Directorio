function doGet(e) {

var hoja = SpreadsheetApp
.openById("1g9nAjq-jTuKQsK9XMmkWj-UAVlqtYO-jsCLutOxv6Rs")
.getSheetByName("Hoja1");

var buscar = e.parameter.buscar;

var datos = hoja.getDataRange().getValues();

for(var i=1;i<datos.length;i++){

if(String(datos[i][0]).toLowerCase()==String(buscar).toLowerCase()){

return ContentService.createTextOutput(JSON.stringify({

encontrado:true,

A:datos[i][0],
B:datos[i][1],
C:datos[i][2],
D:datos[i][3],
E:datos[i][4]

})).setMimeType(ContentService.MimeType.JSON);

}

}

return ContentService.createTextOutput(JSON.stringify({

encontrado:false

})).setMimeType(ContentService.MimeType.JSON);

}
