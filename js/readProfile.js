import { supa } from "../supabase.js";

// Wenn die Seite geladen ist, wird diese Funktion ausgeführt
window.onload = function() {
    // Die ID wird aus der URL gelesen
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Hier wird die ID angezeigt. In der Datenbank kann dann nach dieser ID gesucht werden und entsprechend Daten angezeigt werden.
    document.getElementById('idDisplay').innerText = `ID: ${id}`;
}