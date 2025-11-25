import { createClient } from '@supabase/supabase-js';

// NOTE: These should be in process.env
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

let supabaseClient = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export const supabase = supabaseClient;

// Helper to save progress if connected
export const saveProgress = async (userId: string, itemId: string, status: 'new' | 'learning' | 'mastered') => {
  if (!supabase) {
    console.log("Supabase not configured. Mocking save:", { userId, itemId, status });
    return;
  }
  
  const { error } = await supabase
    .from('user_progress')
    .upsert({ 
        user_id: userId, 
        item_id: itemId, 
        status, 
        updated_at: new Date() 
    });

  if (error) console.error('Error saving progress:', error);
};
