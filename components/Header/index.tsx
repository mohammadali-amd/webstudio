import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
   { name: 'درباره ما', slug: '/#about' },
   { name: 'خدمات', slug: '/#services' },
   { name: ' نمونه کار ها', slug: '/#work' },
   { name: 'تعرفه ها', slug: '/#pricing' },
   // { name: 'وبلاگ', slug: '/#blog' },
   { name: 'تماس با ما', slug: '/contact-us' },
];

const Header = () => {
   const [isScroll, setIsScroll] = useState(0);
   const [mobileMenu, setMobileMenu] = useState(false);

   const mobileMenuHandler = () => {
      setMobileMenu(prev => !mobileMenu)
   };


   const changeStyle = () => {
      setIsScroll(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", changeStyle);
      return () => {
         window.removeEventListener("scroll", changeStyle);
      };
   }, []);

   return (
      <section className="header_area">
         <div className={`navbar-area bg-white ${isScroll && 'sticky'}`}>
            <div className="container relative">
               <div className="row items-center">
                  <div className="w-full">
                     <nav className="flex items-center justify-between py-3 navbar navbar-expand-lg">
                        <div className="absolute left-0 z-20 hidden w-full px-5 py-0 duration-300 bg-white lg:w-auto navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                           <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                              <Link href="/" className="navbar-brand flex items-center gap-3 text-theme-color text-3xl ml-12">
                                 {/* <span>&lt;Web/Studio&gt;</span> */}
                                 <img src="/logo.png" alt="Logo" className="w-[60px] md:w-[80px] object-contain" />
                                 <span>وب استودیو</span>
                              </Link>
                              {links.map((link) => (
                                 <li key={link.slug} className="nav-item ml-5 lg:ml-11">
                                    <Link className={`page-scroll`} href={link.slug}>{link.name}</Link>  {/* active */}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Mobile Menu */}
                        <button onClick={mobileMenuHandler} className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                        </button>

                        <Link href="/" className="lg:hidden navbar-brand flex items-center gap-3 text-theme-color font-sans text-3xl mr-5">
                           <img src="/logo.png" alt="Logo" className="w-[60px] md:w-[90px] object-contain" />
                        </Link>

                        <div className="hidden lg:block text-center">
                           <ul className="flex justify-center items-center sm:justify-start gap-6">
                              <li><Link target="_blank" href="https://instagram.com/webstudio.official/"><i className="lni lni-instagram-original text-lg hover:text-theme-color"></i></Link></li>
                              <li><Link href="tel:09981140432"><i className="lni lni-whatsapp text-lg hover:text-theme-color"></i></Link></li>
                              <li><Link href="mailto:webstudio.ir@gmail.com"><i className="lni lni-envelope text-lg hover:text-theme-color"></i></Link></li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <div className={`${mobileMenu ? 'lg:hidden' : 'hidden'} fixed z-20 right-0 bottom-0 h-full w-4/5 bg-slate-100 bg-blend-darken shadow-2xl transition duration-500`}>
            <div>
               <i onClick={mobileMenuHandler} className="lni lni-close text-3xl absolute left-0 top-0 pl-6 pt-4"></i>

               <ul id="nav" className="items-center content-start navbar-nav text-center mt-15">
                  {links.map((link) => (
                     <li key={link.slug} className="py-5 text-xl">
                        <Link onClick={mobileMenuHandler} className={`page-scroll`} href={link.slug}>{link.name}</Link>  {/* active */}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <Link href="#" className={isScroll ? 'scroll-top' : 'hidden'}><i className="lni lni-chevron-up"></i></Link>
      </section>
   )
}

export default Header