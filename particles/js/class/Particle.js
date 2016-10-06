Particle.prototype.constructor = Particle;

function Particle(initX, initY) {
    this.x = initX;
    this.y = initY;
    this.lastX = initX;
    this.lastY = initY;
    this.radius = (Math.random() * 3) + 3;
    this.objectiveX = (Math.random() * window.innerWidth - 10) + 10;
    this.objectiveY = (Math.random() * window.innerHeight - 10) + 10;
    this.t = 0;
    this.colourBody = 'rgba(255, 255, 255, 0.5)';
    this.colourConnections = 'rgba(255, 255, 255, 0.1)';
}

Particle.prototype.changeDirection = function () {
    this.objectiveX = (Math.random() * window.innerWidth - 10) + 10;
    this.objectiveY = (Math.random() * window.innerHeight - 10) + 10;
    this.t = 0;
}

Particle.prototype.move = function () {
    var vDirector = this.calculateVectorDirector(this);

    this.lastX = this.x;
    this.lastY = this.y;

    this.x = this.x + this.t * vDirector[0];
    this.y = this.y + this.t * vDirector[1];
    this.t += 0.0005;

    if (this.isNear(this.objectiveX, this.objectiveY, 1000))
        this.changeDirection();
}

Particle.prototype.calculateVectorDirector = function () {
    return [this.objectiveX - this.x, this.objectiveY - this.y];
}

Particle.prototype.drawBody = function (ctx) {
    ctx.fillStyle = this.colourBody;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
}

Particle.prototype.drawConnections = function (ctx, listShapes) {
    ctx.strokeStyle = this.colourConnections;

    for (var i = 0; i < listShapes.length; i++)
        if (this.isNear(listShapes[i].x, listShapes[i].y)) {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(listShapes[i].x, listShapes[i].y);
            ctx.stroke();
        }
}

Particle.prototype.draw = function (ctx, listShapes) {
    this.drawConnections(ctx, listShapes);
    this.drawBody(ctx);
}

Particle.prototype.isNear = function (x, y, distance) {
    var distance = distance || 10000;

    if ((Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) * 0.5 < distance)
        return true;
    return false;

}