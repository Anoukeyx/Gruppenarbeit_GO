console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://jcgdfenxejumvmejngdx.supabase.co'
const supabaseKey = 'process.env.SUPABASE_KEY'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }