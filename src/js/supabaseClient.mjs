import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://kfbjjhmxynwawwayhxki.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYmpqaG14eW53YXd3YXloeGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4OTg3MDgsImV4cCI6MjA1OTQ3NDcwOH0.A3J1qthSCaLMRtuJozhhO4j_Q9u6r5WEPeOtNRHCEu8';
export const supabase = createClient(supabaseUrl, supabaseKey);
