class Paper {
	constructor(x, y, width, height) {
	  var options = {
		isStatic: false,
		restitution :1
	  };
	  this.image = loadImage("paper2.png");
	  this.width = width;
	  this.height = height;
	  this.body = Bodies.rectangle(x, y, this.width, this.height, options);
	  World.add(world, this.body);
	}
	display() {
	  var pos = this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  imageMode(CENTER);
	  image(this.image, 0, 0, this.width, this.height);
	  pop();
	}
  }
  
//class Paper
///{
//	constructor(x,y,width,height)
///	{
///		var options={
///			isStatic:false,
//			restitution:0.3,
//			friction:0.5,
//			density:1.2
//
			
//			}
	//	this.x=x;
//		this.y=y;
	//	this.width = width;
	//	this.height = height;
	//	this.image = loadImage("paper2.png");
	//	this.body=Bodies.rectangle(this.x, this.y, this.width,this.height ,options)
	//	World.add(world, this.body);

//	}
	//display()
//	{
			
	//		var paperpos=this.body.position;		
//
	///		push()
	//		translate(paperpos.x, paperpos.y);
	//	
	//		strokeWeight(3);
	//		fill(255,0,255)
	//		image(this.image,this.x,this.y,this.r/2);
	//		pop()
	//		
//	}

 //}