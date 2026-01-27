import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/gvtmytjapghdnuamvvkp/editor/17495?schema=public'
const supabaseKey = 'sb_publishable_c1aX97Wbkz7AFl-wrhV_sQ_yEa_px52'

export const supabase = createClient(supabaseUrl, supabaseKey)
