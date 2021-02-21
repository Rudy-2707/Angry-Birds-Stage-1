class Log {

    constructor(x,y,w,h,a){
        var rect_options = {
            isStatic:true ,
            restitution:0.8,
            friction:1,
            density:1,
        }
        this.body = Bodies.rectangle(x,y,w,h,rect_options)
        this.h = h
        this.w = w
        this.a = a
        Matter.Body.setAngle(this.body,a)
        World.add(world,this.body)
    }
    display(){
        push()
        rectMode(CENTER)
        rotate(this.body.angle)
        translate(this.body.position.x,this.body.position.y)
        fill("maroon")
        rect(this.body.position.x,this.body.position.y, this.w, this.h)
        pop()
    }

}