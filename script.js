//Cache the DOM
var buton = docoument.getElementById("button")
var nume=docoument.getElementById("nume")
var prenume=docoument.getElementById("prenume")
var img=docoument.getElementById("image")
var asteptari=docoument.getElementById("asteptari")
//Add eventListeners
buton.addEventListener("click",AltaViata)
function AltaViata()
{
nume.innerHTML="Functie: Inginer"
prenume.innerHTML="Loc de munca: NASA"
img.src="C:\Users\Farkas.Di.Dionisie\Downloads\garen.jpg"
body.style.backgroundcolor="grey"
}
