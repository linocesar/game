function Buraco(context, imagem, x, y, velocidade){
this.context = context;
this.imagem = imagem;
this.x = x;
this.y = y;
this.velocidade = velocidade;

}
Buraco.prototype =  {

  atualizar: function () {
      this.y +=
       this.velocidade * this.animacao.decorrido / 1000;

    if (this.y > this.context.canvas.height) {
       this.animacao.excluirSprite(this);
       this.colisor.excluirSprite(this);
    }
  },

desenhar : function () {
  var ctx = this.context;
  var img = this.imagem;

 ctx.drawImage(img, this.x, this.y, img.width, img.height);
},

colidiuCom : function (outro) {

},

retangulosColisao : function () {

  var rets =  [ {x: this.x+10, y: this.y+3, largura: 40, altura: 50},];

  return rets;

  }
}
