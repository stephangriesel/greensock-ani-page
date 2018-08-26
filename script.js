function fadeOut() {
    // Animate Button
    TweenMax.to(".myBtn", 1, {
        y:-100,
        opacity:0
    });
    // Animate background text
    TweenMax.to(".screen",2, {
        y: -500,
        opacity: 0,
        ease: Power2.easeInOut,
        delay:1.5
    });
    // Animate solid color overlay
    TweenMax.to(".overlay",2, {
        delay:2,
        top:"-110%",
        ease:Expo.easeInOut
    });
    // Animate content overlay with text "My Site"
    TweenMax.to(".overlay-top", 2, {
        delay:3,
        top:"-110%",
        ease: Expo.easeInOut
    });
    // Delay content text display "My Site"
    TweenMax.from(".content", 2, {
        delay:4.2,
        opacity:0,
        ease: Power2.easeInOut
    });
    // Move text to top
    TweenMax.to(".content", 2, {
        opacity:0.8,
        y: -650,
        delay: 5,
        ease: Power2.easeInOut
    });
    }
