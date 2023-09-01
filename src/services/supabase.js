import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://dhkcxjynmlwwwjdesjrg.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoa2N4anlubWx3d3dqZGVzanJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1OTg1NjMsImV4cCI6MjAwODE3NDU2M30.r-Tsa5SuSHQ79uCH88eE8Q9bfvAYyy2Er__pqy6c3YE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
