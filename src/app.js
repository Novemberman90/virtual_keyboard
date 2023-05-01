const keyboard =['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];

document.onkeydown = function(event) {
    keyboard.push(event.code);
    console.log(keyboard);
}

console.log(keyboard[0]);

function init(){
    let out = [];
    for( let i = 0; i < keyboard.length; i++ ) {
        if (i == 12 || i == 23){
            out += '<div class="clearfix"></div>'
        }
        out += '<div class = "key-btn">' + (keyboard[i]) + '</div>';
    }
    
    document.querySelector('.keyboard').innerHTML = out;
}

init();

document.onkeydown = function(event){
    console.log(event.code);
    console.log(event.key);
    document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
        element.classList.remove('_active');
    });
    
   document.querySelector('.keyboard .key-btn[data=" '+ event.key +' "]').classList.add('_active');
}

document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
            element.classList.remove('_active');
        });
        let code = this.getAttribute('data');
        this.classList.add('_active');
        console.log(code);
    }
})