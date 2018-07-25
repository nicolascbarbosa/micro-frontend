(() => {
    const index = 2;
    const vue = document.createElement('div');
    const text = document.createTextNode(`Sou uma app vue, e estou na ordem ${index + 1}`);
    
    vue.appendChild(text);

    var event = new CustomEvent('update', { detail: { content: vue, index }});

    // Dispatch the event.
    document.dispatchEvent(event);

})();