class Snake {
 
    constructor(){

  this.body = []; 
  this.body[0] = createVector(0,0);
  this.ydir = 0;
  this.ydir = 0;
  this.len = 0;
  }
  setDir(x,y){
this.xdir = x;
this.ydir = y;

  }
    update(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.y +=this.xdir;
    head.y += this.ydir;
    }

    grow(){
let head = this.body[this.body.length-1].copy();
this.len++;
this.body.push(head);

    }
   eat(pos){
  let x = this.body[this.body.length-1].x
  let y = this.body[this.body.length-1].y
  if(x == pos.x && y == pos.y){
   this.grow();
    return true;
  }
  return false;
   }
  display(){
    for(let i = 0; i < this.body.length;i++){
  fill(0);
  noStroke();
  rect(this.body[i].x,this.body[i].y,10,10);
    }
  }

  }