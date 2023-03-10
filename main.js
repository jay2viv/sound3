function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dFoFmkwv9/model.json",modelReady);    
}

function modelReady()
{
    console.log("model is ready");
    classifier.classify(got_result);
}

function got_result(error,result)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(result)
        var sound = result[0].label;
        var confidence = result[0].confidence.toFixed(3);
        document.getElementById("confidence").innerHTML = confidence;
        document.getElementById("result").innerHTML = sound;
        if(sound=="dog")
        {
            document.getElementById("Animal").src="dog.jpg";
            
        }

        else if(sound=="cat")
        {
            document.getElementById("Animal").src="cat.webp";
        }

        else  if(sound=="duck")
        {
            document.getElementById("Animal").src="duck.webp";    
        }

        else if(sound=="cow")
        {
            document.getElementById("Animal").src="cow.webp";
        }

        else if(sound=="BackgroundNoise")
        {
            document.getElementById("Animal").src="download.png";
        }
    }
}