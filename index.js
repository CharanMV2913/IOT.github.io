document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const indicator = document.getElementById('indicator');

    // Function to update the indicator
    function updateIndicator() {
        if (toggleSwitch.checked) {
            indicator.style.backgroundColor = '#2196F3'; // Blue color when on
        } else {
            indicator.style.backgroundColor = '#ccc'; // Gray color when off
        }
    }

    // Initial call to update the indicator based on switch position
    updateIndicator();

    // Event listener for switch changes
    toggleSwitch.addEventListener('change', function() {
        updateIndicator();
    });
});
