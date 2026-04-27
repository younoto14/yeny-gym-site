export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();
  const token = data.access_token;

  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:{"token":"${token}","provider":"github"}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })()
    </script>
  `;

  return new Response(script, {
    headers: { 'Content-Type': 'text/html' },
  });
}
