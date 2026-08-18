import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>Authenticating...</title></head>
      <body>
        <script>
          const hash = window.location.hash.substring(1);
          const params = new URLSearchParams(hash);
          const idToken = params.get('id_token');
          if (idToken) {
            document.cookie = "google_id_token=" + idToken + "; path=/; max-age=60";
            window.location.href = "/";
          } else {
            window.location.href = "/login?error=OAuthFailed";
          }
        </script>
      </body>
    </html>
  `;
  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}