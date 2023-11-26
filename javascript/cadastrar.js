$(function(){
	// Função que valida o formulário de cadastro
	function validarForm(){
		if($("#usuario").val().length == 0){
			$("#usuario").addClass("erro");
			$("#msgErroUsuario").text("Preenchimento obrigatório");

			return false;
		}

		if($("#usuario").val().length > 50){
			$("#usuario").addClass("erro");
			$("#msgErroUsuario").text("Seu nome de usuário não pode ter mais de 50 dígitos");

			return false;
		}

		if($("#senha").val().length == 0){
			$("#senha").addClass("erro");
			$("#msgErroSenha").text("Preenchimento obrigatório");

			return false;
		}

		if($("#senha").val().length > 50 || $("#senha").val().length < 8){
			$("#senha").addClass("erro");
			$("#msgErroSenha").text("Sua senha deve ter entre 8 e 50 dígitos");

			return false;
		}

		if($("#simApVol").prop("checked") == false && $("#naoApVol").prop("checked") == false){
			$("#msgErroApVol").text("Selecione se deseja receber apoio de um voluntário");

			return false;
		}

		if($("#simSerVol").prop("checked") == false && $("#naoSerVol").prop("checked") == false){
			$("#msgErroSerVol").text("Selecione se deseja ser um voluntário");

			return false;
		}

		if($("#simAcPsic").prop("checked") == false && $("#naoAcPsic").prop("checked") == false){
			$("#msgErroAcPsic").text("Selecione se deseja receber acompanhamento psicológico");

			return false;
		}

		if(checarDisplayOpcionais() == true){
			const telefoneRegex = /^[0-9]{11}$/;
			const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z0-9_.]{2,}$/;

			if($("#telefone").val().length == 0){
				$("#telefone").addClass("erro");
				$("#msgErroTel").text("Preenchimento obrigatório");

				return false;
			}

			if(telefoneRegex.test($("#telefone").val()) == false){
				$("#telefone").addClass("erro");
				$("#msgErroTel").text("Informe um telefone válido (somente 11 números)");

				return false;
			}

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
		}
	}

	// Função que verifica se os campos opcionais estão sendo exibidos
	function checarDisplayOpcionais(){
		if($(".area-campos-opcionais").css("display") == "block"){
			return true;
		}
	}

	// Função que exibe os campos opcionais
	function exibirOpcionais(){
		if($("#simApVol").prop("checked") == true || $("#simSerVol").prop("checked") == true || $("#simAcPsic").prop("checked") == true){
			$(".area-campos-opcionais").css("display", "block");
		}
	}

	// Função que oculta os campos opcionais
	function ocultarOpcionais(){
		if($("#naoApVol").prop("checked") == true && $("#naoSerVol").prop("checked") == true && $("#naoAcPsic").prop("checked") == true){
			$(".area-campos-opcionais").css("display", "none");
		}
	}

	// Função que mostra e oculta a senha
	function mostrarSenha(){
		if($("#senha").prop("type") == "password"){
			$("#senha").prop("type", "text")
		}else {
			$("#senha").prop("type", "password");
		}
	}

	// Função que remove o erro do campo de usuário
	function remErroUsuario(){
		$("#usuario").removeClass("erro");
		$("#msgErroUsuario").text("");
	}

	// Função que remove o erro do campo de senha
	function remErroSenha(){
		$("#senha").removeClass("erro");
		$("#msgErroSenha").text("");
	}

	// Função que remove o erro do campo de apoio de voluntário
	function remErroApVol(){
		$("#msgErroApVol").text("");
	}

	// Função que remove o erro do campo de ser voluntário
	function remErroSerVol(){
		$("#msgErroSerVol").text("");
	}

	// Função que remove o erro do campo de acompanhamento psicológico
	function remErroAcPsic(){
		$("#msgErroAcPsic").text("");
	}

	// Função que remove o erro do campo de telefone
	function remErroTelefone(){
		$("#telefone").removeClass("erro");
		$("#msgErroTel").text("");
	}

	// Função que remove o erro do campo de senha
	function remErroEmail(){
		$("#email").removeClass("erro");
		$("#msgErroEmail").text("");
	}

	$("#formCadastro").on("submit", validarForm);
	$("#usuario").on("input", remErroUsuario);
	$("#senha").on("input", remErroSenha);
	$("#mostrarSenha").on("change", mostrarSenha);

	$("#simApVol").on("change", function(){
		remErroApVol();
		exibirOpcionais();
	});

	$("#simSerVol").on("change", function(){
		remErroSerVol();
		exibirOpcionais();
	});

	$("#simAcPsic").on("change", function(){
		remErroAcPsic();
		exibirOpcionais();
	});

	$("#naoApVol").on("change", function(){
		remErroApVol();
		ocultarOpcionais();
	});

	$("#naoSerVol").on("change", function(){
		remErroSerVol();
		ocultarOpcionais();
	});

	$("#naoAcPsic").on("change", function(){
		remErroAcPsic();
		ocultarOpcionais();
	});

	$("#telefone").on("input", remErroTelefone);
	$("#email").on("input", remErroEmail);
});