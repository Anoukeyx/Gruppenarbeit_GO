import { supa } from "../supabase.js";

const btn = document.querySelector('#loeschen');
btn.addEventListener('click', deletePerson, deleteusers);

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