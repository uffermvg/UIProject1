var pest = document.getElementById("pests");
var water = document.getElementById("water");
var lighter = document.getElementById("sunlight");

const pests = ["None", "Present", "Infested"];
const waters = ["Dry", "Damp", "Moist", "Wet"];
const lights = ["Low","Medium","Bright","Scortched"];

pest.innerHTML = (pests[Math.floor(Math.random() * (3 - 0)) + 0]);

water.innerHTML = (waters[Math.floor(Math.random() * (4 - 0)) + 0]);

lighter.innerHTML = (lights[Math.floor(Math.random() * (4 - 0)) + 0]);

