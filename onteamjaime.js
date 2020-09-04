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
var avatar_generated = null;
var upload = null;
var image = null;
var frame = null;

window.onload = (e => {
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      avatar_generated = document.getElementById('avatar-generated');
      avatar_generated.onload = (e) => {URL.revokeObjectURL(this.src)};
      upload = document.getElementById('inputfile');
      frame = new Image();
      frame.src = 'images/JaimeCapeFinal.png';
    });

function displayImage(x_nudge = 0, y_nudge = 0, scale = 1) {
  ileft += y_nudge;
  itop += x_nudge;

  ctx.clearRect(0, 0, cwidth, cheight);
  URL.revokeObjectURL(avatar_generated.src);
  var image = new Image();
  frame.src = 'images/JaimeCapeFinal.png';
  frame.onload = function() {
    ctx.drawImage(frame, 0, 0, 1200, 675, 0, 0, frame.width, frame.height);
    upload_file = upload.files.item(0);
    image.src = URL.createObjectURL(upload_file);
    image.onload = function() {
      ctx.globalCompositeOperation = 'destination-over';
      if (image.height < image.width) {
        ctx.drawImage(image, ileft, itop, image.width, image.height, ileft, itop, 605.8 * image.width / image.height, 605.8)
      } else {
        ctx.drawImage(image, ileft, itop, image.width, image.height, ileft, itop, 750.4, 750.4 * image.height / image.width)
      }
      canvas.toBlob(b =>
        {
          var url = URL.createObjectURL(b);
          document.getElementById('avatar-generated').src = url;
          document.getElementById('download-1').href = url;
          document.getElementById('download-2').href = url;
          hide('loading');
          expand('buttons');
          expand('instruction');
        }
      )
    }
  }
}

// function draw_frame() {
//       frame.src = 'images/JaimeCapeFinal.png'
//       frame.onload = function() {
//         ctx.drawImage(frame, 0, 0, cwidth, cheight);
//       }
//     }
//
// function draw_upload(img, x_nudge = 0, y_nudge = 0, scale = 1) {
//       ileft += y_nudge;
//       itop += x_nudge;
//       ctx.globalCompositeOperation = 'destination-over';
//       if (img.height < img.width) {
//         ctx.drawImage(img, ileft, itop, 597 * img.width / img.height, 597);
//       } else {
//         ctx.drawImage(img, ileft, itop, 749, 749 * img.height / img.width);
//       }
//       canvas.toBlob(b => {
//           const url = URL.createObjectURL(b);
//           avatar_generated.src = url;
//           document.getElementById('download-1').href = url;
//           document.getElementById('download-2').href = url;
//         })
//       }
//
// function displayImage(x_nudge = 0, y_nudge = 0, scale = 1) {
//         ctx.clearRect(0, 0, cwidth, cheight);
//         URL.revokeObjectURL(avatar_generated.src);
//         draw_frame();
//         let img = new Image();
//         img.src = URL.createObjectURL(upload.files.item(0));
//         img.onload = function() {
//           draw_upload(img, x_nudge, y_nudge, scale);
//         }
//         hide('loading');
//         expand('buttons');
//         expand('instruction');
//       }



      // if (!('createImageBitmap' in window)) {
      //     window.createImageBitmap = async function(blob) {
      //         return new Promise((resolve,reject) => {
      //             let img = document.createElement('img');
      //             img.addEventListener('load', function() {
      //                 resolve(this);
      //             });
      //             img.src = URL.createObjectURL(blob);
      //         });
      //     }
      // }

// function makeImage() {
//         const canvas = document.getElementById('canvas');
//         const ctx = canvas.getContext('2d');
//         frame = new Image();
//         image = new Image();
//         frame.src = 'images/JaimeCapeFinal.png';
//         frame.onload = function() {
//             ctx.drawImage(frame, 0, 0, 1200, 675);
//             upload = document.getElementById('inputfile').files.item(0);
//             console.log(upload.name);
//             image.src = URL.createObjectURL(upload);
//             image.onload = function() {
//               ctx.globalCompositeOperation = 'destination-over';
//               if (image.height < image.width) {
//                 ctx.drawImage(image, 413, 34, 605.8 * image.width / image.height, 605.8)
//               }
//               ctx.drawImage(image, 413, 34, 750.4, 750.4 * image.height / image.width);
//               canvas.toBlob( b =>
//                 {
//                   var url = URL.createObjectURL(b);
//                   document.getElementById('avatar-generated').src = url;
//                   document.getElementById('download').href = url;
//                   ctx.clearRect(0,0,canvas.width,canvas.height);
//                 })
//             }
//         }
//       }
