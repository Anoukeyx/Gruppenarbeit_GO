import { supa } from "../supabase.js";

async function loadFirstName() {
    const { data, error } = await supabase.from('Person').select('vorname').eq('email', email.value); // Hier 'id' anpassen, um den gewünschten Datensatz abzurufen

    if (error) {
        console.error(error);
        return;
    }

    if (data.length > 0) {
        const firstName = data[0].firstname;
        document.querySelector('h1').textContent = `Hallo ${firstName}!`;
    }
}

// Die Funktion aufrufen, um den Vornamen zu laden
loadFirstName();
