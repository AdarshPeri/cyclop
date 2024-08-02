'use server';

import { Resend } from 'resend';
import JoinUsTemplate from '../components/JoinUsTemplate';
import EmailTemplate from '../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
let emailList = process.env.EMAIL_LIST.split(',');
if(!emailList.length) {
  emailList = ['mahmood@cyclop.com.au'];
}

export async function joinUs(_, formData) {
  const {
    firstName,
    middleName,
    lastName,
    phone,
    email,
    line1,
    line2,
    city,
    country,
    code,
    coverLetter,
    resume,
  } = Object.fromEntries(formData);

  const { error } = await resend.emails.send({
    from: 'Cyclop <onboarding@resend.dev>',
    to: emailList,
    subject: 'A new application to join Cyclop has been submitted!',
    react: JoinUsTemplate({
      firstName,
      middleName,
      lastName,
      phone,
      email,
      line1,
      line2,
      city,
      country,
      code,
    }),
    attachments: [
      {
        filename: coverLetter['name'],
        content: Buffer.from(await coverLetter.arrayBuffer()).toString(
          'base64'
        ),
      },
      {
        filename: resume['name'],
        content: Buffer.from(await resume.arrayBuffer()).toString('base64'),
      },
    ],
  });

  if (error) {
    return {
      message: 'Something went wrong 🙄, please try again.',
      error: true,
    };
  }

  return {
    message:
      'Thank you. Your application has been submitted successfully!👀 We will get back to you shortly.👁 ',
    error: false,
  };
}

export async function contactUs(_, formData) {
  const {
    firstName,
    lastName,
    email,
    companyName,
    industry,
    employeeCount,
    role,
    software,
    comments,
  } = Object.fromEntries(formData);

  const { error } = await resend.emails.send({
    from: 'FYI <onboarding@resend.dev>',
    to: emailList,
    subject: 'A new application to contact Cyclop has been submitted!',
    react: EmailTemplate({
      firstName,
      lastName,
      email,
      companyName,
      industry,
      employeeCount,
      role,
      software,
      comments,
      actionFrom: 'contact',
    }),
  });

  if (error) {
    return {
      message: 'Something went wrong 🙄, please try again.',
      error: true,
    };
  }

  return {
    message:
      'Thank you. Your application has been submitted successfully!👀 We will get back to you shortly.👁 ',
    error: false,
  };
}

export async function requestDemo(_, formData) {
  const {
    firstName,
    lastName,
    email,
    companyName,
    industry,
    employeeCount,
    role,
    software,
  } = Object.fromEntries(formData);

  const { error } = await resend.emails.send({
    from: 'FYI <onboarding@resend.dev>',
    to: emailList,
    subject:
      'A new application to request a demo from Cyclop has been submitted!',
    react: EmailTemplate({
      firstName,
      lastName,
      email,
      companyName,
      industry,
      employeeCount,
      role,
      software,
      comments: '',
      actionFrom: 'demo',
    }),
  });

  if (error) {
    return {
      message: 'Something went wrong 🙄, please try again.',
      error: true,
    };
  }

  return {
    message:
      'Thank you. Your application has been submitted successfully!👀 We will get back to you shortly.👁 ',
    error: false,
  };
}
