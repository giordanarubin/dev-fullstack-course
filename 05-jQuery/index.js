$("h1").css("color", "red"); // $=jQuery; seleciona todos os seletores H1 e muda a cor deles pra vermelho

console.log($("h1").css("font-size")); // seleciona todos os seletores H1 e mostra a font size deles

$("h1").addClass("big-title"); // adiciona classe CSS ao elemento

$("button").html("<em>Vai se fuder</em>"); // muda o texto e coloca em itálico

$("a").attr("href", "https://www.youtube.com.br"); // pega o atributo src do elemento a e muda

$("h1").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: "50%"});
}); // event listener usando jQuery, usando função de animação

$("button").click(function() {
    $("button").css("color", "orange");
}); // não precisa usar loop for, mesmo tendo varios botoes. Fazendo assim muda a cor de todos os botoes, pq o jQuery seleciona todos os elementos com esse nome

$(document).keydown(function(event) {
    console.log(event.key);
}); // a mesma coisa que fizemos no drum kit mas usando jQuery
