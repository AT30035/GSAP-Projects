var  inmouse = document.querySelector(".card ")
var  outmouse = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

inmouse.addEventListener("mouseover", function(){
    gsap.to(inmouse,{
        scale:1,
        duration:0.7,
        delay:0.6,
    }
    )
})
inmouse.addEventListener("mouseleave", function(){
    gsap.to(inmouse,{
        scale:0.8,
        duration:0.7,
        delay:0.6,
    })
})

// for cursor animation

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        // ease: "elastic.out(1,0.2)",
        ease: "back.out"

    }) 
} )

image.addEventListener("mouseenter", function()
{
    gsap.to(cursor,{
        scale:2,
        backgroundColor:"#de314e",

    })
}
)
image.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"red",
    })
})