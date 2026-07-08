const URL="https://script.google.com/macros/s/AKfycbwjrhR7sby53TVp3eSUwUCsLcgCTZYFgY9NubOPyZgsGBZWvXaH-x9GwSeDMK6ZVWR_Aw/exec";

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

<p><strong>Puesto:</strong> ${data.B}</p>

<p><strong>Teléfono:</strong> ${data.C}</p>

<p><strong>Celular:</strong> ${data.D}</p>

<p><strong>Información:</strong> ${data.E}</p>

</div>

`;

}else{

div.innerHTML="<div class='error'>No se encontró información.</div>";

}

});

}
