const btn = document.querySelector('button');
let time = 5;
let n = setInterval(function(){
    time--;
    btn.innerHTML = `Continue(${time})`;
    if(time==0){
        btn.disabled = false;
        clearInterval(n);
        btn.innerHTML = 'Continue';
    }
}, 1000)
btn.addEventListener('click', function(){
    location.href="./homepage.html";
})