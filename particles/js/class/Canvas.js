Canvas.prototype.constructor = Canvas;

function Canvas(config) {
    this.c = document.getElementById(config.idNodeCanvas);
    this.ctx = this.c.getContext("2d");
    this.ctx.canvas.width = config.width;
    this.ctx.canvas.height = config.height;
}

Canvas.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}

Canvas.prototype.getCtx = function () {
    return this.ctx;
}