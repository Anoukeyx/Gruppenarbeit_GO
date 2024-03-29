import { supa } from "../supabase.js";





const initialUser = supa.auth.user();
console.log(initialUser)


function generateQRCode() {
    let url = window.location.href;
    let qrcodePlace = document.getElementById("qrcode");
    qrcodePlace.innerHTML = "";
    const id = document.getElementById("id").value; // Hier muss die gewünschte ID aus der Datenbank eingefügt werden
    const id= supa.auth.user().id;
  let urlMitID =  window.location.hostname +`/html/B03.html?id=${id}`; 
    
//Hier wird der QR Code Generiert
    let qrcode = new QRCode(qrcodePlace, {
        //Hier kann der Link angepasst werden
       // text: `${url}/B03.html?id=${id}`, //<-- Hier kann die UUID statt der ID genutzt werden
       text: urlMitID, //<-- Hier kann die UUID statt der ID genutzt werden
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log("TEXT: ", urlMitID);

    //Diese Funktion ist für Testzwecke erstellt worden, damit der Link schnell im Browser getestet werden kann.
    /*let link = `${url}/B03.html?id=${id}`;  
    linkAdd = `<a href="${link}" target="_blank">${link}</a>`;
    document.getElementById("link").innerHTML = linkAdd;*/
}

//Anschliessend kann Supabase genutzt werden um den erstellten QR Code in der Datenbank zu speichern.


// Listener auf dem Button
document.getElementById("generateQR").addEventListener("click", generateQRCode);


// Auf B02.html, um die Sitzung wiederherzustellen
const sessionData = localStorage.getItem('supabaseSession');
if (sessionData) {
    const session = JSON.parse(sessionData);
    supa.auth.session = session;
    // Überprüfen, ob der Benutzer eingeloggt ist
    if (session.user) {
        // Der Benutzer ist eingeloggt
        const user = session.user;
        console.log('Benutzer eingeloggt:', user);
        // Hier können Sie den Benutzer in Ihrer Benutzeroberfläche anzeigen oder weitere Aktionen durchführen.
    } else {
        // Der Benutzer ist nicht eingeloggt
        console.log('Benutzer nicht eingeloggt');
    }
} else {
    // Keine Sitzungsinformationen gefunden, der Benutzer ist nicht eingeloggt
    console.log('Keine Sitzungsinformationen gefunden.');
}



//link loom video https://www.loom.com/share/cff7662e658e4d0591ec25ad5fce5dca?sid=47a5839a-d835-42ec-b249-80f9c653f0bf 

