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

/*--------------------------ENTSCHEIDUNG NUTZER ODER ANBIETER UND ABLAUFDATUM START----------------------------*/

function readPersonStatus(user) {
  const PersonStatusElement = document.getElementById('PersonStatus');

  if (Person) {
      if (Person.Rolle_id === 'anbieter') {
          PersonStatusElement.textContent = `Authenticated as Anbieter: ${Person.email}`;
          page = "../html/B01.html";
      } else if (Person.Rolle_id === 'nutzer') {
          // Hier prüfen wir das Ablaufdatum des Abos
          const currentDate = new Date();
          const aboEndDate = new Date(Person.aboEnde);

          if (aboEndDate >= currentDate) {
            PersonStatusElement.textContent = `Authenticated as Nutzer (Abo gültig): ${Person.email}`;
            page = "../html/B02.html";
          } else {
            PersonStatusElement.textContent = `Authenticated as Nutzer (Abo abgelaufen): ${Person.email}`;
            page = "../html/E01.html";
          }
      } else {
        PersonStatusElement.textContent = `Authenticated as: ${Person.email} (Unbekannte Rolle)`;
      }
  } else {
    PersonStatusElement.textContent = "Not authenticated.";
  }
}

/*--------------------------ENTSCHEIDUNG NUTZER ODER ANBIETER UND ABLAUFDATUM ENDE----------------------------*/
