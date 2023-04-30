const keyboard =[81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];

/*document.onkeydown = function(event) {
    keyboard.push(event.keyCode);
    console.log(keyboard);
}*/

function init(){
    let out = '' ;
    for ( let i = 0; i < keyboard.length; i++ ) {
        out += '<div class = "key-btn">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();