import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://eagaxwpjafqepeiqwhhy.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZ2F4d3BqYWZxZXBlaXF3aGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MTY1MDcsImV4cCI6MjAwNDk5MjUwN30.lu89syM7UXwso7V-YI9gH0C6ecnwCjM26gBP5MujO3Y')

