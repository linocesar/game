function Buraco(context, imagem, x, y, velocidade){
this.imagem = imagem;
this.x = x;
this.y = y;
this.velocidade = velocidade;
}
Buraco.prototype.atualizar = function () {
  this.y += this.velocidade;
};

Buraco.prototype.desenhar = function () {
  var ctx = this.context;
  var img = tjis.imagem;

  ctx.drawImage(img, this.x, this.y, img.width, img.height);
};
