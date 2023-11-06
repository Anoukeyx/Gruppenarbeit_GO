import { supa } from "../supabase.js";

const btn = document.querySelector('#erneuern');
btn.addEventListener('click', updatePerson);


const Person = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'Person' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()





//   if(!error) {
//     uploadPhoto();
//     window.location.pathname="../html/B02.html"
//   }