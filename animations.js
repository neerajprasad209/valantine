$(document).ready(function () {
    // Function to create falling hearts
    function createHeart() {
        const heart = $('<div>❤</div>');
        heart.addClass('falling-heart');
        heart.css({
            left: Math.random() * window.innerWidth + 'px',
            animationDuration: (Math.random() * 3 + 2) + 's'
        });
        $('body').append(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Function to create sparkles
    function createSparkle() {
        const sparkle = $('<div></div>');
        sparkle.addClass('sparkle');
        sparkle.css({
            left: Math.random() * window.innerWidth + 'px',
            top: Math.random() * window.innerHeight + 'px'
        });
        $('body').append(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }

    // Create hearts periodically
    setInterval(createHeart, 300);

    // Create sparkles periodically
    setInterval(createSparkle, 200);
});