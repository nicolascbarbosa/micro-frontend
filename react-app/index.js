(() => {
    const index = 1;
    const react = document.createElement('div');
    const text = document.createTextNode(`Sou uma app react, e estou na ordem ${index + 1}`);
    
    react.appendChild(text);

    var event = new CustomEvent('update', { detail: { content: react, index }});

    // Dispatch the event.
    document.dispatchEvent(event);

})();