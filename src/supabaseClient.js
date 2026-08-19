import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://aalmdotjngttgcrnpcvf.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbG1kb3Rqbmd0dGdjcm5wY3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMjQyNjUsImV4cCI6MjEwMjcwMDI2NX0.NNKiPK0GiGMUn1pzdPn0JBw3Zd0NERYOfkrcaidCWq4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)