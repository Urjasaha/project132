img= "";

function preload() {
    img= loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}