document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Add touch feedback for mobile on countdown
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)'; // Feedback on touch
        });

        countdownElement.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)'; // Reset after touch
        });
    }

    // ... existing code ...
});