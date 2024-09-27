var tl = gsap.timeline()

tl.from("#nav h1",{
    y:-50,
    duration:0.6,
    delay : 0.1,
    opacity:0
})
tl.from(".mid h2",{
    y:-50,
    duration:0.6,
    opacity:0,
    stagger :0.2,

})
tl.from(".mid button",{
    y:-50,
    duration:0.6,
    opacity:0,
    delay : -0.2,

})
tl.from(".center h1",{
    opacity:0,
    duration:1.3,
    y:-50
})
tl.from(".center h2",{
    opacity:0,
    duration:0.3,
    y:50
})
tl.from(".center p",{
    opacity:0,
    duration:0.3,
    y:50
})
tl.from(".center button",{
    opacity:0,
    scale :1.5,
    duration:0.3,
    y:50
})
tl.from("#img1",{
    opacity:0,
    duration:0.3,
    x:-300
    
},'a')
tl.from("#img2",{
    opacity:0,
    duration:0.3,
    x:100
    
},'a')
tl.from("#img3",{
    opacity:0,
    duration:0.3,
    y:100
    
})
tl.from(".text h1",{
    opacity:0,
    duration:0.3,
    y:50
    
},'a')
tl.from(".text h2",{
    opacity:0,
    duration:0.3,
    y:50
    
},'a')
tl.from("#img2",{
    rotate:360,
    repeat : -1,
     ease: "linear",
    duration:3,
    
},'b')
tl.from("#img1",{
    rotate:360,
    repeat : -1,
     ease: "linear",
    duration:3,
    
},'b')

tl.from("#img3",{
    y:1,
    yoyo :true,
    repeat : -1,
     ease: "linear",
    duration:5,
    
},'b')

 