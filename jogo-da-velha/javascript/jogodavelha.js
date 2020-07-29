/* 
	JavaScript Document 
	Created by Gousro
*/
var letra = "<span class=X>X</span>";
var pontosJogadorX = 0;
var pontosJogadorO = 0;
var vencedor = "-";
function jogar(escolha) {
	var quadradoClicado = document.getElementById(escolha).innerHTML;
	if (quadradoClicado === "<span class=X>X</span>" || quadradoClicado === "<span class=O>O</span>") {
		alert("Opa, este quadrado já foi escolhido!");
	}else {
		document.getElementById(escolha).innerHTML = letra;
		if (letra === "<span class=X>X</span>") {
		letra = "<span class=O>O</span>";
		} else {
			letra = "<span class=X>X</span>";
		}
	}
	console.log(escolha);
}

function check() {
	var QuadroA1 = document.getElementById('A1').innerHTML;
	var QuadroA2 = document.getElementById('A2').innerHTML;
	var QuadroA3 = document.getElementById('A3').innerHTML;
	var QuadroB1 = document.getElementById('B1').innerHTML;
	var QuadroB2 = document.getElementById('B2').innerHTML;
	var QuadroB3 = document.getElementById('B3').innerHTML;
	var QuadroC1 = document.getElementById('C1').innerHTML;
	var QuadroC2 = document.getElementById('C2').innerHTML;
	var QuadroC3 = document.getElementById('C3').innerHTML;
	
	if (letra === '<span class=O>O</span>') {
		if (((QuadroA1 !== '') && (QuadroA2 !== '') && (QuadroA3 !== '') && (QuadroA1 === QuadroA2) && (QuadroA2 === QuadroA3)) || ((QuadroA1 !== '') && (QuadroB2 !== '') && (QuadroC3 !== '') && (QuadroA1 === QuadroB2) && (QuadroB2 === QuadroC3)) || ((QuadroA1 !== '') && (QuadroB1 !== '') && (QuadroC1 !== '') && (QuadroA1 === QuadroB1) && (QuadroB1 === QuadroC1)) || ((QuadroB1 !== '') && (QuadroB2 !== '') && (QuadroB3 !== '') && (QuadroB1 === QuadroB2) && (QuadroB2 === QuadroB3)) || ((QuadroC1 !== '') && (QuadroC2 !== '') && (QuadroC3 !== '') && (QuadroC1 === QuadroC2) && (QuadroC2 === QuadroC3)) || ((QuadroA2 !== '') && (QuadroB2 !== '') && (QuadroC2 !== '') && (QuadroA2 === QuadroB2) && (QuadroB2 === QuadroC2)) || ((QuadroA3 !== '') && (QuadroB3 !== '') && (QuadroC3 !== '') && (QuadroA3 === QuadroB3) && (QuadroB3 === QuadroC3)) || ((QuadroC1 !== '') && (QuadroB2 !== '') && (QuadroA3 !== '') && (QuadroC1 === QuadroB2) && (QuadroB2 === QuadroA3))) {
			vencedor = 'Jogador X Venceu!';
			pontosJogadorX = pontosJogadorX +1;
			setTimeout(function(){ 
				refresh();
			}, 500);
		}
	}
	else if (letra === '<span class=X>X</span>') {
		if (((QuadroA1 !== '') && (QuadroA2 !== '') && (QuadroA3 !== '') && (QuadroA1 === QuadroA2) && (QuadroA2 === QuadroA3)) || ((QuadroA1 !== '') && (QuadroB2 !== '') && (QuadroC3 !== '') && (QuadroA1 === QuadroB2) && (QuadroB2 === QuadroC3)) || ((QuadroA1 !== '') && (QuadroB1 !== '') && (QuadroC1 !== '') && (QuadroA1 === QuadroB1) && (QuadroB1 === QuadroC1)) || ((QuadroB1 !== '') && (QuadroB2 !== '') && (QuadroB3 !== '') && (QuadroB1 === QuadroB2) && (QuadroB2 === QuadroB3)) || ((QuadroC1 !== '') && (QuadroC2 !== '') && (QuadroC3 !== '') && (QuadroC1 === QuadroC2) && (QuadroC2 === QuadroC3)) || ((QuadroA2 !== '') && (QuadroB2 !== '') && (QuadroC2 !== '') && (QuadroA2 === QuadroB2) && (QuadroB2 === QuadroC2)) || ((QuadroA3 !== '') && (QuadroB3 !== '') && (QuadroC3 !== '') && (QuadroA3 === QuadroB3) && (QuadroB3 === QuadroC3)) || ((QuadroC1 !== '') && (QuadroB2 !== '') && (QuadroA3 !== '') && (QuadroC1 === QuadroB2) && (QuadroB2 === QuadroA3))) {
			vencedor = 'Jogador O Venceu!';
			pontosJogadorO = pontosJogadorO +1;
			setTimeout(function(){ 
				refresh();
			}, 500);
		}
	}

	document.getElementById("resultado").innerHTML = vencedor;
	document.getElementById("vitoria-do-jogador-x").innerHTML = pontosJogadorX;
	document.getElementById("vitoria-do-jogador-o").innerHTML = pontosJogadorO;
}

function refresh(){
	for (j=1; j<4; j++){
		QuadroA = 'A' + j;
		document.getElementById(QuadroA).innerHTML = '';
		QuadroB = 'B' + j;
		document.getElementById(QuadroB).innerHTML = '';
		QuadroC = 'C' + j;
		document.getElementById(QuadroC).innerHTML = '';
	}
}