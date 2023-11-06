import { supa } from "../supabase.js";

const btn = document.querySelector('#loeschen');
btn.addEventListener('click', deleteFunktion);

const deletePerson = email.value;
const deleteusers = "uuid";

const { error } = await supabase
  .from('Person')
  .delete()
  .eq('email', email);

 deletePerson();

 deleteusers();

 deleteFunktion(deletePerson, deleteusers)





async function deletePersonByEmail(email) {
    try {
        // Versuchen, die Person anhand ihrer E-Mail-Adresse aus der Datenbank zu löschen
        const { data, error } = await supabase.from("Person").delete().eq("email", email);

        if (error) {
            // Bei einem Fehler die Fehlermeldung ausgeben
            console.error("Fehler beim Löschen der Person:", error.message);
        } else {
            // Erfolgreich gelöscht
            console.log("Person erfolgreich gelöscht.");
        }
    } catch (error) {
        console.error("Ein unerwarteter Fehler ist aufgetreten:", error);
    }
}

// Verwenden Sie die Funktion, um eine Person anhand ihrer E-Mail-Adresse zu löschen
const emailToDelete = "beispiel@email.com"; // Hier ersetzen Sie "beispiel@email.com" durch die tatsächliche E-Mail-Adresse der zu löschenden Person
deletePersonByEmail(emailToDelete);