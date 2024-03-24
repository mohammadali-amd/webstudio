import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
   { name: 'صفحه اصلی', slug: '/#home' },
   { name: 'درباره ما', slug: '/#about' },
   { name: 'خدمات', slug: '/#services' },
   { name: ' نمونه کار ها', slug: '/#work' },
   { name: 'تعرفه ها', slug: '/#pricing' },
   // { name: 'وبلاگ', slug: '/#blog' },
   { name: 'تماس با ما', slug: '/#contact' },
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
                     <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                        <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                           <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
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


                        <Link href="/" className="navbar-brand mr-5">
                           <img src="/logo.png" alt="Logo" className="w-[60px] md:w-[90px] object-contain" />
                        </Link>
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