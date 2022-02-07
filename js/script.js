const sprites = new Image();
sprites.src = '../img/sprites.png';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Plano de fundo
const planoFundo = {
    spriteX: 398,
    spriteY: 0,
    largura: 268,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenho() {
        ctx.fillStyle = '#70c5cc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            sprites,
            planoFundo.spriteX, planoFundo.spriteY,
            planoFundo.largura, planoFundo.altura,
            planoFundo.x, planoFundo.y,
            planoFundo.largura, planoFundo.altura,
        );
        ctx.drawImage(
            sprites,
            planoFundo.spriteX, planoFundo.spriteY,
            planoFundo.largura, planoFundo.altura,
            planoFundo.x + planoFundo.largura, planoFundo.y,
            planoFundo.largura, planoFundo.altura,
        );
    },
};

// chão
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenho() {
        ctx.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        );
        ctx.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x + chao.largura, chao.y,
            chao.largura, chao.altura,
        );
    },
};
const flapBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade:0.25,
    velocidade:0,
    atualiza(){
        flapBird.velocidade = flapBird.velocidade + flapBird.gravidade;
        flapBird.y = flapBird.y + flapBird.velocidade;
    },
    desenho() {
        ctx.drawImage(
            sprites,
            flapBird.spriteX, flapBird.spriteY, // sprite x, sprite y
            flapBird.largura, flapBird.altura, // tamanho do recorte na sprite
            flapBird.x, flapBird.y, // posição do sprite no canvas
            flapBird.largura, flapBird.altura,
        );
    },
};

function loop() {
    planoFundo.desenho();
    chao.desenho();
    flapBird.desenho();
    flapBird.atualiza();
    requestAnimationFrame(loop);
};

loop();
