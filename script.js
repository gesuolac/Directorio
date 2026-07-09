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

<div class="fila">
    <div class="titulo">Supervisor</div>
    <div>${data.B}</div>
</div>

<div class="fila">
    <div class="titulo">Teléfono</div>
    <div>${data.C}</div>
</div>

<div class="fila">
    <div class="titulo">Jefe de COPE</div>
    <div>${data.D}</div>
</div>

<div class="fila">
    <div class="titulo">Teléfono</div>
    <div>${data.E}</div>
</div>

<div class="fila">
    <div class="titulo">GOA</div>
    <div>${data.F}</div>
</div>

<div class="fila">
    <div class="titulo">Teléfono</div>
    <div>${data.G}</div>
</div>

<div class="fila">
    <div class="titulo">Comentarios</div>
    <div>${data.H}</div>
</div>

</div>

`;

}else{

div.innerHTML="<div class='error'>No se encontró información.</div>";

}

});

}
