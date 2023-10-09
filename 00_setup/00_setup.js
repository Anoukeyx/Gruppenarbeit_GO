import { supa } from "../00_setup/supabase.js";

console.log("00 JavaScript verbunden")


async function selectAllPersons() {
    const { data, error } = await supa.from("personen").select();
  
    return data;
  }

console.log('Alle Personen in der DB: ', selectAllPersons);