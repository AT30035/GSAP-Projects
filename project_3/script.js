var menue = document.querySelector("#nav i" )
var close = document.querySelector("#full #close" )

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.8,
    delay:1,
})
tl.from("#full h4 ",
    {
        x:150,
        duration:0.8,
        stagger:0.25,
        opacity:0,
    }
)
tl.from("#full i",{
    opacity:0,
    duration:0.8,
})

tl.pause() 

menue.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})