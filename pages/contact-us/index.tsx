import Head from 'next/head'
import { Layout } from '@/components'
import ContactUs from '@/sections/ContactUs'

const ContactUsPage = () => {
   return (
      <>
         <Head>
            <title>Webstudio | تماس با ما</title>
         </Head>
         <Layout>
            <ContactUs />
         </Layout>
      </>
   )
}

export default ContactUsPage