function mouseover(){
    document.querySelector('#face').textContent = `(*'▽')`;  //IDで指定された文字を変える
  }

function mouseout(){
    document.getElementById("face").innerText = `( 一一)`;  //IDで指定された文字を変える
  }

function changeColor1(idname){
  var obj = document.getElementById(idname);
  obj.style.color = '#f1734c';            //文字色を白にする
}

function changeColor2(idname){
    var obj = document.getElementById(idname);
    obj.style.color = '#000000';         //文字色を白にする
  }