export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });

  const data = await response.json();
  return new Response(`
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
          message.origin
        );
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  `, { headers: { 'Content-Type': 'text/html' } });
}
