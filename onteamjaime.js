// shows the upload button and name of the input file once the user uploads
// a file
function findFile(input) {
  if (input.files && input.files[0]) {
    document.getElementById('file-label').innerHTML = input.files[0].name;
    document.getElementById('submit').style.display = 'inline';
  }
}

// toggles visibility of an element
function showHide(element) {
  var x = document.getElementById(element);
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// hides an element
function hide(element) {
  document.getElementById(element).style.display = "none";
}

function show(e) {
  document.getElementById(e).style.opacity = "1";
  document.getElementById(e).style.zIndex = "2";
}

function expand(e) {
  document.getElementById(e).style.height = "auto";
}

function makeImage() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        var frame = new Image();
        var image = new Image();
        frame.src = 'images/JaimeCapeFinal.png';
        frame.onload = function() {
            ctx.drawImage(frame, 0, 0, 1200, 675);
            upload = document.getElementById('inputfile').files.item(0);
            image.src = URL.createObjectURL(upload);
            image.onload = function() {
              ctx.globalCompositeOperation = 'destination-over';
              if (image.height < image.width) {
                ctx.drawImage(image, 418, 30, 597 * image.width / image.height, 597)
              }
              ctx.drawImage(image, 418, 30, 749, 749 * image.height / image.width)
              canvas.toBlob( b => {document.getElementById('avatar-generated').src = URL.createObjectURL(b)})
            }
        }
      }
