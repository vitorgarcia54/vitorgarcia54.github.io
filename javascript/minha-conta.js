$(function(){
    // Função que valida o formulário
    function validarForm(){
        const simRegex = /^Sim$/;
        const naoRegex = /^Não$/;
        const telefoneRegex = /^[0-9]{11}$/;
        const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z0-9_.]{2,}$/;

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

        if($("#senha").val().length < 8 || $("#senha").val().length > 50){
            $("#senha").addClass("erro");
            $("#msgErroSenha").text("Sua senha deve ter entre 8 e 50 dígitos");

            return false;
        }

        if($("#apVol").val().length == 0){
            $("#apVol").addClass("erro");
            $("#msgErroApVol").text("Preenchimento obrigatório");

            return false;
        }

        if(simRegex.test($("#apVol").val()) == false && naoRegex.test($("#apVol").val()) == false){
            $("#apVol").addClass("erro");
            $("#msgErroApVol").text("Digite 'Sim' ou 'Não'");

            return false;
        }

        if($("#ehVol").val().length == 0){
            $("#ehVol").addClass("erro");
            $("#msgErroEhVol").text("Preenchimento obrigatório");

            return false;
        }

        if(simRegex.test($("#ehVol").val()) == false && naoRegex.test($("#ehVol").val()) == false){
            $("#ehVol").addClass("erro");
            $("#msgErroEhVol").text("Digite 'Sim' ou 'Não'");

            return false;
        }

        if($("#acPsic").val().length == 0){
            $("#acPsic").addClass("erro");
            $("#msgErroAcPsic").text("Preenchimento obrigatório");

            return false;
        }

        if(simRegex.test($("#acPsic").val()) == false && naoRegex.test($("#acPsic").val()) == false){
            $("#acPsic").addClass("erro");
            $("#msgErroAcPsic").text("Digite 'Sim' ou 'Não'");

            return false;
        }

        if($("#telefone").val().length == 0){
            $("#telefone").addClass("erro");
            $("#msgErroTelefone").text("Preenchimento obrigatório");

            return false;
        }

        if(telefoneRegex.test($("#telefone").val()) == false){
            $("#telefone").addClass("erro");
            $("#msgErroTelefone").text("Informe um telefone válido (somente 11 números)");

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

    // Função que habilita e desabilita os campos do formulário
    function habilitarCampos(){
        if($(".campos-form").prop("readonly") == true){
            $(".campos-form").prop("readonly", false);
            $("#usuario").trigger("focus");
            $("#btnSubmit").css("display", "block");
            $(this).text("Cancelar");
        }else{
            $(".campos-form").prop("readonly", true);
            $("#usuario").trigger("focus");
            $("#btnSubmit").css("display", "none");
            $(this).text("Alterar dados");
        }
    }

    // Função que remove os erros dos campos do formulário
    function removerErro(){
        if($(this).is("#usuario") == true){
            $(this).removeClass("erro");
            $("#msgErroUsuario").text("");

            return false;
        }

        if($(this).is("#senha") == true){
            $(this).removeClass("erro");
            $("#msgErroSenha").text("");

            return false;
        }

        if($(this).is("#apVol") == true){
            $(this).removeClass("erro");
            $("#msgErroApVol").text("");

            return false;
        }

        if($(this).is("#ehVol") == true){
            $(this).removeClass("erro");
            $("#msgErroEhVol").text("");

            return false;
        }

        if($(this).is("#acPsic") == true){
            $(this).removeClass("erro");
            $("#msgErroAcPsic").text("");

            return false;
        }

        if($(this).is("#telefone") == true){
            $(this).removeClass("erro");
            $("#msgErroTelefone").text("");

            return false;
        }

        if($(this).is("#email") == true){
            $(this).removeClass("erro");
            $("#msgErroEmail").text("");

            return false;
        }
    }

    // Função que mostra e oculta a senha
    function mostrarSenha(){
        if($("#senha").prop("type") == "password"){
            $("#senha").prop("type", "text");
        }else{
            $("#senha").prop("type", "password");
        }
    }

    $("#formAlter").on("submit", validarForm);
    $("#btnAlterarDados").on("click", habilitarCampos);
    $("#usuario").on("input", removerErro);
    $("#senha").on("input", removerErro);
    $("#mostrarSenha").on("change", mostrarSenha);
    $("#apVol").on("input", removerErro);
    $("#ehVol").on("input", removerErro);
    $("#acPsic").on("input", removerErro);
    $("#telefone").on("input", removerErro);
    $("#email").on("input", removerErro);
});