function breakText(){
    var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splitedText = h1Text.split("")

var clutter = ""

splitedText.forEach(function(text){
    // clutter = clutter + text
    // clutter += text 
    clutter += `<span>${text}</span>`
})


h1.innerHTML =  clutter
// in this we are using innerHTML beacuse if we use innerText then the output comes with the FULL PORTION of the tag for example the `<span>${text}</span> this showes in the output 
}
breakText()

gsap.from("h1 span",{
    y:200,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.4,
    color:"white",

})




// this the is the different animation u can try in ur website in a hero section 
// if u want to use this annimation then u can use it other there is no need 
// upper annimation is sufficiant if u want more animation in the hero page then u can use this 

gsap.to("h1",{
    scale:15,
    color:"red",
    opacity:0,
    duration: 2,
    delay:6,
})


//  this the is the different animation with  u can try in ur website in a hero section 
// gsap.to("h1 span ",{
//     scale:15,
//     color:"red",
//     opacity:0,
//     duration: 2,
//     delay:6,
// })