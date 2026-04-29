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

  const content = `
    <html>
      <body>
        <script>
          (function() {
            function receiveMessage(e) {
              console.log("Receiving message:", e.data);
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage(
              'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
              window.location.origin
            );
          })();
        </script>
      </body>
    </html>
  `;

  return new Response(content, {
    headers: { 'Content-Type': 'text/html' },
  });
}
