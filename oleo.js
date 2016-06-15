function Oleo(context, imagem, x, y, velocidade) {
  this.context = context;
  this.imagem = imagem;
  this.x = x;
  this.y = y;
  this.velocidade = 0;
}

Oleo.prototype.atualizar = function () {
  this.y += this.velocidade;
};

Oleo.prototype.desenhar = function () {
    var ctx = this.context;
    var img = this.imagem;
    ctx.drawImage(img, this.x, this.y, img.width, img.height);
};
