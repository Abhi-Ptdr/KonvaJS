// Stage - Canvas container configuration
var stage = new Konva.Stage({
  container: 'bucket',
  width: 400,
  height: 400,
})

// Layer1
var layer = new Konva.Layer({
  
});

// Shape 1
var circle = new Konva.Circle({
  radius: 70,
  x: 100,
  y: 100,
  //by default x and y are 0 (x and y are position coordinates of the center)
  fill: 'red'
})


// Add shape 1 to layer 1
layer.add(circle);

// Add layer 1 to stage
stage.add(layer);