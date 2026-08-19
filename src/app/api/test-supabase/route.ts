import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize the native Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    // Query your 'Equipment' table directly using Supabase syntax
    const { data, error } = await supabase.from('Equipment').select('*');

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully connected to Supabase natively!', 
      count: data.length, 
      data 
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}