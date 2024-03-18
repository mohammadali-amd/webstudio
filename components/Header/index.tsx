import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
   { name: 'صفحه اصلی', slug: '/#home' },
   { name: 'درباره ما', slug: '/#about' },
   { name: 'خدمات', slug: '/#services' },
   { name: ' نمونه کار ها', slug: '/#work' },
   { name: 'تعرفه ها', slug: '/#pricing' },
   { name: 'وبلاگ', slug: '/#blog' },
   { name: 'تماس با ما', slug: '/#contact' },
];

const Header = () => {
   const [isScroll, setIsScroll] = useState(0);

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
                                    <a className={`page-scroll`} href={link.slug}>{link.name}</a>  {/* active */}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <Link href="/" className="navbar-brand mr-5">
                           <img src="/images/logo.svg" alt="Logo" />
                        </Link>
                        <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                        </button>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <a href="#" className={isScroll ? 'scroll-top' : ''}><i className="lni lni-chevron-up"></i></a>
      </section>
   )
}

export default Header