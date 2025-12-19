
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cnzeiwxpahdizkfighsm.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuemVpd3hwYWhkaXprZmlnaHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzM2ODcsImV4cCI6MjA4MTc0OTY4N30.GfQP9ZGAJej9WhunxJbPQkzwaxEK3HiadQyEAWcGVLE'

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    console.warn('Missing Supabase URL or Key. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
