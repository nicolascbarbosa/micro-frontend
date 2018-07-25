(() => {
    const index = 0;
    const angular = document.createElement('div');
    const text = document.createTextNode(`Sou uma app angular, e estou na ordem ${index + 1}`);
    
    angular.appendChild(text);

    var event = new CustomEvent('update', { detail: { content: angular, index }});

    // Dispatch the event.
    document.dispatchEvent(event);

})();



