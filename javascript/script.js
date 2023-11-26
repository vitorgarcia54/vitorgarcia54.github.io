$(function(){
	// Função que mostra e oculta a navbar em dispositivos menores
	function mostrarNavBar(){
		if($("#navBar").hasClass("responsiva") == false){
			$("#navBar").addClass("responsiva");
			$("#iconeMenu").removeClass("bi-list");
			$("#iconeMenu").addClass("bi-x");
		}else{
			$("#navBar").removeClass("responsiva");
			$("#iconeMenu").removeClass("bi-x");
			$("#iconeMenu").addClass("bi-list");
		}
	}

	// Função que mostra e oculta os botões de acessibilidade
	function mostrarBtnsAcessibilidade(){
		$(".btn-acessibilidade").toggleClass("ativo");
	}

	// Função que muda o tema da página
	function mudarTemaPagina(){
		if($(document.body).hasClass("tema-escuro") == false){
			$(document.body).addClass("tema-escuro");
			$("#iconeTema").removeClass("bi-moon-fill");
			$("#iconeTema").addClass("bi-sun-fill");
		}else{
			$(document.body).removeClass("tema-escuro");
			$("#iconeTema").removeClass("bi-sun-fill");
			$("#iconeTema").addClass("bi-moon-fill");
		}
	}

	// Função que aumenta e diminui o tamanho da fonte da página
	function alterarTamanhoFonte(acao){
		if(acao == "aumentar"){
			$(".acessibilidade").css("font-size", "+=1px");
		}else{
			$(".acessibilidade").css("font-size", "-=1px");
		}
	}

	$("#btnMenu").on("click", mostrarNavBar);
	$("#btnExpandir").on("click", mostrarBtnsAcessibilidade);
	$("#btnMudarTema").on("click", mudarTemaPagina);

	$("#btnAumentarFonte").on("click", function(){
		alterarTamanhoFonte("aumentar");
	});

	$("#btnDiminuirFonte").on("click", function(){
		alterarTamanhoFonte("diminuir");
	});
});