/*--background: #2F3E46;
    --model: #84a98c;
    --platinum: #E8E4E6ff;
    --accent: #cad2c5;
    --opal: #354f52;
    --white: #cad2c5;

    --sun: #F0AE17ff;
    --water: #035E88ff;
    --leaf: #65A97Fff;
    --health: #EC1B25ff;
    --temp: #E93E23ff;

--black: #211F20ff;*/


var slider = document.getElementById("myRange");
var output = document.getElementById("w");
var currentWater = document.getElementById("currentWater");
output.innerHTML = slider.value + "ml";

slider.oninput = function(){
    output.innerHTML = this.value + "ml";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function waterCount(current){
    currentWater.innerHTML = current;
  }

function wateringNow(){
    i = 0;
    while(i<=(slider.value)){
        setTimeout(waterCount(i),30000);
        i = i+1;
    }
}

var checker = document.getElementById('showCal');
var m = document.getElementById('Mday');
var t = document.getElementById('Tday');
var w = document.getElementById('Wday');
var th = document.getElementById('Thday');
var f = document.getElementById('Fday');
var s = document.getElementById('Sday');
var su = document.getElementById('Suday');

if((!checker.checked) && (!su.disabled)){
    su.disabled = !this.checked;
    m.disabled = !this.checked;
    t.disabled = !this.checked;
    w.disabled = !this.checked;
    th.disabled = !this.checked;
    f.disabled = !this.checked;
    s.disabled = !this.checked;
}

var waterlabel = document.getElementById('waterSchedLabel');

var buttonDisabledColor = '#E8E4E6ff';
var buttonPressedColor = 'rgb(71, 181, 255)';
var buttonColor = '#2F3E46';
checker.onchange = function(){
    su.disabled = !this.checked;
    m.disabled = !this.checked;
    t.disabled = !this.checked;
    w.disabled = !this.checked;
    th.disabled = !this.checked;
    f.disabled = !this.checked;
    s.disabled = !this.checked;

    if(su.disabled){
        su.style.color = buttonDisabledColor;
        m.style.color = buttonDisabledColor;
        t.style.color = buttonDisabledColor;
        w.style.color = buttonDisabledColor;
        th.style.color = buttonDisabledColor;
        f.style.color = buttonDisabledColor;
        s.style.color = buttonDisabledColor;
        waterlabel.style.color = buttonDisabledColor;
    }
    else{
        su.style.color = buttonColor;
        m.style.color = buttonColor;
        t.style.color = buttonColor;
        w.style.color = buttonColor;
        th.style.color = buttonColor;
        f.style.color = buttonColor;
        s.style.color = buttonColor;
        waterlabel.style.color = buttonColor;
    }
}


function buttonDown(day){
    if(!day.disabled){
        console.log(day.style.color)
        if(day.style.color != buttonPressedColor ){
            day.style.color = buttonPressedColor;
        }
        else{
            day.style.color = buttonColor;
        }
    }

}

