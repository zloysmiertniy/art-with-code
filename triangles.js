//,,
//- Modify here ------------------------------------
let t1 = [0,0,0,0,0,0];
let c1 = [0, 0, 0, 255];
let t2 = [0,0,0,0,0,0];
let c2 = [0, 0, 0, 255];
let t3 = [0,0,0,0,0,0];
let c3 = [0, 0, 0, 255];
//--------------------------------------------------

function setup() {
  createCanvas(950, 1050);
  colorMode(RGB, 255);
  frameRate(12);
  loop();
}

function draw() {

  background(125);
  fill(0)
  noStroke();
  textSize(24);
  text(mouseX + ", " + mouseY, 40, 50)

  if (drawExercise) {
    drawExampleTriangles();
    drawMyTriangles();
  }

  fin();
}

function drawMyTriangles() {
  if (t1.length == 6) {
    //- Modify here ----------------------------------
    //fill(0,0,0,255)
    //triangle(t1[0],t1[1],t1[2],t1[3],t1[4],t1[5]);

    //------------------------------------------------
  }
  if (t2.length == 6) {
    //- Modify here ----------------------------------

    //------------------------------------------------
  }
  if (t3.length == 6) {
    //- Modify here ----------------------------------

    //------------------------------------------------
  }

}












function drawExampleTriangles(){ for(var i=0;i<3;i++){ let c=color(coltex[i]); noFill(); drawingContext.setLineDash([10, 5]); stroke(c); strokeWeight(4); triangle(tex[i][0],tex[i][1],tex[i][2],tex[i][3],tex[i][4],tex[i][5]); fill(c); noStroke(); text(coltex[i], 190+190*i, 50); } } function centroidsMatch(){ if(t1.length !=6 || t2.length !=6 || t3.length !=6  ) { return false;} cmx=(t1[0]+t1[2]+t1[4]+ t2[0]+t2[2]+t2[4]+ t3[0]+t3[2]+t3[4])/3.0; cmy=(t1[1]+t1[3]+t1[5]+ t2[1]+t2[3]+t2[5]+ t3[1]+t3[3]+t3[5])/3.0; cexx=0; cexy=0; for(var j=0;j<3;j++){ cexx+=(tex[j][0]+tex[j][2]+tex[j][4])/3.0; cexy+=(tex[j][1]+tex[j][3]+tex[j][5])/3.0; } dist=sqrt(pow(cexx-cmx,2)+pow(cexy-cmy,2)); if(dist<10){ return true;} else{ return false;} } function fin(){ if(centroidsMatch()){ loop(); drawingContext.setLineDash([]); drawExercise=false; for(var i=0;i<triangles;i++){ let c=color(colores[i]); fill(c); stroke(c); strokeWeight(4); triangle(txp[i*3], typ[i*3], txp[i*3+1], typ[i*3+1] , txp[i*3+2], typ[i*3+2]); } drawLines=false; if(alp<255){ fill(255,255,255,255-alp); alp+=25; rect(0,0 ,950, 1050); } else if(alp>=255) noLoop(); } }