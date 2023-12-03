status = "";

function preload() {}

function draw() {
  image(video, 0, 0, 480, 380);
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function start() {
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded() {
  console.log("poseNet Is Initialized");
  status = true;
}
