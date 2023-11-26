$(function(){
	// Função que exibe os formulários de login
	function exibirForms(){
		if($(this).is("#btnEscolhaUsuario") == true){
			$("#areaFormUsuario").css("display", "block");
			$("#areaFormPsicologo").css("display", "none");
			$("#areaFormAdmin").css("display", "none");
		}else if($(this).is("#btnEscolhaPsic") == true){
			$("#areaFormPsicologo").css("display", "block");
			$("#areaFormUsuario").css("display", "none");
			$("#areaFormAdmin").css("display", "none");
		}else{
			$("#areaFormAdmin").css("display", "block");
			$("#areaFormUsuario").css("display", "none");
			$("#areaFormPsicologo").css("display", "none");
		}
	}

	// Função que valida os formulários
	function validarForm(){
		if($(this).is("#formUsuario") == true){
			if($("#usuario").val().length == 0){
				$("#usuario").addClass("erro");
				$("#msgErroUsuario").text("Preenchimento obrigatório")

				return false;
			}

			if($("#usuario").val().length >  50){
				$("#usuario").addClass("erro");
				$("#msgErroUsuario").text("Seu nome de usuário não pode ter mais de 50 dígitos")

				return false;
			}

			if($("#senha").val().length == 0){
				$("#senha").addClass("erro");
				$("#msgErroSenha").text("Preenchimento obrigatório")

				return false;
			}

			if($("#senha").val().length < 8 || $("#senha").val().length > 50){
				$("#senha").addClass("erro");
				$("#msgErroSenha").text("Sua senha deve ter entre 8 e 50 dígitos");

				return false;
			}
		}else if($(this).is("#formAdmin") == true){
			if($("#usuarioAdmin").val().length == 0){
				$("#usuarioAdmin").addClass("erro");
				$("#msgErroUsuarioAdmin").text("Preenchimento obrigatório")

				return false;
			}

			if($("#usuarioAdmin").val().length >  50){
				$("#usuarioAdmin").addClass("erro");
				$("#msgErroUsuarioAdmin").text("Seu nome de usuário não pode ter mais de 50 dígitos")

				return false;
			}

			if($("#senhaAdmin").val().length == 0){
				$("#senhaAdmin").addClass("erro");
				$("#msgErroSenhaAdmin").text("Preenchimento obrigatório")

				return false;
			}

			if($("#senhaAdmin").val().length < 8 || $("#senhaAdmin").val().length > 50){
				$("#senhaAdmin").addClass("erro");
				$("#msgErroSenhaAdmin").text("Sua senha deve ter entre 8 e 50 dígitos");

				return false;
			}
		}else{
			const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z0-9_.]{2,}$/;

			if($("#email").val().length == 0){
				$("#email").addClass("erro");
				$("#msgErroEmail").text("Preenchimento obrigatório");

				return false;
			}

			if($("#email").val().length > 50){
				$("#email").addClass("erro");
				$("#msgErroEmail").text("Seu e-mail não pode ter mais de 50 dígitos");

				return false;
			}

			if(emailRegex.test($("#email").val()) == false){
				$("#email").addClass("erro");
				$("#msgErroEmail").text("Informe um email válido");

				return false;
			}

			if($("#senhaPsicologo").val().length == 0){
				$("#senhaPsicologo").addClass("erro");
				$("#msgErroSenhaPsicologo").text("Preenchimento obrigatório")

				return false;
			}

			if($("#senhaPsicologo").val().length < 8 || $("#senhaPsicologo").val().length > 50){
				$("#senhaPsicologo").addClass("erro");
				$("#msgErroSenhaPsicologo").text("Sua senha deve ter entre 8 e 50 dígitos");

				return false;
			}
		}
	}

	// Função que remove os erros dos campos
	function remErro(){
		if($(this).is("#usuario") == true){
			$("#usuario").removeClass("erro");
			$("#msgErroUsuario").text("");
		}else if($(this).is("#usuarioAdmin") == true){
			$("#usuarioAdmin").removeClass("erro");
			$("#msgErroUsuarioAdmin").text("");
		}else if ($(this).is("#email") == true){
			$("#email").removeClass("erro");
			$("#msgErroEmail").text("");
		}else if($(this).is("#senha") == true){
			$("#senha").removeClass("erro");
			$("#msgErroSenha").text("");
		}else if($(this).is("#senhaAdmin") == true){
			$("#senhaAdmin").removeClass("erro");
			$("#msgErroSenhaAdmin").text("");
		}else {
			$("#senhaPsicologo").removeClass("erro");
			$("#msgErroSenhaPsicologo").text("");
		}
	}

	// Função que mostra a senha
	function mostrarSenha(){
		if($(this).is("#mostrarSenha") == true){
			if($("#senha").prop("type") == "password"){
				$("#senha").prop("type", "text");
			}else{
				$("#senha").prop("type", "password");
			}
		}else if ($(this).is("#mostrarSenhaPsic") == true){
			if($("#senhaPsicologo").prop("type") == "password"){
				$("#senhaPsicologo").prop("type", "text");
			}else{
				$("#senhaPsicologo").prop("type", "password");
			}
		}else{
			if($("#senhaAdmin").prop("type") == "password"){
				$("#senhaAdmin").prop("type", "text");
			}else{
				$("#senhaAdmin").prop("type", "password");
			}
		}
	}

	$("#btnEscolhaUsuario").on("click", exibirForms);
	$("#btnEscolhaPsic").on("click", exibirForms);
	$("#btnEscolhaAdmin").on("click", exibirForms);
	$("#formUsuario").on("submit", validarForm);
	$("#formPsic").on("submit", validarForm);
	$("#formAdmin").on("submit", validarForm);
	$("#usuario").on("input", remErro);
	$("#usuarioAdmin").on("input", remErro);
	$("#email").on("input", remErro);
	$("#senha").on("input", remErro);
	$("#senhaAdmin").on("input", remErro);
	$("#senhaPsicologo").on("input", remErro);
	$("#mostrarSenha").on("change", mostrarSenha);
	$("#mostrarSenhaPsic").on("change", mostrarSenha);
	$("#mostrarSenhaAdmin").on("change", mostrarSenha);
});