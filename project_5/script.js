function breakText(){
    var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splitedText = h1Text.split("")
var halfValue = splitedText.length/2

var clutter = ""

splitedText.forEach(function(text,idx){
    // clutter = clutter + text
    // clutter += text 
    if(idx<halfValue){
        clutter += `<span class="first-half" >${text}</span>`
    }else {
        clutter += `<span class="second-half" >${text}</span>`
    }
})


h1.innerHTML =  clutter
// in this we are using innerHTML beacuse if we use innerText then the output comes with the FULL PORTION of the tag for example the `<span>${text}</span> this showes in the output 
}
breakText()
     
gsap.from("h1 .first-half",{
    y:100,
    duration:1.8,
    delay:0.5,
    opacity:0,
    stagger:0.18,
})

gsap.from("h1 .second-half",{
    y:100,
    duration:1.8,
    delay:0.5,
    opacity:0,
    stagger:-0.18,
})


