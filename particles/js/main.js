window.onload = function () {
    var totalShapes = 60;
    var listShapes = [];
    var timeElapsed = 30;
    var canvas = new Canvas({
    	idNodeCanvas: "canvas",
    	typeCtx: "2d",
    	width: window.innerWidth,
    	height: window.innerHeight
    });

    for (var i = 0; i < totalShapes; i++) 
        listShapes.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight))
  
    setInterval( function() { 
    	canvas.clear();

    	for (var i = 0; i < listShapes.length; i++) {
    		listShapes[i].move();
    		listShapes[i].draw(canvas.getCtx(), listShapes);
		}
    }, timeElapsed);
}