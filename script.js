const URL="https://script.google.com/macros/s/AKfycbzuLKEYFb2idPggVYneEp00X4m4QkQ3gY079qD-M1SEbiR_XT80-eo0JLftl6bIbFPV6g/exec";

function buscar(){

let texto=document.getElementById("buscar").value;

fetch(URL+"?buscar="+encodeURIComponent(texto))

.then(res=>res.json())

.then(data=>{

let div=document.getElementById("resultado");

if(data.encontrado){

div.innerHTML=`

<div class="card">

<h2>${data.A}</h2>

<p><strong>sUPERVISOR:</strong> ${data.B}</p>

<p><strong>Telefono:</strong> ${data.C}</p>

<p><strong>JEFE:</strong> ${data.D}</p>

<p><strong>Telefono:</strong> ${data.E}</p>

<p><strong>GOA:</strong> ${data.F}</p>

<p><strong>Telefono:</strong> ${data.G}</p>

<p><strong>Comentarios:</strong> ${data.H}</p>

</div>

`;

}else{

div.innerHTML="<div class='error'>No se encontró información.</div>";

}

});

}
