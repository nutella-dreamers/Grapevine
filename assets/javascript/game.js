

var shine = new shinejs.Shine(document.getElementById('shine'));
 
 

function update() {
        window.requestAnimationFrame(update);
        var time = new Date().getTime();
        var speed = 0.00025;  // 1 = 1000 rotations/s
        var phase = time * speed * 2.0 * Math.PI;
        var radiusX = window.innerWidth * 0.5;
        var radiusY = window.innerHeight * 0.5;
        shine.light.position.x = radiusX + radiusX * Math.cos(phase);
        shine.light.position.y = radiusY + radiusY * Math.sin(phase * 0.7);
        shine.draw();
      }

      update();

$('carousel').carousel();

