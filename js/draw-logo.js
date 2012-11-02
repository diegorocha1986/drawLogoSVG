;(function(d){

	window.logoSVG = window.SVG || {};

	window.logoSVG = function(){
		this.paper;

		this.letras 		= {
			D 	: {
				element : null,
				x : 50,
				y : 75
			},
			I 	: {
				element : null,
				x : 0,
				y : 0
			},
			E 	: {
				element : null,
				x : 0,
				y : 0
			},
			G 	: {
				element : null,
				x : 0,
				y : 0
			},
			O 	: {
				element : null,
				x : 0,
				y : 0
			},
			R 	: {
				element : null,
				x : 0,
				y : 0
			},
			O2 	: {
				element : null,
				x : 0,
				y : 0
			},
			C : {
				element : null,
				x : 0,
				y : 0
			},
			H : {
				element : null,
				x : 0,
				y : 0
			},
			A : {
				element : null,
				x : 0,
				y : 0
			}
		};

		this.strokeWidth 	= 6;
		this.strokeColor 	= '#fff';

		this.initialize();
	}

	logoSVG.prototype.initialize = function(){
		this.createPaper();
		console.log(this)
	}

	logoSVG.prototype.createPaper = function(){
		this.paper = Raphael('logo', 500, 110);
	}

	var logo = new logoSVG();

})(document);