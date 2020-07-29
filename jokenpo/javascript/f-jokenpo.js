// JavaScript Document Created By Gousro!
var vencedor;
var vitoriaJogador = 0;
var vitoriaComputador = 0;
var empate = 0;

// Criei essa função refresh com o tempo de 0,5 segundos para dar tempo de aparecer na pagina html o valor dos pontos do jogador/computador depois que o alerta de melhor de 5 aparece.
function refresh() {
	setTimeout('location.reload();', 500);
}

function jokenpo(escolhaJogador) {
	// Escolhe um numero aleatorio de 0 a 3.2
	var escolhaComputador = Math.random() * 3.2;
	// Se o numero aleatorio for <=1, <=2.1 ou <=3.2, atribuira Pedra, Papel ou Tesoura 
	if (escolhaComputador <= 1) {
		escolhaComputador = "Pedra";
	} else if (escolhaComputador <= 2.1) {
		escolhaComputador = "Papel";
	} else if (escolhaComputador <= 3.2) {
		escolhaComputador = "Tesoura";
	}

	// Regras de Vitória, Derrota e Empate
	if (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura' || escolhaJogador === 'Papel' && escolhaComputador === 'Pedra' || escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel') {
		vencedor = 'Você venceu!';
	} else if (escolhaJogador === 'Pedra' && escolhaComputador === 'Papel' || escolhaJogador === 'Papel' && escolhaComputador === 'Tesoura' || escolhaJogador === 'Tesoura' && escolhaComputador === 'Pedra') {
		vencedor = 'Computador venceu!';
	} else if (escolhaJogador === escolhaComputador) {
		vencedor = 'Empatou';
	}

	// Contagem do numero de vezes que o jogador ou o computador ganhou e empatou
	if (vencedor === 'Você venceu!') {
		vitoriaJogador = vitoriaJogador + 1;
	} else if (vencedor === 'Computador venceu!') {
		vitoriaComputador = vitoriaComputador + 1;
	} else {
		empate = empate + 1;
	}

	// Quando a pontuação do Jogador ou a do Computador chega a 3, emite um alerta dizendo ao jogador se ele ganhou ou perdeu a melhor de 5 e atualiza o jogo.
	if (vitoriaJogador === 3) {
		alert('Você ganhou a melhor de cinco!');
		refresh();
	} else if (vitoriaComputador === 3) {
		alert('Você perdeu a melhor de cinco!');
		refresh();
	}

	// Envia as informações salva nas variaveis para o documento html dependendo do ID
	document.getElementById("escolha-jogador").innerHTML = escolhaJogador;
	document.getElementById("vitoria-do-jogador").innerHTML = vitoriaJogador;
	document.getElementById("escolha-computador").innerHTML = escolhaComputador;
	document.getElementById("vitoria-do-computador").innerHTML = vitoriaComputador;
	document.getElementById("contagem-empates").innerHTML = empate;
	document.getElementById("vencedor").innerHTML = vencedor;
}