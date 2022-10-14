var slider = document.getElementById("myRange");
var output = document.getElementById("tp");
var ctp = document.getElementById('ctp');

var humSlider = document.getElementById("myHumRange");
var humOutput = document.getElementById("hm");
var chm = document.getElementById("chm");
var previoust = parseInt(slider.value);
var previoush = parseInt(humSlider.value);

output.innerHTML = slider.value + '\u00B0 F';
ctp.innerHTML = slider.value + '\u00B0 F';
chm.innerHTML = humSlider.value + '%';

humOutput.innerHTML = humSlider.value + '%';


slider.oninput = function(){
    output.innerHTML = this.value + '\u00B0 F';
    if(previoust < this.value){
        previoust += 1;
        ctp.innerHTML = previoust +'\u00B0 F';
    }
    else if(previoust > this.value){
        previoust-= 1;
        ctp.innerHTML = previoust  + '\u00B0 F';
    }
}

humSlider.oninput = function(){
    humOutput.innerHTML = this.value + '%';
    if(previoush < this.value){
        previoush += 1;
        console.log(previoush);
        chm.innerHTML = previoush + '%';
    }
    else if(previoush > this.value){
        previoush-= 1;
        console.log(previoush);
        chm.innerHTML = previoush + '%';
    }
}
