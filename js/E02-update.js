import { supa } from "../supabase.js";

const btn = document.querySelector('#registrieren');
btn.addEventListener('click', insertPerson);

const Person = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'Person' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()