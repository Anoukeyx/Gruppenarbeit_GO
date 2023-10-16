import { supa } from "../supabase.js";

async function loadFirstName(session) {
    const { data, error } = await supabase.from('Person').select('vorname').eq('email', session.user.email);

    if (error) {
        console.error(error);
        return;
    }

    if (data.length > 0) {
        const firstName = data[0].vorname;
        document.getElementById('userName').textContent = firstName; // Aktualisieren Sie das 'userName'-Element mit dem Vor- und Nachnamen
    }
}


/*supa.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
        console.log("User signed in: ", session.user);
        updateUserStatus(session.user);
        loadFirstName(session); // Lade den Vornamen, wenn der Benutzer angemeldet ist
    } else if (event === "SIGNED_OUT") {
        console.log("User signed out");
        updateUserStatus(null);
    }
});*/





const initialUser = supa.auth.user();
console.log(initialUser)


function generateQRCode() {
    let url = window.location.href;
    let qrcodePlace = document.getElementById("qrcode");
    qrcodePlace.innerHTML = "";
    //const id = document.getElementById("id").value; // Hier muss die gewünschte ID aus der Datenbank eingefügt werden
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
