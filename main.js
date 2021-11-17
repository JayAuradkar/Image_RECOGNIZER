Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = "<img width='350' height='270' src='"+data_uri+"' id='Image'>" 
    })
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/N-IP-p02i/model.json",modelloaded)