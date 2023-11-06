import { supa } from "../supabase.js";

const btn = document.querySelector('#erneuern');
btn.addEventListener('click', updatePerson);


// const userId =  await supa.auth.getUser()

// TODO: ersetze userID durch id des eingeloggten Users
const userId = 'a1640389-e414-4c89-a7b0-b80049e27012'

async function getPersonDetails() {
  let first_name = document.querySelector('#first_name');
  let last_name = document.querySelector('#last_name');
  let birth_date = document.querySelector('#birth_date');
  let telefon = document.querySelector('#telefon');
  let email = document.querySelector('#email');
  const { data, error} = await supa
    .from('Person')
    .select()
    .eq('user_id', userId)
    .single()

    if (!error) {
      first_name.value = data.vorname
      last_name.value = data.nachname
      birth_date.value = data.geburtstag
      telefon.value = data.telefon
      email.value = data.email
    } else {
      console.error(error)
    }
}


async function updatePerson() {
  let first_name = document.querySelector('#first_name');
  let last_name = document.querySelector('#last_name');
  let birth_date = document.querySelector('#birth_date');
  let telefon = document.querySelector('#telefon');
  let email = document.querySelector('#email');
  
  const { error } = await supa
  .from('Person')
  .update({ 
    vorname: first_name.value, 
    nachname: last_name.value, 
    geburtstag: birth_date.value, 
    telefon: telefon.value,
    email: email.value,
  })
  .eq('user_id', userId)

  if (error) console.error(error)
} 
// wenn seite geladen wird, hole alle Daten der eingeloggten Person und zeige sie in den Input Fields
document.addEventListener('DOMContentLoaded', async () =>
  await getPersonDetails()
)