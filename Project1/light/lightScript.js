var slider = document.getElementById("myRange");
var lightbulbs = document.getElementById("lightBulb")


lightbulbs.style.color = '#6F6866ff';
slider.oninput = function(){
    if(this.value < 5){
        lightbulbs.style.color = '#6F6866ff';
    }
    else if(this.value < 10){
        lightbulbs.style.color = '#827977ff';
    }
    else if(this.value < 20){
        lightbulbs.style.color = '#9A8E82ff';
    }
    else if(this.value < 30){
        lightbulbs.style.color = '#ABA081ff';
    }
    else if(this.value < 40){
        lightbulbs.style.color = '#B8AD75ff';
    }
    else if(this.value < 50){
        lightbulbs.style.color = '#C4BC63ff';
    }
    else if(this.value < 60){
        lightbulbs.style.color = '#D8D349ff';
    }
    else if(this.value < 70){
        lightbulbs.style.color = '#E8E530ff';
    }
    else if(this.value < 80){
        lightbulbs.style.color = '#F3EF1Dff';
    }
    else if(this.value < 90){
        light.style.color = '#F8F40Dff';
    }
    else{
        lightbulbs.style.color = '#FAF809ff';
    }
}

