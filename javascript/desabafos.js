$(function(){
	// Função que filtra os desabafos por categoria
	function filtrar(){
		$(".desabafo").css("display", "block");
		$(".desabafo").addClass("sem-margem");

		$(".categoria .destaque").each(function(){
			switch($("#filtrar").prop("selectedIndex")){
				case 1:
					if($(this).text() != "Abuso"){
						$(this).parents(".desabafo").css("display", "none");
					}

					break;
				case 2:
					if($(this).text() != "Racismo"){
						$(this).parents(".desabafo").css("display", "none");
					}

					break;
				case 3:
					if($(this).text() != "Depressão"){
						$(this).parents(".desabafo").css("display", "none");
					}

					break;
				case 4:
					if($(this).text() != "Homofobia"){
						$(this).parents(".desabafo").css("display", "none");
					}

					break;
				case 5:
					if($(this).text() != "Transfobia"){
						$(this).parents(".desabafo").css("display", "none");
					}

					break;
				default:
					$(".desabafo").removeClass("sem-margem");
					return false;
			}
		});
	}

	$("#filtrar").on("change", filtrar);
});