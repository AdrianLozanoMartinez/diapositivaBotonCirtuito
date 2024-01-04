/*Función para dar movimiento a un círculo*/
function movimiento(){

   /* Inicializamso nuestro canvas */
   let micanvas_01=document.getElementById("coches_canvas");  /*Asociamos con el html y css */
   let dibujo=micanvas_01.getContext("2d"); /*Le damos formato 2D */

   /*Colocación del círculo y radio que ocupa */
   let x=750; /*Relacionado con los if por eso si aumenta funciona poco o deja de funcionar */
   let y=650;
   let r=50;

   /*Porcentaje */
   let z=10;
              
   /*Imágenes */
   let imagen=new Image(); /*Declaramos variable de las imágenes */
   let imagen2=new Image();
   let imagen3=new Image();
   let imagen4=new Image();
      
       /*CÍRCULO*/
       function dibuja(dibujo,posicion_x,posicion_y,radio){ 
         /* Iniciamos la ruta */
         dibujo.beginPath();
         /*Dibujamos la circunferencia*/
          dibujo.arc(posicion_x,posicion_y,radio,0,2*Math.PI,true); 
          /*Le damos color */
          dibujo.fillStyle="rgb(0,0,0)"; 
          /* Cerramos la ruta, aunque con fill no sería necesario ya que lo rellenaría.*/
         dibujo.closePath();
         /* Rellenamos*/
         dibujo.fill(); 
        }

        /*PORCENTAJE*/
        function dibuja_porcentaje(dibujo,z){
            dibujo.font="2em Arial"; /*Tamaño y tipo de letra */
            dibujo.fillStyle="red"; /*Color */
            dibujo.fillText(parseInt(z)+"%",710,660); /*Porcentaje 100% y ubicación x,y*/
        }

        /*CARGANDO*/
        function dibuja_cargando(){
            dibujo.font="5em Verdana"; 
            dibujo.fillStyle="black"; 
            dibujo.fillText("CARGANDO...",450,150); /*Texto y tamaño */
        }


        /*ANIMACIÓN - CÍRCULO + PORCENTAJE*/
            let tiempo=setInterval(function(){
                
                r=r+0.5;  /*Aumentamos el radio de 0.5 a 0.5 */
                z=z+0.5;  /*Aumentemos el porcentaje hasta llegar al 100%, realizado calculo arriba*/
                    
                /*Llamamos a las funciones que nos dibujará la circunferencia, el porcentaje, el título cargando*/
                dibuja(dibujo,x,y,r); /*Círculo */
                dibuja_porcentaje(dibujo,z); /*Porcentaje */
                dibuja_cargando(); /*Cargando */
                

                /*IMÁGENES */
                if(z>=25){  /*Al llegar a los 25% */
                    imagen.src = "./imagen/coche1.jpg"; /*Definimos de donde proceden las imágenes */
                    imagen.onload = function() {
                        dibujo.drawImage(this, 20, 20,200,100);
                    }
                 }   

                if(z>=50){
                    imagen2.src = "./imagen/coche2.jpg";
                    imagen2.onload = function() {
                        dibujo.drawImage(this, 20, 130,200,100);
                    }
                }   

                if(z>=75){
                    imagen3.src = "./imagen/coche3.jpg";
                    imagen3.onload = function() {
                        dibujo.drawImage(this, 20, 240,200,100);
                    }
                }   

                if(z>=100){
                    imagen4.src = "./imagen/coche4.jpg";
                    imagen4.onload = function() {
                       dibujo.drawImage(this, 20, 350,200,100);
                      
                    }   
                }
                
                /* CÍRCULO - Paramos la animación cuando el radio llega a 140*/    
                if (r>=140){
                    clearInterval(tiempo);
                }

            }
            ,5);

}


    /*Botón que hace que funcione el Canvas */
    function boton(){ 
    let miCanvas=document.getElementById("boton"); 
    let dibujo=miCanvas.getContext("2d"); 

         /*Agregar texto*/
         dibujo.font="2em Verdana"; /*Tamaño de la letra y tipo */
         dibujo.fillText("PULSE",40,50); /*Texto y tamaño */
         
    }

    /* Escucha que llama a la función boton cuando se cargue la página*/
    window.addEventListener('load',boton);