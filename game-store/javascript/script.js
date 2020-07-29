// JavaScript Document

function limparPadrao(campo) {
if (campo.value == campo.defaultValue) {
	campo.value = "";
}
}

function escreverPadrao(campo) {
if (campo.value == "") {
	campo.value = campo.defaultValue;
}
}

if (!('open' in document.createElement('details'))) {
	alert("Esse navegador não suporta a função details do HTML5 e portando apresentara erro/bugs.\nRecomendo que utilize um navegador com suporte completo ao HTML5.\nEx.:\nGoogle Chrome\nMozilla Firefox");
}