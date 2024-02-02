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
        // Send request to turn LED on or off based on switch state
        const endpoint = this.checked ? '/led/on' : '/led/off';
        fetch(endpoint, { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an issue with the request.');
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
