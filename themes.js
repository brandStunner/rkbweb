

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
};
 function setTheme(mode){
     if(mode == 'light-mode'){
         document.getElementById('theme-style').href = 'style.css';
     }
     if(mode == 'blue-mode'){
         document.getElementById('theme-style').href = 'blue.css';
     }
     if(mode == 'green-mode'){
         document.getElementById('theme-style').href = 'green.css';
     }
     if(mode == 'purple-mode'){
         document.getElementById('theme-style').href = 'purple.css';
     }
 }