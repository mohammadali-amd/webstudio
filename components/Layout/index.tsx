import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = ({ children }: any) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

export default Layout