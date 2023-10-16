import { supa } from "../supabase.js";



console.log(window.location.origin);

// Funktion, um Magic Link zu senden
async function sendMagicLink() {
    const email = document.getElementById('emailInput').value;
    checkDBUser(email)
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
supa.auth.onAuthStateChange(async (event, session) => {
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
console.log(session);
    const { data, error } = await supa.from('Person').select('vorname').eq('email', session);

    console.log(data)

    if(data.length == 0) {
        console.log("vorname nicht gefunden");
        window.location.href = "./html/R02.html"
    } else {
        window.location.href = "./html/B02.html"
        console.log(data);
    }

}
  

