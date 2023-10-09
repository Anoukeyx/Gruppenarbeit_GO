 import { supa } from "../../../00_setup/supabase.js";
 
const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

async function insertPerson() {
    const first_name = document.querySelector('#first_name');
    const { data, error } = await supa.from("Person").insert([
      {
        first_name: first_name.value, 
        last_name: 'Atkinson', 
         birth_date: '1955-01-06', 
        telefon:'+41 78 892 48 09',
        email_adress: 'haltdiefresse@danke.com',
      }
    ]);
    // In reality, all fields (first_name, last_name, birth_date and nationality) would be inserted via input field.
    if (data) {
      console.log('Entry was created successfully', data);
    } else {
      console.log('Error occured')
    }
  }