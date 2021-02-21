class Bird{

    constructor(x,y,w,h){
        var box_options = {
        restitution:1,
        density:1,
        friction:1,
        }
        this.body = Bodies.rectangle(x,y,w,h)
        this.h = h
        this.w = w
        World.add(world,this.body)
    }
    display(){
        push()
        rectMode(CENTER)
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        fill("red")
        rect(this.body.position.x, this.body.position.y,this.h,this.w)
        pop()
    }
}