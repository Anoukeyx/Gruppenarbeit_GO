import { supa } from "../supabase.js";

<<<<<<< HEAD
const btn = document.querySelector('#loeschen');
btn.addEventListener('click', deletePerson, deleteusers);

=======
const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);
>>>>>>> 0ac62ba619b5832c54a785f920249c75a696fc4b

const Person = supabase.channel('custom-delete-channel')
  .on(
    'postgres_changes',
    { event: 'DELETE', schema: 'public', table: 'Person' },
    (payload) => {
      console.log('Change received!', payload)
    } 

    'postgres_changes',
    { event: 'DELETE', schema: 'auth', table: 'users' },
    (payload) => {
      console.log('Change received!', payload)
    } 

  )
  .subscribe()