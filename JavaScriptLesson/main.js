// id firstAlert のDOM(=HTML)を変数alertBtnに入れる
// このときはまだ "#firstAlertClickとJSがリンクしているだけ" でクリックしても何も発生しない
let alertBtnClick = document.getElementById("clickAlert");

// "イベント"を感知するためのメソッド
// "click"した時にfunctionの中身を実行
alertBtnClick.addEventListener("click", function(){
    // 実行内容
    alert("アラートだよ");
});

// ボタンにマウスオーバーした場合
let alertBtnMouseOver = document.getElementById("hoverAlert");
alertBtnMouseOver.addEventListener("mouseover", function () {
    // 実行内容
    alert("マウスオーバーするだけで表示!!!ちょっとだけじゃま...");
});
// ボタンを右クリックした場合
let alertBtnRightClick = document.getElementById("rightClickAlert");
alertBtnRightClick.addEventListener("contextmenu", function () {
    // 実行内容
    alert("右クリックで表示");
});

// テキストボックスの値を取得して表示
// ボタンのHTML
let valBtn = document.getElementById("getVal");
// 表示する場所のHTML
let outputVal = document.getElementById("outputVal");
valBtn.addEventListener("click", function () {
    // テキストボックスの値を取得
    let inputText = document.getElementById("input");
    // ID input のvalue
    let value = inputText.value;
    // outputVal の in の HTML を value にする
    outputVal.innerHTML = value;
});

// 中級
// !!!を付け加えた文字をアラートで表示
// テキストボックスの値を取得
let valBtnEx = document.getElementById("getValEx");
let outputValEx = document.getElementById("outputValEx");
valBtnEx.addEventListener("click", function () {
    // テキストボックスの値を取得
    let inputText = document.getElementById("inputEx");
    let value = inputText.value;
    outputValEx.innerHTML = "<strong style='color: red;'>" + value + "!!!!" + "</strong>";
});

// 上級
let valBtnFizz = document.getElementById("getValFizz");
valBtnFizz.addEventListener("click", function () {
    // テキストボックスの値を取得
    let inputText = document.getElementById("inputFizzBuzz");
    let value = inputText.value;
    // 10進数変化は今の時代はなくてもいいらしい
    if (!isNaN(value)){
        value = parseInt(value, 10);
    }
    // パフォーマンスは悪いが、とりあえずわかりやすく書いておく
    if(value === 0){
        alert(value);
    }else if(value % 3 === 0 && value % 5 === 0){
        alert("Fizz Buzz");
    }else if(value % 3 === 0){
        alert("Fizz");
    }else if(value % 5 === 0){
        alert("Buzz");
    }else{
        alert(value);
    }
});