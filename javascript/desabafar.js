$(function(){
	// Função que valida o formulário de desabafo
	function validarForm(){
		if($("#titulo").val().length == 0){
			$("#titulo").addClass("erro");
			$("#msgErroTitulo").text("Preenchimento obrigatório");

			return false;
		}

		if($("#titulo").val().length > 50){
			$("#titulo").addClass("erro");
			$("#msgErroTitulo").text("Seu título não pode ter mais de 50 dígitos");

			return false;
		}

		if($("#categoria").prop("selectedIndex") == 0){
			$("#categoria").addClass("erro");
			$("#msgErroCategoria").text("Selecione uma opção");

			return false;
		}

		if($("#desabafo").val().length == 0){
			$("#desabafo").addClass("erro");
			$("#msgErroDesabafo").text("Preenchimento obrigatório");

			return false;
		}

		if($("#desabafo").val().length > 700){
			$("#desabafo").addClass("erro");
			$("#msgErroDesabafo").text("Seu desabafo não pode ter mais de 700 dígitos");

			return false;
		}
	}

	// Função que remove o erro do campo de título
	function remErroTitulo(){
		$("#titulo").removeClass("erro");
		$("#msgErroTitulo").text("");
	}

	// Função que remove o erro do campo de categoria
	function remErroCategoria(){
		$("#categoria").removeClass("erro");
		$("#msgErroCategoria").text("");
	}

	// Função que remove o erro do campo de desabafo
	function remErroDesabafo(){
		$("#desabafo").removeClass("erro");
		$("#msgErroDesabafo").text("");
	}

	$("#formDesabafo").on("submit", validarForm);
	$("#titulo").on("input", remErroTitulo);
	$("#categoria").on("change", remErroCategoria);
	$("#desabafo").on("input", remErroDesabafo);
});