if (typeof window !== 'undefined') {
    window.requestAnimFrame = (function(){ return window.requestAnimationFrame})();
    var canvas = document.getElementById("space");
    var c = canvas.getContext("2d");
  
    var numStars = 750;
    var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
    var focalLength = canvas.width * .3;
    var warp = 0;
    var centerX, centerY;
  
    var stars = [], star;
    var i;
  
    var animate = true;
  
    initializeStars();
  
    function executeFrame(){
    
      if(animate)
        requestAnimFrame(executeFrame);
        moveStars();
        drawStars();
    }

    function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    
    stars = [];
    for(i = 0; i < numStars; i++){
        star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: '0.'+Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
    }
    }

    function repositionStars() {
        var canvas = document.getElementById('space');

        // Calculate the new center of the canvas
        var newCenterX = canvas.width / 2;
        var newCenterY = canvas.height / 2;

        // Calculate the shift in the center of the canvas
        var shiftX = newCenterX - centerX;
        var shiftY = newCenterY - centerY;

        // Update the global center coordinates
        centerX = newCenterX;
        centerY = newCenterY;

        // Loop through each star
        for (var i = 0; i < stars.length; i++) {
            // Update the position of the star based on the shift in the center of the canvas
            stars[i].x += shiftX;
            stars[i].y += shiftY;
        }
    }

    function moveStars(){
    for(i = 0; i < numStars; i++){
        star = stars[i];
        star.z--;
        
        if(star.z <= 0){
        star.z = canvas.width;
        }
    }
    }

    function drawStars(){
    var pixelX, pixelY, pixelRadius;
    
    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }

    if(warp==0)
    // Draw a semi-transparent black rectangle over the whole canvas
    c.fillStyle = "rgba(0,0,0)";
    c.fillRect(0,0, canvas.width, canvas.height);

    c.fillStyle = "rgba(255, 255, 255, "+radius+")";
    for(i = 0; i < numStars; i++){
        star = stars[i];
        
        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1.5 * (focalLength / star.z);
        
        // Add a glow effect to the star
        c.shadowBlur = 20; // Increase the blur effect
        c.shadowColor = "white";
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(255, 255, 255, "+star.o+")";
        // c.fill();
    }
}

    executeFrame();

    window.addEventListener('resize', redrawCanvas, false);

    function redrawCanvas() {
        var canvas = document.getElementById('space');
        var context = canvas.getContext('2d');

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Set the canvas dimensions to the new window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Reposition the stars
        repositionStars();

        // Redraw the contents of the canvas
        drawStars();
    }
}