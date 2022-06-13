const ELEMENTO_RESPOSTA = document.querySelector("#resposta");
const INPUT_PERGUNTA = document.querySelector("#inputPergunta");
const BUTTON_PERGUNTAR = document.querySelector("#buttonPerguntar");
const PERGUNTA = "<div>" + INPUT_PERGUNTA.value + "</div>";
const RESPOSTAS = [
	'Certeza!',
	'Não tenho certeza.',
	'É decididamente assim.',
	'Não conte com isso.',
	'Sem dúvidas.',
	'Pergunte novamente mais tarde.',
	'Sim, definitivamente!',
	'Minha resposta é não!',
	'Você pode contar com isso.',
	'Melhor não te dizer agora.',
	'A meu ver, sim.',
	'Minhas fontes dizem não.',
	'Provavelmente.',
	'Não é possível prever agora.',
	'Perspectiva boa.',
	'As perspectivas não são boas.',
	'Sim.',
	'Concentre-se e pergunte novamente.',
	'Sinais apontam que sim.'
];

//Clicar em fazer pergunta
function fazerPergunta() {

    if(INPUT_PERGUNTA.value == "") {
        alert("Digite sua pergunta!!");
        return 
    }

    BUTTON_PERGUNTAR.setAttribute("disabled", true);

	//gerar um número aleatório
	const TOTAL_RESPOSTAS = RESPOSTAS.length;
	const NUMERO_ALEATORIO = Math.floor(Math.random() * TOTAL_RESPOSTAS);
    ELEMENTO_RESPOSTA.innerHTML = PERGUNTA + RESPOSTAS[NUMERO_ALEATORIO];

    ELEMENTO_RESPOSTA.style.opacity = 1;
    //Sumir a resposta depois de 3 segundos
    setTimeout(function() {
        ELEMENTO_RESPOSTA.style.opacity = 0;
        BUTTON_PERGUNTAR.removeAttribute("disabled");
    }, 3000)
}
