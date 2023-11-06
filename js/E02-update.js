
const Person = supabase.channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'Person' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()