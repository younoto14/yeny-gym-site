import { redirect } from 'next/navigation';

export async function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
  redirect(redirectURL);
}
