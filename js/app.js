import { supa } from "../supabase.js";

function generateQRCode() {
    let url = window.location.href;
    let qrcodePlace = document.getElementById("qrcode");
    qrcodePlace.innerHTML = "";
    const id = document.getElementById("id").value; // Hier muss die gewünschte ID aus der Datenbank eingefügt werden
    
    //Hier wird der QR Code Generiert
    let qrcode = new QRCode(qrcodePlace, {
        //Hier kann der Link angepasst werden
        text: `${url}/profil.html?id=${id}`, //<-- Hier kann die UUID statt der ID genutzt werden
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    //Diese Funktion ist für Testzwecke erstellt worden, damit der Link schnell im Browser getestet werden kann.
    let link = `${url}/profil.html?id=${id}`;  
    linkAdd = `<a href="${link}" target="_blank">${link}</a>`;
    document.getElementById("link").innerHTML = linkAdd;
}

//Anschliessend kann Supabase genutzt werden um den erstellten QR Code in der Datenbank zu speichern.


// Listener auf dem Button
document.getElementById("generateQR").addEventListener("click", generateQRCode);