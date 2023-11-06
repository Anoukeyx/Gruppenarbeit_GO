import { supa } from "../supabase.js";

const btn = document.querySelector('#erneuern');
btn.addEventListener('click', updatePerson);

async function updatePerson() {
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    const birth_date = document.querySelector('#birth_date').value;
    const telefon = document.querySelector('#telefon').value;
    const email = document.querySelector('#email').value;

    // Setzen Sie die Rolle_id auf "Nutzer"
    const rolle_id = "Nutzer";
    const regTime = new Date();
    
    


    const { data, error } = await supa.from("Person").udpate([
      {
        vorname: first_name, 
        nachname: last_name, 
        geburtstag: birth_date, 
        telefon: telefon,
        email: email,
        Rolle_id: rolle_id,  // Rolle_id wird auf "Nutzer" gesetzt
        regtime: regTime,
      }
    ]);
    if(!error) {
      uploadPhoto();
      window.location.pathname="../hl/B02.html"
    }
}