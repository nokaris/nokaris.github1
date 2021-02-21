//startpositionen x/y 
var ss = 275;
var sg = 385;
var sb = 495;
var sr = 605;
var ys = 20;
var yg = 20;
var yb = 20;
var yr = 20;
var augen = 0;

//Anzahl shots je Figur
var shotsrot = 0;
var shotsgelb = 0;
var shotsblau = 0;
var shotsschwarz = 0;

$(document).ready(function () {

    var spielbrett = document.getElementById('spielfeld');
    spielfeld = spielbrett.getContext('2d');

    var imageData, numPixels, pixels, buffer;
    var image = new Image();

     image.addEventListener("load", function () {
        spielfeld.drawImage(image, 0, 0);
        imageData = spielfeld.getImageData(0, 0, spielbrett.width, spielbrett.height);
        buffer = spielfeld.createImageData(imageData); // Buffer, um die Pixel wieder auf das Original zu setzen
        numPixels = imageData.width * imageData.height;
        pixels = imageData.data;
    });
    //image.src = "bilder/spielbrettkachel.png"; 

    //Variablen deklarieren
    var spielfigurSchwarz = new Image();
    var spielfigurGelb = new Image();
    var spielfigurRot = new Image();
    var spielfigurBlau = new Image();

    //Spielfiguren zeichnen
    spielfigurSchwarz.onload = function () {
        spielfeld.drawImage(spielfigurSchwarz, ss, ys);
    }
    spielfigurGelb.onload = function () {
        spielfeld.drawImage(spielfigurGelb, sg, yg);
    }
    spielfigurRot.onload = function () {
        spielfeld.drawImage(spielfigurRot, sr, yr);
    }
    spielfigurBlau.onload = function () {
        spielfeld.drawImage(spielfigurBlau, sb, yb);
    }

    //Spielfigurenbilder laden
    spielfigurSchwarz.src = 'bilder/stern.png';
    spielfigurGelb.src = 'bilder/sterngelb.png';
    spielfigurRot.src = 'bilder/sternrot.png';
    spielfigurBlau.src = 'bilder/sternblau.png';
});

//Modal
document.getElementById("Spieleranzahlauswahl").addEventListener('change', CheckAuswahl);

//zeige textfeler nach anzahl der auswahl an
function CheckAuswahl() {
    document.getElementById("inputname2").style.display = "block";
    document.getElementById("inputname3").style.display = "block";
    document.getElementById("inputname4").style.display = "block";

    var num = document.getElementById("Spieleranzahlauswahl").value;
    if (num == "1") {
        document.getElementById("inputname2").style.display = "none";
        document.getElementById("inputname3").style.display = "none";
        document.getElementById("inputname4").style.display = "none";
    }
    else if (num == "2") {
        document.getElementById("inputname3").style.display = "none";
        document.getElementById("inputname4").style.display = "none";
    }
    else if (num == "3") {
        document.getElementById("inputname4").style.display = "none";
    }
    else if (num == "4") {
        return true;
    }
    else {
        return false;
    }
}

function speichern() {
    var input1 = inputname1.value;
    var input2 = inputname2.value;
    var input3 = inputname3.value;
    var input4 = inputname4.value;
    var num = document.getElementById("Spieleranzahlauswahl").value;

    if (num == "1") {
        document.getElementById("outputname1").textContent = input1;
        document.getElementById("outputname11").style.display = "block";
    }
    else if (num == "2") {
        document.getElementById("outputname1").textContent = input1;
        document.getElementById("outputname1").style.display = "block";
        document.getElementById("outputname2").textContent = input2;
        document.getElementById("outputname2").style.display = "block";
    }
    else if (num == "3") {
        document.getElementById("outputname1").textContent = input1;
        document.getElementById("outputname1").style.display = "inline";
        document.getElementById("outputname2").textContent = input2;
        document.getElementById("outputname2").style.display = "inline";
        document.getElementById("outputname3").textContent = input3;
        document.getElementById("outputname3").style.display = "inline";

        document.getElementById("outputname1zahl").textContent = "5";
        document.getElementById("outputname2zahl").textContent = "79";
        document.getElementById("outputname3zahl").textContent = "33";

    }
    else if (num == "4") {
        document.getElementById("outputname1").textContent = input1;
        document.getElementById("outputname1").style.display = "block";
        document.getElementById("outputname2").textContent = input2;
        document.getElementById("outputname2").style.display = "block";
        document.getElementById("outputname3").textContent = input3;
        document.getElementById("outputname3").style.display = "block";
        document.getElementById("outputname4").textContent = input4;
        document.getElementById("outputname4").style.display = "block";
    }
    else {
        return false;
    }
}

function würfeln() {
    document.getElementById('würfelimg').setAttribute('src', 'bilder/würfelgif.gif');
    setTimeout(function () {
        augen = Math.floor(Math.random() * 6);
        var bilderaugen = new Array(); // Pfade zu den Bildern
        for (i = 0; i < 6; i++) {
            bilderaugen[i] = "bilder/würfel" + i + ".png";
        }
        document.getElementById('würfelimg').setAttribute('src', bilderaugen[augen]);
    }, 1700);
}

//https://www.javascript-kurs.de/javascript-lernen-spielfigur-zeichnen.htm
//Diagrams.net