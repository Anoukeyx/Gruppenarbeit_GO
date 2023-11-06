import { supa } from "../supabase.js";

const btn = document.querySelector('#erneuern');
btn.addEventListener('click', updatePerson);


async function updatePerson() {
  const first_name = document.querySelector('#first_name').value;
  const last_name = document.querySelector('#last_name').value;
  const birth_date = document.querySelector('#birth_date').value;
  const telefon = document.querySelector('#telefon').value;
  const email = document.querySelector('#email').value;

const { data, error } = await supabase
  .from('Person')
  .update({ vorname: first_name, 
    nachname: last_name, 
    geburtstag: birth_date, 
    telefon: telefon,
    email: email,
    })
  .eq( "id", 40)
  .select() 
}
