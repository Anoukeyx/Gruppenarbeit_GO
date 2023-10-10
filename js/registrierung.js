 import { supa } from "../supabase.js";
 
const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

async function insertPerson() {
    const first_name = document.querySelector('#first_name', "#last_name", "#birth_date", "#telefon", "#email_adress", "#profile_picture");
    const { data, error } = await supa.from("Person").insert([
      {
        first_name: first_name.value, 
        last_name: last_name.value, 
        birth_date: birth_date.value, 
        telefon: telefon.value,
        email_adress: email_adress.value,
       
      }
    ]);
    
    if (data) {
      console.log('Entry was created successfully', data);
    } else {
      console.log('Error occured')
    }
  }


  