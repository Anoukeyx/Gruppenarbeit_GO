console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://yhfnguqyeqwvnhztddos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZm5ndXF5ZXF3dm5oenRkZG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzIzNjEsImV4cCI6MjAxMTkwODM2MX0.r0cRtlqEAiclvzwcx3a-enI-JzX8hepprbLIiIrWMAc'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }

