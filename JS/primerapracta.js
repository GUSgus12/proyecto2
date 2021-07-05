var myCanvas1a = document.getElementById('myCanvas1');
var    ctx = myCanvas1a.getContext('2d');

var t;
var velocidad = 1;
var ciudad = new Image();
var batman = new Image();
var joker = new Image();
var cartas = new Image();
var playJuego = new Image();
var botiquin = new Image();


var brincar = false; 
  
var ancho = 0;
var alto = 0;
var cielo ; 

var batmanX = [];
var batmanY = [];
var intervaloBatmanA = 0;
var intervaloBatmanAl = 0;

var cartasX = [];
var cartasY = [];

var jokerX = [];
var jokerY = [];

var botonx = [];
var botony = [];

var botiquinx = [];
var botiquiny = [];

var vidas =  5;

var Cboolean1X =  false;
var Cboolean1Y =  false;
var Cboolean1by =  false;
var Cboolean1bx =  false;


var aleatorio = 0; 
var tcartas = 1;
var brincojoker = false;
var tcartas1 = 1;
var iniciocartas1 = false;

var iniciojuego = 0;
var diferenciaEntreCartas = 0;
var cont = 0;

  var audio=  new Audio();

   var golpe=  new Audio();
    var nivel0=  new Audio();


    var x1 =0;
    var y1 =0;
    var x2 =0;
    var y2 =0;

   var  botonok = false; 


ciudad.src = "img/ciudad.png";
batman.src = "img/batman2.png";
joker.src = "img/joker1.png";
cartas.src = "img/cartas.png";
playJuego.src = "img/play.svg";
botiquin.src = "img/botiquin.png";
nivel0.src =  "musica/1.mp3";
audio.src =  "musica/joker.mp3";
golpe.src =  "musica/golpe.mp3";


function color(elEvento){
         evento = elEvento || window.event;
         tipo = evento.type;
         if (tipo == "click") {
          if(x2<=botonx[1] && x2>=botonx[0]){
            if(y2<=botony[1] && y2>=botony[0]){
                inicio();
                botonok = true;
            }
            
          }else{

          }
              
          }

         }

document.getElementById("myCanvas1").onclick = color;

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

myCanvas1a.addEventListener('mousemove', function(evt) {
var mousePos = getMousePos(myCanvas1a, evt);
   x1 = mousePos.x;
   y1 = mousePos.y;
   x2 =  parseInt(x1);
   y2 =  parseInt(y1); 
    document.getElementById("testdiv2").innerHTML= 'Mouse position: ' + x2+ ',' + y2;
  }, true);

function _inicio()
{
    ancho = myCanvas1a.width;
    alto = myCanvas1a.height;

        botonx[0]=ancho/2-50;
    botonx[1] =  botonx[0]+100;

    botony[0]=alto/2-50;
    botony[1] = botony[0]+100;
  
}
window.onload = function() {

   audio.volume = 0.1;
        audio.load();

           golpe.volume = 0.1;
        golpe.load();

 nivel0.volume = 0.1;
nivel0.load();

  _inicio();
  imagen_2();


    ctx.fillStyle = 'rgb(177, 241, 100,0.3)';


//ctx.fillRect(botonx[0],botony[0],30, 30);

ctx.fillRect(botonx[0],botony[0],botonx[1]-botonx[0], botony[1]-botony[0]);
 ctx.drawImage(playJuego,botonx[0],botony[0],botonx[1]-botonx[0], botony[1]-botony[0]);

     /* For keyboard event */ 
            document.addEventListener('keydown', 
                            function(event)  
            { 
              //document.getElementById("testdiv1").innerHTML="key; "+event.key;
            if(event.key== 'ArrowUp'){
            //  document.getElementById("testdiv1").innerHTML="ok";
                  brincar = true;
            }else{
            brincar = false;
          //    document.getElementById("testdiv1").innerHTML=":v";
            }
             dibuja();
            }, true); 
};
function imagen_2(){
   ctx.fillStyle = "#2E9AFE"; 
    ctx.clearRect(0, 0, myCanvas1a.width, myCanvas1a.height);    
    ctx.fillRect(0, 0, myCanvas1a.width, myCanvas1a.height);

}

var iniciocartas = false;
function interval(){
    t=1;
    alet();

    setInterval(function(){

       if(t>=ancho){
          t = 1;
           alet();
          Cboolean1X =  false;
          Cboolean1Y =  false;
          cont++;
        } 
        if(vidas<=0){

        }else{
            t++;
        }
  
    if(t%50 == 0 && t<=aleatorio ){
     alet();
     iniciocartas = false;
     tcartas = 1;
    }

    // tiempo cartas inicio 
    if(iniciocartas == false){
      if(brincojoker== false ){
        iniciocartas = true;
      }
    }

    if(iniciocartas1 == false ){
      if(brincojoker== true ){
        iniciocartas1 = true;
      }
    }
    if(iniciocartas1 == true ){
      if(iniciocartas == false){
                if(vidas<=0 ){}else{tcartas1++;}
         }else if(diferenciaEntreCartas >= intervaloBatmanA+35){
          if(vidas<=0){}else{tcartas1++;}
           
         }else{
tcartas = 1;
      alet();
      iniciocartas = false;
        }

       }
      if(iniciocartas == true ){
        if(iniciocartas1== false){
           if(vidas<=0){}else{tcartas++;}
        }else  if(diferenciaEntreCartas >= intervaloBatmanA+35){
                if(vidas<=0){}else{tcartas++;}
            
        }else{
          tcartas1 = 1;
          alet();
          iniciocartas1 = false;
        }

      }
    if(cartasX[3] <= 0){
          tcartas1 = 1;
         alet();
          iniciocartas1 = false;
        }
    if(cartasX[1] <= 0){
      tcartas = 1;
      alet();
      iniciocartas = false;
    }
    // tiempo cartas fin 
     dibuja();
diferenciaEntreCartas = Math.abs(tcartas1-tcartas);
document.getElementById("testdiv2").innerHTML="nivel: "+cont;
  if(cont%13==0 && cont>1){
  	nivel0.src =  "musica/1.mp3";
  	nivel0.load();
  	 nivel0.play();
  }
    },velocidad,"JavaScript");
}
function alet(){
aleatorio = Math.random(); 
if(aleatorio >= 0.5){
  brincojoker = true;
}else{
  brincojoker = false;
}
if(iniciojuego == 0){
  brincojoker = false;
}
aleatorio = 500*aleatorio;
iniciojuego = iniciojuego +1;
//document.getElementById("testdiv2").innerHTML="ancho = "+ancho+" aleatorio = "+ aleatorio;
}
function dibuja(){
var m =  0;
        // document.getElementById("testdiv").innerHTML=m;
  m = 1- t/ancho;
      //  ctx.fillStyle = "#2278CD";//'rgb('+Math.floor(255-255*t/ancho)+','+Math.floor(128-128*t/ancho)+',255)';
      ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0,myCanvas1a.width, myCanvas1a.height);
         ctx.fillStyle = 'rgb(14,96,176,'+m+')';
        ctx.fillRect(0, 0,myCanvas1a.width, myCanvas1a.height);

        ctx.drawImage(ciudad,-t,0, myCanvas1a.width, myCanvas1a.height);
        ctx.drawImage(ciudad,ancho-t,0, myCanvas1a.width, myCanvas1a.height);
      

      // joker
        jokerX[0]=6*myCanvas1a.width/8;
        jokerX[1]=70+jokerX[0];

        if(brincojoker== true){
          jokerY[0]= 3*alto/8;
        }else{
          jokerY[0]= 5*alto/8;
        }
        

        jokerY[1] =90 + jokerY[0];
     

      // ctx.fillStyle = "#FFFFFF";
      // ctx.fillRect(jokerX[0],jokerY[0], jokerX[1]-jokerX[0],jokerY[1]-jokerY[0]);
        ctx.drawImage(joker,jokerX[0],jokerY[0], jokerX[1]-jokerX[0],jokerY[1]-jokerY[0]);


        // batman 

        batmanX[0] = 1*ancho/8+80;
        batmanX[1] = 70+batmanX[0] ;

        if(brincar == true){
           batmanY[0] = 3*alto/8;
        }else{
           batmanY[0] = 5*alto/8;
        }
          batmanY[1] = 90+batmanY[0];
  
          intervaloBatmanA = batmanX[1]-batmanX[0];
          intervaloBatmanAl = batmanY[0]-batmanY[1];

      // ctx.fillStyle = "#FFFFFF";
        //ctx.fillRect(batmanX[0],batmanY[0]+2*alto/8,intervaloBatmanA,intervaloBatmanAl);

        ctx.drawImage(batman,batmanX[0]-5,batmanY[0]+2*alto/8-2,intervaloBatmanA+5,intervaloBatmanAl);

        //botiquin
    if(cont>=4 && vidas<5){
      if(aleatorio <= 100){
       botiquinx[0] = -1*myCanvas1a.width/16 +myCanvas1a.width*(ancho - t)/ancho;
        botiquinx[1] = botiquinx[0] + 30;
        botiquiny[0] =  3*myCanvas1a.height/8;
        botiquiny[1] =  botiquiny[0] +40;
      }
        ctx.drawImage(botiquin,botiquinx[0],botiquiny[0], botiquinx[0]-botiquinx[1], botiquiny[1]-botiquiny[0]);
    }


        //cartas
        cartasX[0] = -2*ancho/8 +ancho*(ancho - tcartas)/ancho;

        cartasX[1] =  30+cartasX[0];

        cartasY[0] = 6*alto/8;
        cartasY[1] = 40+cartasY[0];

       // ctx.fillStyle = "#FFFFFF";
       // ctx.fillRect(cartasX[0],cartasY[0] , cartasX[1]-cartasX[0], cartasY[1]-cartasY[0]);
  if(tcartas>2){
        ctx.drawImage(cartas,cartasX[0],cartasY[0] , cartasX[1]-cartasX[0], cartasY[1]-cartasY[0]);
}


       // cartasX[2] = cartasX[1] + intervaloBatmanA+20;
       // cartasX[3] =  30+cartasX[2];
   
       cartasX[2] = -2*ancho/8 +ancho*(ancho - tcartas1)/ancho;

        cartasX[3] =  30+cartasX[2];

        cartasY[3] = 4*alto/8;
        cartasY[2] =  4*alto/8-40;

        //ctx.fillStyle = "#FFFFFF";
        //ctx.fillRect(cartasX[2],cartasY[2] , cartasX[3]-cartasX[2], cartasY[3]-cartasY[2]);
        if(tcartas1>2){
             ctx.drawImage(cartas,cartasX[2],cartasY[2] , cartasX[3]-cartasX[2], cartasY[3]-cartasY[2]);
        }
     
        
        limites();
        
        //document.getElementById("testdiv").innerHTML="j = "+jokerY[0]+" b = "+batmanY[1];
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign="center";
        ctx.font="12pt Verdana";
        ctx.fillText("Vidas: "+ vidas,40,40);
         if(vidas<=0){

       ctx.fillStyle = "#FFFFFF";
        ctx.textAlign="center";
        ctx.font="24pt Verdana";
        ctx.fillText("Fin del Juego",ancho/2,alto/2);
        nivel0.pause();
        pausar();
         }


} 
function limites(){
//document.getElementById("testdiv").innerHTML="Cx2 = "+cartasX[2]+" bx1 = "+batmanX[1]+" Cx3 = "+cartasX[3]+" bx0 = "+batmanX[0];
//document.getElementById("testdiv1").innerHTML="Cy2 = "+cartasY[2]+" by1 = "+batmanY[1]+" Cy3 = "+cartasY[3]+" by0 = "+batmanY[0];


if(botiquinx[0]<= batmanX[1] && botiquinx[1]> batmanX[0])
  {

     if(batmanY[0]<= botiquiny[0] && batmanY[1]>=botiquiny[1])
     {
// document.getElementById("testdiv1").innerHTML=":)";
        if( Cboolean1bx == false && Cboolean1by == false){
          vidas = vidas + 1;
          Cboolean1by = true;
          Cboolean1bx = true;
         }
     }else{
        //  document.getElementById("testdiv1").innerHTML="batmanY[0]: "+batmanY[0]+"    botiquiny[0]: "+ botiquiny[0] + "  batmanY[1]: "+batmanY[1]+"  botiquiny[1]: "+botiquiny[1];
       Cboolean1by = false;
     }
  }else{

   Cboolean1bx = false;
  }


  if(cartasX[0]<= batmanX[1] && cartasX[1]> batmanX[0])
  {
     if(batmanY[0]< cartasY[0] && batmanY[1]>=cartasY[1])
     {
        if( Cboolean1X == false && Cboolean1Y == false){
          vidas = vidas -1;
          Cboolean1Y = true;
          Cboolean1X = true;
         }
     }else{
       Cboolean1Y = false;
     }
  }else{
   Cboolean1X = false;
  }

    if(cartasX[2]<= batmanX[1] && cartasX[3]> batmanX[0])
  {
     if(batmanY[0]< cartasY[2]+10 && batmanY[1]>=cartasY[3])
     {
        if( Cboolean1X == false && Cboolean1Y == false){
          vidas = vidas -1;
audio.pause(); 
          golpe1();
           audio.play();
          Cboolean1Y = true;
          Cboolean1X = true;
         }
     }else{
       Cboolean1Y = false;
     }
  }else{
   Cboolean1X = false;
  }
//document.getElementById("testdiv2").innerHTML="booleanY = "+Cboolean1Y+" booleanX = "+ Cboolean1X;
} 

function reproducir()
{
try{
	audio.pause(); 
        audio.play();
}catch(e){
  document.getElementById("testdiv2").innerHTML=e;
}

}

function golpe1(){
golpe.pause();
        golpe.play();
}
function pausar()
{
try{

        audio.pause();
}catch(e){}

}
function inicio(){
  if(cont <=0 && botonok == false){
    interval(); 
    nivel0.play();
  }
}


