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

const cwidth = 1200;
const cheight = 675;
var ileft = 413;
var itop = 34;
var canvas = null;
var ctx = null;
var disp_img = null;
var upload_input = null;
var frame = null;
var upload_img = null;

window.onload = (e => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  disp_img = document.getElementById('avatar-generated');
  disp_img.onload = (e) => {URL.revokeObjectURL(this.src)};
  upload_img = new Image();
  upload_input = document.getElementById('inputfile');
  frame = new Image;
  frame.onload = draw_frame;
  frame.src = 'images/JaimeCapeFinal.png';
});

function draw_frame() {
  ctx.drawImage(frame, 0, 0, cwidth, cheight);
}

function draw_upload(img, x_nudge = 0, y_nudge = 0, scale = 1) {
  ileft += y_nudge;
  itop += x_nudge;
  ctx.globalCompositeOperation = 'destination-over';
  if (img.height < img.width) {
    if (itop > 34 || itop < 34) {
      return
    }
    ctx.drawImage(img, ileft, itop, 602 * img.width / img.height, 602);
  } else {
    if (ileft > 413 || ileft < 413) {
      return
    }
    ctx.drawImage(img, ileft, itop, 752, 752 * img.height / img.width);
  }
  canvas.toBlob(b => {
      const url = URL.createObjectURL(b);
      disp_img.src = url;
      document.getElementById('download-1').href = url;
      document.getElementById('download-2').href = url;
      hide('loading');
      expand('buttons');
      expand('instruction');
    })
}

function displayImage(x_nudge = 0, y_nudge = 0, scale = 1) {
  ctx.clearRect(0, 0, cwidth, cheight);
  draw_frame();
  upload_img.onload = (e) => {
    URL.revokeObjectURL(this.src);
    draw_upload(upload_img, x_nudge, y_nudge, scale);
  }
  upload_img.src = new Image().src = URL.createObjectURL(upload_input.files[0]);

}
