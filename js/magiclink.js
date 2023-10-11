import { supa } from "../supabase.js";

/*// Warten Sie auf das DOM, bevor Sie den Code ausführen
window.addEventListener('DOMContentLoaded', async () => {
    console.log(window.location.origin);

    // Funktion, um Magic Link zu senden
    async function sendMagicLink() {
        const email = document.querySelector('.emailInput').value;

        const { error } = await supa.auth.signIn({ email });
        
        if (error) {
            console.error("Error sending magic link: ", error.message);
        } else {
            console.log("Magic link sent to ", email);
        }
    }

    // Funktion, um User Status zu aktualisieren
    function updateUserStatus(user) {
        const userStatusElement = document.getElementById('rootCheck');
        
        if (user) {
            userStatusElement.textContent = `Authenticated as: ${user.email}`;
        } else {
            userStatusElement.textContent = "Not authenticated.";
        }
    }

    // Prüfe und zeige den initialen User Status an
//chat gpt hinzugefügt
    async function initializeApp() {

    const initialUser = supa.auth.user();
    updateUserStatus(initialUser);
    
//chat gpt hinzugefügt
    window.addEventListener(initializeApp); 

    // Eventlistener für Magic Link Button
    document.querySelector('.weiterbutton').addEventListener('click', sendMagicLink);

    // Listener, für Änderungen des Auth Status
    // UserStatus wird aktualisiert, wenn sich der Auth Status ändert
    supa.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
            console.log("User signed in: ", session.user);
            updateUserStatus(session.user);
        } else if (event === "SIGNED_OUT") {
            console.log("User signed out");
            updateUserStatus(null);
        }
    })};

    // 3. Logout Logik
    async function logout() {
        const { error } = await supa.auth.signOut();
        if (error) {
            console.error("Error during logout:", error);
        } else {
            updateUserStatus(null);
            console.log("User logged out successfully.");
        }
    }

    document.getElementById('logoutButton').addEventListener('click', logout); 


}); */

console.log(window.location.origin);

// Funktion, um Magic Link zu senden
async function sendMagicLink() {
    const email = document.getElementById('emailInput').value;
    const { error } = await supa.auth.signIn({ email });
    
    if (error) {

        console.error("Error sending magic link: ", error.message);
    } else {
        console.log("Magic link sent to ", email);
    }
}

// Funktion, um User Status zu aktualisieren
function updateUserStatus(user) {
  const userStatusElement = document.getElementById('userStatus');
  
  if (user) {
      userStatusElement.textContent = `Authenticated as: ${user.email}`;
  } else {
      userStatusElement.textContent = "Not authenticated.";
  }
}

// Prüfe und zeige den initialen User Status an
const initialUser = supa.auth.user();
updateUserStatus(initialUser);

// Eventlistener für Magic Link Button
document.getElementById('submit').addEventListener('click', sendMagicLink);

// Listener, für Änderungen des Auth Status
// UserStatus wird aktualisiert, wenn sich der Auth Status ändert
supa.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
      console.log("User signed in: ", session.user);
      updateUserStatus(session.user);
      checkDBUser(session);

  } else if (event === "SIGNED_OUT") {
      console.log("User signed out");
      updateUserStatus(null);
  }
});

// 3. Logout Logik
async function logout() {
  const { error } = await supa.auth.signOut();
  if (error) {
      console.error("Error during logout:", error);
  } else {
      updateUserStatus(null);
      console.log("User logged out successfully.");
  }
}

document.getElementById('logoutButton').addEventListener('click', logout); 


async function checkDBUser(session) {

    const { data, error } = await supa.from('Person').select('vorname').eq('email', session.user.email);

    console.log(data)

    if(data.length == 0) {
        console.log("vorname nicht gefunden");
        window.location.href = "./html/R02.html"
    } else {
        window.location.href = "./html/B02.html"
        console.log(data);
    }

}


//Code um auf andere Seite verlinkt zu werden

/*window.location.href="../html/B02.html "



const express = require('express');
const app = express();
const PORT = 3000;

// Hier wird die Datenbank-Simulation verwendet (ersetzen Sie dies durch eine echte Datenbankverbindung)
const usersInDatabase = [email_adress.value];

app.get('/magiclink/:email', (req, res) => {
  const email = req.params.email;

  // Überprüfen, ob die E-Mail-Adresse in der Datenbank existiert
  if (usersInDatabase.includes(email)) {
    // E-Mail-Adresse gefunden, weiterleiten zur Erfolgsseite
    res.redirect('/B02.html');
  } else {
    // E-Mail-Adresse nicht gefunden, weiterleiten zur Fehlerseite
    res.redirect('/R02.html');
  }
});

app.get('/B02.html', (req, res) => {
  res.send('B02.html: E-Mail-Adresse gefunden');
});

app.get('/R02.html', (req, res) => {
  res.send('R02.html: E-Mail-Adresse nicht gefunden');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});


//Email übernehmen

// Auf der ersten Seite
document.getElementById("submit").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
  
    // Speichern Sie die E-Mail-Adresse in einem Cookie oder Local Storage
    // Beispiel für die Verwendung von Local Storage:
    localStorage.setItem("email", email);
  
    // Leiten Sie auf die nächste Seite weiter
    window.location.href = "B02.html";
  });
  
  // Auf der nächsten Seite
  document.addEventListener("DOMContentLoaded", function() {
    // E-Mail-Adresse aus dem Local Storage abrufen
    var savedEmail = localStorage.getItem("email");
  
    // Verwenden Sie die E-Mail-Adresse, wie Sie möchten
    if (savedEmail) {
      document.getElementById("emailDisplay").textContent = savedEmail;
    }
  });*/
  

