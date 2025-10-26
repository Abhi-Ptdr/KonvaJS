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
  fill: 'red',      //any color name or hex code
  stroke: 'black', //border color
  strokeWidth: 4, //border width
  shadowOffset: { x: 10, y: 10 },
  shadowBlur: 10,
  shadowColor: 'grey',
  opacity: 0.8,
  shadowOpacity: 0.6,
})


// Add shape 1 to layer 1
layer.add(circle);

// Add layer 1 to stage
stage.add(layer);


//Events - Click, Mouseover, Mouseout, Drag and Drop, scroll, dblclick etc.

circle.on('mouseover', function () {
  this.fill('green'); //change color on mouseover
  layer.draw(); //redraw layer to show changes
});

circle.on('mouseout', function () {
  this.fill('red');
    layer.draw();
});

circle.on('click', function () {
  this.radius(this.radius() + 10);
  this.x(this.x() + 50);
  this.y(this.y() + 50);
  this.shadowOffset({ x: 5, y: 5 });
  layer.draw();
});