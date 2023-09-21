// import { NextResponse } from 'next/server';

// export async function POST(request,res) {
//   const body = await request.json()
//   console.log('Data', body);

//   //console.log('Data',  request.body);

//   return NextResponse.json({ name: 'John Doe'}, { status: 200 })
// }

import { google } from 'googleapis';
import { NextResponse } from 'next/server'; 

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, access_token } = process.env;

export async function POST(request, res) {
  const body = await request.json();
  console.log('Data', body);

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const accessToken = await oAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'info@olesin.me',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: 'info@olesin.me',
    to: 'info@olesin.me',
    subject: body.subject,
    text: `Name: ${body.name}\nPhone Number: ${body.tel}\nEmail: ${body.email}\nMessage: ${body.message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}