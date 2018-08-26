function fadeOut() {
    TweenMax.to(".myBtn", 1, {
        y:-100,
        opacity:0
    });
    TweenMax.to(".screen",2, {
        y: -500,
        opacity: 0,
        ease: Power2.easeInOut,
        delay:1.5
    });
}