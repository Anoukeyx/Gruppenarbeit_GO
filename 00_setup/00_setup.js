import { supa } from "../00_setup/supabase.js";

console.log("00 JavaScript verbunden")

// 1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.

async function selectAllPersons() {
    const { data, error } = await supa.from("personen").select();
  
    return data;
  }

console.log('Alle Personen in der DB: ', selectAllPersons);