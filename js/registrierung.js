import { supa } from "../supabase.js";

const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

async function insertPerson() {
    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    const birth_date = document.querySelector('#birth_date').value;
    const telefon = document.querySelector('#telefon').value;
    const email = document.querySelector('#email').value;

    // Setzen Sie die Rolle_id auf "Nutzer"
    const rolle_id = "Nutzer";
    const regTime = new Date();


    const { data, error } = await supa.from("Person").insert([
      {
        vorname: first_name, 
        nachname: last_name, 
        geburtstag: birth_date, 
        telefon: telefon,
        email: email,
        Rolle_id: rolle_id,  // Rolle_id wird auf "Nutzer" gesetzt
        regtime: regTime
      }
    ]);
    
    if (data) {
      console.log('Eintrag wurde erfolgreich erstellt', data);
      // Hier können Sie den Benutzer auf eine Erfolgsseite umleiten oder eine Erfolgsmeldung anzeigen.
    } else {
      console.log('Fehler aufgetreten', error);
      // Hier können Sie den Benutzer auf eine Fehlerseite umleiten oder eine Fehlermeldung anzeigen.
    }

  
}




/*--------------------------ENTSCHEIDUNG NUTZER ODER ANBIETER UND ABLAUFDATUM START----------------------------*/

/*function readPersonStatus(user) {
  const PersonStatusElement = document.getElementById('PersonStatus');

  if (Person) {
      if (Person.Rolle_id === 'anbieter') {
          PersonStatusElement.textContent = `Authenticated as Anbieter: ${Person.email}`;
          window.location.href = "../html/B01.html"
      } else if (Person.Rolle_id === 'nutzer') {
          
          const currentDate = new Date();
          const aboEndDate = new Date(Person.regtime);
          aboEndDate.setFullYear(aboEndDate.getFullYear() + 1);

          if (aboEndDate >= currentDate) {
            PersonStatusElement.textContent = `Authenticated as Nutzer (Abo gültig): ${Person.email}`;
            window.location.href = "../html/B02.html"
          } else {
            PersonStatusElement.textContent = `Authenticated as Nutzer (Abo abgelaufen): ${Person.email}`;
            window.location.href = "../html/E01.html"
          }
      } else {
        PersonStatusElement.textContent = `Authenticated as: ${Person.email} (Unbekannte Rolle)`;
      }
  } else {
    PersonStatusElement.textContent = "Not authenticated.";
    window.location.href = "../html/index.html" 
  }
}*/

/*--------------------------ENTSCHEIDUNG NUTZER ODER ANBIETER UND ABLAUFDATUM ENDE----------------------------*/
