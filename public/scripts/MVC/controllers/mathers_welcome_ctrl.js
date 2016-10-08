app.controller('mathers_welcome_ctrl', ['$scope', function($scope){
	$scope.apps = [
	    {src: "matrix.png", name: "Matriz", href: "/solucoes/matriz", color: "#26645c", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "consts.png", name: "Contantes", href: "/solucoes/contantes", color: "#3a8b83", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "log.png", name: "Logaritmo", href: "/solucoes/logaritmo", color: "#1d9989", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "2equation.png", name: "Equação do 2º grau", href: "/solucoes/equacao2", color: "#116f72", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "1equation.png", name: "Equação do 1º grau", href: "/solucoes/equacao1", color: "#0e7a72",  likeCount: 8484},
	    {src: "convert.png", name: "Conversão", href: "/solucoes/conversao", color: "#0a7e74", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "geometry.png", name: "Geometria", href: "/solucoes/geometria", color: "#16857d", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "percent.png", name: "Porcentagem", href: "/solucoes/porcentagem", color: "#16857d", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "progress.png", name: "Progressões", href: "/solucoes/progress", color: "#1c998d", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "pow.png", name: "Exponenciação", href: "/solucoes/exponenciacao", color: "#15857d", gifSrc: "matrix.gif", likeCount: 8484},
	    {src: "radic.png", name: "Radiciação", href: "/solucoes/radiciacao", color: "#06665e", gifSrc: "matrix.gif", likeCount: 8484},
	];
}])