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
  const token = data.access_token;

  // This specific script is what Decap CMS looks for to close the popup
  const content = `
    <!DOCTYPE html>
    <html>
    <body>
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("Authorized");
          }
          window.addEventListener("message", receiveMessage, false);
          
          const response = {
            token: "${token}",
            provider: "github"
          };
          
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify(response),
            window.location.origin
          );
        })();
      </script>
      <p>Authentication successful! Closing window...</p>
    </body>
    </html>
  `;

  return new Response(content, {
    headers: { 'Content-Type': 'text/html' },
  });
}
