import queryString from 'query-string';
import fetch from 'node-fetch';

export async function getAccessTokenFromCode(code: any) {
  const postData = queryString.stringify({
    client_id: `${process.env.CLIENT_ID}`,
    client_secret: `${process.env.CLIENT_SECRET}`,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.HOST_REDIRECT_URI}/google/callback`,
    code,
  });

  const { access_token }: any = await fetch(
    'https://oauth2.googleapis.com/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length + '',
      },
      body: postData,
    },
  );
  return access_token;
}
