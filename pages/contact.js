import ContactForm from '../components/contact/contact-form';
import { Fragment } from 'react';
import Head from 'next/head';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your feedback' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default ContactPage;
