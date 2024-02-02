const ledSwitch = document.getElementById('ledSwitch');

ledSwitch.addEventListener('change', function() {
    if(this.checked) {
        // Send request to turn LED on
        fetch('/led/on', { method: 'POST' });
    } else {
        // Send request to turn LED off
        fetch('/led/off', { method: 'POST' });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const ledSwitch = document.getElementById('ledSwitch');
    const statusIndicator = document.getElementById('statusIndicator');

    // Function to update the status indicator
    function updateIndicator() {
        if (ledSwitch.checked) {
            statusIndicator.classList.add('on');
        } else {
            statusIndicator.classList.remove('on');
        }
    }

    // Initial call to update the indicator based on switch position
    updateIndicator();

    // Event listener for switch changes
    ledSwitch.addEventListener('change', function() {
        updateIndicator();
    });
});
