function Animacao(context) {
  this.context = context;
  this.sprites =[];
  this.ligado = false;
}

Animacao.prototype.novoSprite = function (sprite) {
  this.sprites.push(sprite);
  sprite.animacao = this;
};

Animacao.prototype.ligar = function () {
  this.ligado = true;
  this.proximoFrame();

};

Animacao.prototype.desligar = function () {
  this.ligado = false;
};

Animacao.prototype.proximoFrame = function () {
  if(!this.ligado){ return;}

  this.limparTela();

  for (var i in this.sprites) {
    this.sprites[i].atualizar();
  }
  for(var i in this.sprites){
    this.sprites[i].desenhar();
  }
var animacao = this;

requestAnimationFrame(function(){
  animacao.proximoFrame();
});

};

Animacao.prototype.limparTela = function () {
  var ctx = this.context;
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
};
