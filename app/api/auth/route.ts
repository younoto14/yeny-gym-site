import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // Step 1: No code yet — redirect to GitHub to get one
  if (!code) {
    const clientId = process.env.OAUTH_CLIENT_ID;
    const redirectUri = 'https://yeny-gym-site.vercel.app/api/auth';

    const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
    githubAuthUrl.searchParams.set('client_id', clientId!);
    githubAuthUrl.searchParams.set('redirect_uri', redirectUri);
    githubAuthUrl.searchParams.set('scope', 'repo,user');

    return NextResponse.redirect(githubAuthUrl.toString());
  }

  // Step 2: GitHub redirected back with a code — exchange it for a token
  try {
    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.OAUTH_CLIENT_ID,
          client_secret: process.env.OAUTH_CLIENT_SECRET,
          code,
          redirect_uri: 'https://yeny-gym-site.vercel.app/api/auth',
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    // If GitHub returned an error
    if (tokenData.error) {
      return new NextResponse(renderScript('error', tokenData.error_description), {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    const token = tokenData.access_token;

    // Step 3: Send token back to Decap CMS via postMessage
    return new NextResponse(renderScript('success', token), {
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (err) {
    return new NextResponse(renderScript('error', 'Server error during OAuth'), {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

function renderScript(status: 'success' | 'error', content: string) {
  // This exact postMessage format is required by Decap CMS
  const message =
    status === 'success'
      ? `authorization:github:success:{"token":"${content}","provider":"github"}`
      : `authorization:github:error:${content}`;

  return `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    function sendMessage(e) {
      window.opener.postMessage('${message}', '*');
      window.removeEventListener("message", sendMessage);
    }
    window.addEventListener("message", sendMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body>
</html>`;
}
