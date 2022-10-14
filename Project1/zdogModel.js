const TAU = Zdog.TAU;
/*--sun: #F0AE17ff;
    --water: #035E88ff;
    --leaf: #65A97Fff;
    --health: #EC1B25ff;
    --temp: #E93E23ff;*/


//illustration
const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.illo',
    dragRotate: true,
    rotate: {x: -TAU/8, y: TAU/4},
  });

//flower pot
const pot = new Zdog.Box({
    addTo: illo,
    width: 100,
    height: 100,
    depth: 100,
    stroke: false,
    color: '#211F20ff',
    rightFace: '#E8E4E6ff',
    topFace: '#614D16',
});

const ground = new Zdog.Anchor({
    addTo: pot,
    rotate: {x: TAU/4},
});

//Interface buttons Some are 2 shapes
const sun = new Zdog.Ellipse({
  addTo: pot,
  diameter: 8,
  quarters: 4,
  translate: {y: -8, x: 53, z: 0},
  rotate: {y: -TAU/4, x: TAU/4 },
  stroke: 2,
  color: '#F0AE17ff',
  fill: true,
  backface: false,
});

const drop = new Zdog.Ellipse({
  addTo: pot,
  diameter: 8,
  quarters: 2,
  translate: {y: -6, x: 53, z: 25},
  rotate: {y: -TAU/4, x: TAU/4 },
  stroke: 2,
  color: '#035E88ff',
  fill: true,
  backface: false,
});

const tear = new Zdog.Shape({
  addTo: drop,
  path: [ // triangle
    { x:  4, y:  4 },
    { x:   0, y: -4 },
    { x: -4, y:  4 },
  ],
  translate: {x: -4},
  rotate: {z: -TAU/4},
  closed: false, // unclosed
  fill: true,
  stroke: 2,
  color: '#035E88ff',
});

const pla = new Zdog.Ellipse({
  addTo: pot,
  diameter: 8,
  quarters: 2,
  translate: {y: -6, x: 53, z: -25},
  rotate: {y: -TAU/4, x: TAU/2.5 },
  stroke: 2,
  color: '#65A97Fff',
  fill: true,
  backface: false,
});

const nt = new Zdog.Shape({
  addTo: pla,
  path: [ // triangle
    { x:  4, y:  4 },
    { x:   0, y: -4 },
    { x: -4, y:  4 },
  ],
  translate: {x: -4},
  rotate: {z: -TAU/4},
  closed: false, // unclosed
  fill: true,
  stroke: 2,
  color: '#65A97Fff',
});

const crossup = new Zdog.Shape({
  addTo: pot,
  path: [{x: -4},{x: 4}],
  translate: {y: 20, x: 53, z: 13},
  rotate: {y: -TAU/4, x: TAU/4 },
  stroke: 4,
  color: '#EC1B25ff',
  backface: false,

});

const crossdown = new Zdog.Shape({
  addTo: crossup,
  path: [{y: -4}, {y:4}],
  stroke: 4,
  color: '#EC1B25ff',
  backface: false, 

});

const thermo = new Zdog.Shape({
  addTo: pot,
  path: [{x: -4},{x: 4}],
  translate: {y: 20, x: 53, z: -13},
  rotate: {y: -TAU/4, x: TAU/4 },
  stroke: 4,
  color: '#BD4403ff',
  backface: false,

});

const meter = new Zdog.Ellipse({
  addTo: thermo,
  diameter: 4,
  quarters: 4,
  translate: {x: 4},
  stroke: 2,
  color: '#BD4403ff',
  fill: true,
  backface: false,
});

//light
const pole = new Zdog.Shape({
  addTo: pot,
  path: [ { y: -115}, { y: 80}],
  stroke: 16,
  color: '#211F20ff',
  translate: { y: -60, x:-40},

});

const light = new Zdog.Box({
  addTo: pole,
  depth: 70,
  height: 70,
  length: 70,
  color: '#211F20ff',
  rightFace: '#F0AE17ff',
  stroke: 6,
  translate: { y: -120},
  rotate: {z: TAU/8}

});

//plant
const stem = new Zdog.Shape({
    addTo: pot,
    path: [ { y: -30}, { y: 30}],
    stroke: 16,
    color: '#5C945B',
    translate: { y: -60},
});

const leaf = new Zdog.Ellipse({
    addTo: stem,
    width: 30,
    height: 60,
    stroke: 20,
    color: '#0F2F0E',
    fill: true,
    translate: {y: -55, z: -35},
    rotate: {x: TAU/6, y: TAU/4},
});

leaf.copy({
  translate: {y: -55, z: 35},
  rotate: {x: -TAU/6, y: -TAU/4},

});

const leafTop = new Zdog.Ellipse({
  addTo: stem,
  width: 30,
  height: 60,
  stroke: 20,
  color: '#0F2F0E',
  fill: true,
  translate: {y: -65},
});

//render illustration and animate it
  function animate(){
    illo.rotate.y += 0.03;
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()