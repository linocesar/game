function Animacao(context) {
  this.context = context;
  this.sprites =[];
  this.ligado = false;
  this.processamentos = [];
  this.processamentosExcluir = [];
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

  //this.limparTela();

  for (var i in this.sprites) {
    this.sprites[i].atualizar();
  }
  for(var i in this.sprites){
    this.sprites[i].desenhar();
  }

  for(var i in this.processamentos){
    this.processamentos[i].processar();
  }
  this.processarExclusoes();


  var animacao = this;

requestAnimationFrame(function(){
  animacao.proximoFrame();
});

};

Animacao.prototype.novoProcessamento = function (processamento) {
  this.processamentos.push(processamento);
  processamento.animacao = this;
};
Animacao.prototype.excluirSprite = function (sprites) {
  this.spritesExcluir.push(sprite);
};

Animacao.prototype.excluirProcessamento = function (processamento) {
  this.processamentosExcluir.push(processamento);
};
Animacao.prototype.processarExclusoes = function () {
  var novoSprites = [];
  var novoProcessamentos = [];

  for(var i in this.sprites){
    if(this.spritesExcluir.indexOf(this.sprites[i] == -1)){

      novoSprites.push(this.sprites[1]);
    }

    if(var i in this.processamentos){
      if(this.processamentosExcluir.indexOf())
    }
    
  }
};
























Animacao.prototype.limparTela = function () {
  var ctx = this.context;
  ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
};
