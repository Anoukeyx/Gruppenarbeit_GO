import { supa } from "../supabase.js";

const btn = document.querySelector('#erneuern');
btn.addEventListener('click', updatePerson);


// const user =  await supa.auth.getUser()

// TODO: ersetze userID durch id des eingeloggten Users
const userId = 'a1640389-e414-4c89-a7b0-b80049e27012'

async function getPersonDetails() {
  // hole die aktuellen werte der input fields
  let first_name = document.querySelector('#first_name').value;
  let last_name = document.querySelector('#last_name').value;
  let birth_date = document.querySelector('#birth_date').value;
  let telefon = document.querySelector('#telefon').value;
  let email = document.querySelector('#email').value;

  // hole den user aus der datenbank
  const { data, error} = await supa
    .from('Person')
    .select()
    .eq('user_id', userId)
    .single()

    if (!error) {
      // die daten aus der datenbank in den input fields anzeigen lassen.
      first_name = data.vorname
      last_name = data.nachname
      birth_date = data.geburtstag
      telefon = data.telefon
      email = data.email
    } else {
      console.error(error)
    }
}


async function updatePerson() {
  // hole die aktuellen werte der input fields
  let first_name = document.querySelector('#first_name').value;
  let last_name = document.querySelector('#last_name').value;
  let birth_date = document.querySelector('#birth_date').value;
  let telefon = document.querySelector('#telefon').value;
  let email = document.querySelector('#email').value;


  // update die neuen werte aus den input fields in die db
  const { error } = await supa
  .from('Person')
  .update({ 
    vorname: first_name, 
    nachname: last_name, 
    geburtstag: birth_date, 
    telefon: telefon,
    email: email,
  })
  .eq('user_id', userId)

  if (error) console.error(error)
} 
// wenn seite geladen wird, hole alle Daten der eingeloggten Person und zeige sie in den Input Fields
document.addEventListener('DOMContentLoaded', async () =>
  await getPersonDetails()
)