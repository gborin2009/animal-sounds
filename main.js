function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
   classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yUK-5SFLM/model.json",mediaReady)
}
function mediaReady() {
  classifier.classify(gotResults)  
}
function gotResults(error, results) {
 console.log("got result")   
}