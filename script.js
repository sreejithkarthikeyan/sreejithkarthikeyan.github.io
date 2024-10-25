
// Wait for the page to load fully
window.onload = function() {
    gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "bounce" });

    gsap.from("#about", { 
        scrollTrigger: "#about", 
        duration: 1, 
        x: -100, 
        opacity: 0, 
        ease: "power2.inOut" 
    });
    
    gsap.from("#projects", { 
        scrollTrigger: "#projects", 
        duration: 1, 
        x: 100, 
        opacity: 0, 
        ease: "power2.inOut" 
    });
    
    gsap.from("#contact", { 
        scrollTrigger: "#contact", 
        duration: 1, 
        y: 100, 
        opacity: 0, 
        ease: "power2.inOut" 
    });
};
