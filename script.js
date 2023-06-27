// Define a function that creates an introductory animation using HTML5 canvas
function createIntroAnimation() {
    // Get the canvas element and its context
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the properties of the animation
    const radius = 50;
    const lineWidth = 10;
    const color = '#ff0000';
    const speed = 0.1;

    // Define the animation loop
    let angle = 0;
    function animate() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the loading circle
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();

        // Draw the loading bar
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + radius * Math.cos(angle), canvas.height / 2 + radius * Math.sin(angle));
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();

        // Update the angle for the next frame
        angle += speed;

        // Request the next animation frame
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();

    // Retrieve the loading animation elements
    const loadingContainer = document.querySelector('.loading-container');
    const loadingAnimation = loadingContainer.querySelector('.loading-animation');

    // Show the loading container
    loadingContainer.style.display = 'block';

    // Hide the loading container after 5 seconds
    setTimeout(() => {
        loadingContainer.style.display = 'none';
    }, 5000);

    // Focus on the company name element when the animation is complete
    setTimeout(() => {
        const companyName = document.getElementById('company-name');
        companyName.focus();
    }, 3000);
}

// Call the createIntroAnimation function when the window loads
window.onload = createIntroAnimation;