<!DOCTYPE html>
<html>
<head>
    <title>labsmart</title>
    <meta charset="utf-8" />
	<link rel="stylesheet" href="formatacao.css">
   
</head>
<body>

		<div id="d1"><h1> Está Página fala sobre carros </h1></div>
	
		<div id="d2">
			<ul>
				<li></ul><a href="./index.html"> Home </a></li>
				<li><a href="./teste.html"> Testes dos carros </a></li>
				<li><a href="./maisVendidos.html"> Mais vendidos </a></li>
				<li><a href="./cadastro.html"> Cadastro </a></li>
			</ul>	
		</div>
		
		<?php
			$nome = $_POST["nome"];
			$email = $_POST["email"];
			$fone = $_POST["fone"];
						
		?>		
		
		<div id="d4">
		
				<p id="p2">Cadastro do usuário efetuado com sucesso</p>
				
				<div id="d5"><button id="botaoVoltar" name="Voltar"> <a id="a1" href="javascript:window.history.go(-1)">Voltar</a> </button></div>
		</div>
	
</body>
</html>