 import { supa } from "../supabase.js";
 
const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

async function insertPerson() {
    const first_name = document.querySelector('#first_name', "#last_name", "#birth_date", "#telefon", "#email_adress");
    const { data, error } = await supa.from("Person").insert([
      {
        vorname: first_name.value, 
        nachname: last_name.value, 
        geburtstag: birth_date.value, 
        telefon: telefon.value,
        email: email_adress.value,
       
      }
    ]);
    
    if (data) {
      console.log('Entry was created successfully', data);
    } else {
      console.log('Error occured', error)
    }
  }


  