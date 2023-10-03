import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jcgdfenxejumvmejngdx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ2RmZW54ZWp1bXZtZWpuZ2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzE4OTEsImV4cCI6MjAxMTkwNzg5MX0.RsfAAg8PMNJ5TM_VLd4SUimRF-ZvPGzwPJasfm3-adI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;