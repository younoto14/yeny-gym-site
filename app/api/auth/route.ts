import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const data = await res.json();

  // This script tells the popup window to send the token back to your main site
  const content = `
    <html>
      <body>
        <script>
          const token = "${data.access_token}";
          if (token) {
            window.opener.postMessage(
              'authorization:github:success:{"token":"' + token + '","provider":"github"}',
              window.location.origin
            );
          } else {
            window.opener.postMessage("authorization:github:error:User denied access", window.location.origin);
          }
        </script>
        <p>Logging you in... you can close this window if it doesn't close automatically.</p>
      </body>
    </html>
  `;

  return new Response(content, {
    headers: { 'Content-Type': 'text/html' },
  });
}
