class stand extends baseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("stand.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }