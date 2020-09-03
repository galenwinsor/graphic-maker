// shows the upload button and name of the input file once the user uploads
// a file
function findFile(input) {
  if (input.files && input.files[0]) {
    document.getElementById('file-label').innerHTML = input.files[0].name;
    document.getElementById('submit').style.display = 'inline';
  }
}

// toggles visibility of an element
function flexNone(element) {
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

function show(element) {
  document.getElementById(element).style.display = "block";
}

function putForward(e) {
  document.getElementById(e).style.opacity = "1";
  document.getElementById(e).style.zIndex = "2";
}

function putBack(e) {
  document.getElementById(e).style.opacity = "0";
  document.getElementById(e).style.zIndex = "-1";
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
            console.log(upload.name);
            image.src = URL.createObjectURL(upload);
            image.onload = function() {
              ctx.globalCompositeOperation = 'destination-over';
              if (image.height < image.width) {
                ctx.drawImage(image, 413, 34, 605.8 * image.width / image.height, 605.8)
              }
              ctx.drawImage(image, 413, 34, 750.4, 750.4 * image.height / image.width);
              canvas.toBlob( b =>
                {
                  var url = URL.createObjectURL(b);
                  document.getElementById('avatar-generated').src = url;
                  document.getElementById('download').href = url;
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                })
            }
        }
      }
