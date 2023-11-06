console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://jcgdfenxejumvmejngdx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ2RmZW54ZWp1bXZtZWpuZ2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzE4OTEsImV4cCI6MjAxMTkwNzg5MX0.RsfAAg8PMNJ5TM_VLd4SUimRF-ZvPGzwPJasfm3-adI'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ2RmZW54ZWp1bXZtZWpuZ2R4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjMzMTg5MSwiZXhwIjoyMDExOTA3ODkxfQ.yFRopXJE1LHDIYl-VfmfKVAq7qze97ztqEGSlvaMme8'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

const supaAdmin = supabase.createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

export { supa, supaAdmin }

