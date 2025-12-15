// app/auth/callback/route.ts
/**
 * Supabase Auth Callback Route
 *
 * This route handles OAuth callbacks (Google, GitHub, etc.) and Magic Link authentication.
 * When users sign in with third-party providers or click magic links, they're redirected here.
 *
 * IMPORTANT: This is a template file. To make it work:
 *
 * 1. Install Supabase dependencies:
 *    npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
 *
 * 2. Set up environment variables in .env.local:
 *    NEXT_PUBLIC_SUPABASE_URL=your-project-url
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
 *
 * 3. Create a Supabase client in lib/supabase.ts
 *
 * 4. Configure OAuth providers in your Supabase dashboard
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");

  // ============================================
  // TEMPLATE CODE - UNCOMMENT AND SETUP FOR PRODUCTION
  // ============================================

  /*
  // 1. Import Supabase dependencies (uncomment when installed)
  import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
  import { cookies } from 'next/headers'
  
  // 2. Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error, errorDescription)
    return NextResponse.redirect(
      new URL(`/error?error=${encodeURIComponent(errorDescription || error)}`, requestUrl.origin)
    )
  }

  // 3. Check for authorization code
  if (!code) {
    console.error('No authorization code found in callback')
    return NextResponse.redirect(
      new URL('/error?error=missing_auth_code', requestUrl.origin)
    )
  }

  try {
    // 4. Create Supabase client with cookies
    const supabase = createRouteHandlerClient({ cookies })
    
    // 5. Exchange the authorization code for a session
    const { error: authError, data } = await supabase.auth.exchangeCodeForSession(code)
    
    if (authError) {
      console.error('Error exchanging code for session:', authError)
      return NextResponse.redirect(
        new URL(`/error?error=${encodeURIComponent(authError.message)}`, requestUrl.origin)
      )
    }

    const { session } = data
    
    if (!session) {
      console.error('No session returned after code exchange')
      return NextResponse.redirect(
        new URL('/error?error=no_session', requestUrl.origin)
      )
    }

    // 6. [Optional] Create/update user profile in your database
    // await handleUserProfile(supabase, session.user)

    // 7. Success! Redirect to appropriate page
    const redirectPath = requestUrl.searchParams.get('redirect_to') || '/'
    return NextResponse.redirect(new URL(redirectPath, requestUrl.origin))

  } catch (error) {
    console.error('Unexpected error in auth callback:', error)
    return NextResponse.redirect(
      new URL('/error?error=unexpected_error', requestUrl.origin)
    )
  }
  */

  // ============================================
  // DEMO MODE - FOR TEMPLATE PURPOSES ONLY
  // ============================================

  // In demo mode, simulate successful authentication
  console.log("Demo: Auth callback triggered");
  console.log("Code:", code);
  console.log("Error:", error);

  if (error) {
    // Redirect to error page in demo mode
    return NextResponse.redirect(
      new URL(
        `/error?error=${encodeURIComponent(errorDescription || error)}`,
        requestUrl.origin
      )
    );
  }

  // Simulate successful OAuth/Magic Link login
  // In a real app, this would create a Supabase session
  // For demo, just redirect to home with success message
  return NextResponse.redirect(
    new URL("/?auth=success&method=oauth", requestUrl.origin)
  );
}

/**
 * Optional helper function for user profile management
 * Uncomment and customize for production use
 */
/*
async function handleUserProfile(supabase: any, user: any) {
  const { id, email, user_metadata } = user
  
  // Check if user profile already exists
  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', id)
    .single()
  
  if (!existingProfile) {
    // Create new profile
    const profileData = {
      id,
      email,
      full_name: user_metadata?.full_name || user_metadata?.name || '',
      avatar_url: user_metadata?.avatar_url || user_metadata?.picture || '',
      updated_at: new Date().toISOString(),
    }
    
    await supabase.from('profiles').insert(profileData)
  }
}
*/
