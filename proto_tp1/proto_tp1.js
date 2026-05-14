// Video explicativo: https://youtu.be/KEdmG-WRTdw

let circleX;
let circleY;
let colorCircle;
let colorActual = 1;

function cambiarColor() {
  switch (colorActual) {
    case 1:
      colorCircle = color(0, 0, 255); // Azul
      break;
    case 2:
      colorCircle = color(255, 0, 0); // Rojo
      break;
    //case 3:
      //colorCircle = color(255, 255, 255); // Blanco
     // break;
  }
}

function dibujarCirculoTipo1() {
  circleX = random(0, width);
  circleY = random(0, height);
  strokeWeight(2);
  circle(circleX, circleY, 25);
  strokeWeight(1);
  circle(circleX, circleY, 20);
  circle(circleX, circleY, 15);
}

//function dibujarCirculoTipo2() {}

//function dibujarCirculoTipo3() {}

function setup() {
  createCanvas(400, 400);
  colorCircle = color(0, 0, 255); 
  noLoop(); 
}

function draw() {
  background(0); // Fondo negro
  
  // Bucle para dibujar los 150 círculos
  for (let i = 0; i < 150; i += 1) {
    
    
    circleX = random(0, width);
    circleY = random(0, height);
    
    
    if (keyIsPressed && key === ' ') {
      // === MODO ESPACIO: Rojo y Azul ===
      if (circleX < 200) {
        fill(255, 0, 0); // Izquierda (0-200): Rojo
      } else {
        fill(0, 0, 255); // Derecha (200-400): Azul
      }
      
    } else if (keyIsPressed && (key === 'b' || key === 'B')) {
      // MODO TECLA B: Blanco y Azul 
      if (circleX < 200) {
        fill(255, 255, 255); // Izquierda (0-200): Blanco 
      } else {
        fill(0, 0, 255);     // Derecha (200-400): Azul 
      }
      
    } else if (keyIsPressed && (key === 'v' || key === 'V')) {
      //  MODO TECLA V: Rojo y Blanco 
      if (circleX < 200) {
        fill(255, 0, 0);     // Izquierda (0-200): Rojo 
      } else {
        fill(255, 255, 255); // Derecha (200-400): Blanco 
      }
      
    } else {
      // MODO CLICK  
      fill(colorCircle); // Usa el color global que cambia al hacer click
    }
    
   
    strokeWeight(2);
    circle(circleX, circleY, 25);
    strokeWeight(1);
    circle(circleX, circleY, 20);
    circle(circleX, circleY, 15);
  }
}


function mousePressed() {
  if (colorActual < 2) {
    colorActual += 1;
  } else {
    if (colorActual == 2) {
      colorActual = 1;
    }
  } 
    
  cambiarColor();
  redraw(); // Redibuja la pantalla para mostrar el color del click
}


function keyPressed() {
  if (key === ' ' || key === 'b' || key === 'B' || key === 'v' || key === 'V') {
    redraw(); 
  }
}
