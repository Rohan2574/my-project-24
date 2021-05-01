class Stone{
	constructor(x,y){
    var options={
     restitution:0.8,
	 friction:0.9,
     density:12
    }

	    this.x=x;
		this.y=y;
		this.width=50;
        this.height=50;	
        this.body=Bodies.rectangle(this.x, this.y,50,50)
        World.add(world, this.body);


	}
	display()
	{
			var stonepos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
			strokeWeight(3);
			stroke("white");
			fill("black");
		
			ellipse(0,0,this.width,this.height);
			pop()
	}

}