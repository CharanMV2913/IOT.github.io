document.addEventListener("DOMContentLoaded", function() {
    const ledSwitch = document.getElementById('ledSwitch');
    const statusIndicator = document.getElementById('statusIndicator');
    let socket;

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
        // Send message to WebSocket server to turn LED on or off based on switch state
        const message = this.checked ? 'turn_on' : 'turn_off';
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        }
    });

    // Establish WebSocket connection
    socket = new WebSocket('ws://localhost:8765'); // Change hostname and port as needed

    socket.onopen = function(event) {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = function(event) {
        const command = event.data;
        if (command === 'turn_on') {
            // Turn on the LED
            console.log('Turning on the LED.');
            // You can update the UI here to indicate the LED is on
            statusIndicator.classList.add('on');
        } else if (command === 'turn_off') {
            // Turn off the LED
            console.log('Turning off the LED.');
            // You can update the UI here to indicate the LED is off
            statusIndicator.classList.remove('on');
        }
    };

    socket.onerror = function(event) {
        console.error('WebSocket error:', event);
    };

    socket.onclose = function(event) {
        console.log('WebSocket connection closed.');
    };
});
