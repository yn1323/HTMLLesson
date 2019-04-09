window.onload = function(){
    let bt = document.getElementById('nice');
    if(!bt)return;
    if(!bt.innerText)return;
    const TEXT = bt.innerText;
    let counter = 0;
    bt.innerText = TEXT + counter;
    bt.addEventListener('click', function(){
        counter++;
        bt.innerText = TEXT + counter;
    });
};