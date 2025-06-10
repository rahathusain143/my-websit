function Animaton(){
    let tl = gsap.timeline();

tl.from("h2" ,{
    y:-30,
    opacity:0,
    duratio:0.5,
    delay:0.5,
})
tl.from("h4" ,{
    y:-30,
    opacity:0,
    duratio:0.5,
    stagger:0.3
})

}

Animaton()


gsap.from(".content h1" , {
    opacity:0,
    duration:0.5,
    y:-30,
    delay:0.5,
    stagger:0.4
})

gsap.from (".img", {
    opacity: 0,
    scale:2,
    duration:1,
    delay:1
})
gsap.from (".content button", {
    opacity: 0,
    scale:0,
    duration:0.5,
    delay:0.2
})
gsap.from(".Ext .Experience" , {
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.5
})
gsap.from(".icon i" , {
    opacity:0,
    duration:0.5,
    y:-30,
    delay:0.3,
    stagger:0.5
})


    var typed = new Typed('#element', {
      strings: ['<i>UI/UX</i> Designer.', '&amp; Graphcs Designer'],
      typeSpeed: 100,
    });