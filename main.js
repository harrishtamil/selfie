var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();   
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    
if(content=="take my selfie"){
    console.log("taking selfie ---");
    speak();
}

    document.getElementById("text-box").innerHTML.content;
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfi in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    set setTimeout(function(){
        take_snapshort();
        save();
    },5000);
}

webcam.set({
    width:360,
    height:350,
    image_format:'png',
    png_quality:96
});

camera=document.getElementById("camera");

function take_snapshort(){
    webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfie_image "src="'+data_uri+'">';
    });+
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}