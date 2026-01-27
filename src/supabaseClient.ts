import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvtmytjapghdnuamvvkp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dG15dGphcGdoZG51YW12dmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MzY1MjksImV4cCI6MjA4NTAxMjUyOX0.ZQtj3CfPNtKvJRYbYQTWd9HwzamoQyl0uBQ632J3lvs'

export const supabase = createClient(supabaseUrl, supabaseKey)
