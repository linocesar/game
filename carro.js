function Carro(context, teclado, imagem, imgExplosao, imgDerrapagem, imgBuracou) {
   this.context = context;
   this.teclado = teclado;
   this.imagem = imagem;
   this.x = 0;
   this.y = 0;
   this.velocidade = 0;
   this.spritesheet = new Spritesheet(context, imagem, 3, 2);
   this.spritesheet.linha = 0;
   this.spritesheet.intervalo = 100;
   this.imgExplosao = imgExplosao;
   this.imgDerrapagem = imgDerrapagem;
   this.imgBuracou = imgBuracou;
   this.acabaramVidas = null;
   this.vidasExtras = 0;
}
Carro.prototype = {

   atualizar: function() {

        var incremento = this.velocidade*this.animacao.decorrido / 1000;

        var limiteADireita = 2*this.context.canvas.width/3;
        var limiteAEsquerda = this.context.canvas.width/4 - 10;
        if(this.teclado.pressionada(SETA_DIREITA) && this.x <= limiteADireita){
          this.x += incremento;
        }
        if(this.teclado.pressionada(SETA_ESQUERDA) && this.x >= limiteAEsquerda){
          this.x -= incremento;
        }
   },

   desenhar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA))
         this.spritesheet.linha = 1;
      else if (this.teclado.pressionada(SETA_DIREITA))
         this.spritesheet.linha = 2;
      else
         this.spritesheet.linha = 0;

      this.spritesheet.desenhar(this.x, this.y);
      this.spritesheet.proximoQuadro();
   },

   retangulosColisao: function() {

      var rets =[{x: this.x+5, y: this.y+3, largura: 40, altura: 50}];

      return rets;
   },

   colidiuCom: function(outro) {
      // Se colidiu com um Inimigo...
      if (outro instanceof Inimigo) {
         this.animacao.excluirSprite(this);
         this.animacao.excluirSprite(outro);
         this.colisor.excluirSprite(this);
         this.colisor.excluirSprite(outro);

         var exp1 = new Explosao(this.context, this.imgExplosao,
                                 this.x, this.y);
         var exp2 = new Explosao(this.context, this.imgExplosao,
                                 outro.x, outro.y);

         this.animacao.novoSprite(exp1);
         this.animacao.novoSprite(exp2);

         var carro = this;
         exp1.fimDaExplosao = function() {
            carro.vidasExtras--;

            if (carro.vidasExtras < 0) {
               if (carro.acabaramVidas) carro.acabaramVidas();
            }
            else {
               // Recolocar a carro no engine
               carro.colisor.novoSprite(carro);
               carro.animacao.novoSprite(carro);

               carro.posicionar();
            }
         }
      }

      if(outro instanceof Buraco){
        this.animacao.excluirSprite(this);
        this.animacao.excluirSprite(outro);
        this.colisor.excluirSprite(this);
        this.colisor.excluirSprite(outro);

        var ex1 = new Buracada(this.context, this.imgBuracou, this.x, this.y);

        this.animacao.novoSprite(ex1);

        var carro = this;

        ex1.fimDaBuracada = function() {
          carro.colisor.novoSprite(carro);
          carro.animacao.novoSprite(carro);
        }

      }
      if(outro instanceof Oleo){
        this.animacao.excluirSprite(this);
        this.animacao.excluirSprite(outro);
        this.colisor.excluirSprite(this);
        this.colisor.excluirSprite(outro);

        var ex1 = new Derrapagem(this.context, this.imgDerrapagem, this.x, this.y );

        this.animacao.novoSprite(ex1);

        var carro = this;

        ex1.fimDaDerrapagem = function(){
          carro.colisor.novoSprite(carro);
          carro.animacao.novoSprite(carro);


        }
      }
   },

   posicionar: function() {
      var canvas = this.context.canvas;
      this.x = 220;
      this.y = 435;
   }
}
