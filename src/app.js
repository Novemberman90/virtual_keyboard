const keyboard = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 
'BracketRight', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 
'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'];

/*document.onkeydown = function(event) {
    keyboard.push(event.code);
    console.log(keyboard);
}*/

function init () {
    let out = '';
    for (let i = 0; i < keyboard.length; i++ ) {
        out += '<div class = "key-btn">'+String.fromCharCode(keyboard[i])+'</div>'
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();