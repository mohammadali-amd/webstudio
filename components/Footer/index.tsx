import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
   return (
      <footer id="footer" className="footer_area bg-teal-900 relative">
         {/* <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <img src="/images/footer-shape-left.png" alt="" />
         </div>
         <div className="shape absolute right-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <img src="/images/footer-shape-right.png" alt="" />
         </div> */}
         <div className="container">
            <div className="footer_widget pt-18 pb-120">
               <div className="row justify-center">
                  <div className="w-full md:w-1/2 lg:w-3/12">
                     <div className="footer_about mt-13 mx-3">
                        <div className="footer_logo">
                           <Link href="/">
                              <Image src="/logo.png" alt="Logo" className="w-[60px] md:w-[90px] object-contain" width={300} height={300} />
                           </Link>
                        </div>
                        <div className="footer_content mt-8">
                           <p className="text-white">
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-5/12">
                     <div className="footer_link_wrapper flex flex-wrap mx-3">
                        <div className="footer_link w-1/2 md:pr-13 mt-13">
                           <h2 className="footer_title text-xl font-semibold text-white">دسترسی سریع</h2>
                           <ul className="link pt-4">
                              <li><Link href="/#work" className="text-white mt-4 hover:text-theme-color">نمونه کار ها</Link></li>
                              <li><Link href="/#services" className="text-white mt-4 hover:text-theme-color">خدمات</Link></li>
                              <li><Link href="/#pricing" className="text-white mt-4 hover:text-theme-color">تعرفه ها</Link></li>
                           </ul>
                        </div>
                        <div className="footer_link w-1/2 md:pr-13 mt-13">
                           <h2 className="footer_title text-xl font-semibold text-white">وب استودیو</h2>
                           <ul className="link pt-4">
                              <li><Link href="/#about" className="text-white mt-4 hover:text-theme-color">درباره ما</Link></li>
                              <li><Link href="/contact-us" className="text-white mt-4 hover:text-theme-color">تماس با ما</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-2/3 lg:w-4/12">
                     <div className="footer_subscribe mt-13 mx-3">
                        <h2 className="footer_title text-xl font-semibold text-white">خبرنامه</h2>
                        <div className="subscribe_form text-right mt-9 relative">
                           <form action="#">
                              <input type="text" placeholder="ایمیل خود را وارد کنید..." className="w-full py-5 px-6 bg-white text-black rounded-full border-none" />
                              <button className="main-btn subscribe-btn">دنبال کردن</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
               <div className="footer_social pt-4 mx-3 text-center">
                  <ul className="social flex justify-center sm:justify-start">
                     <li className='ml-3'><Link href="mailto:webstudio.ir@gmail.com"><i className="lni lni-envelope"></i></Link></li>
                     <li className='ml-3'><Link href="tel:09981140432"><i className="lni lni-whatsapp"></i></Link></li>
                     <li className='ml-3'><Link target="_blank" href="https://instagram.com/webstudio.official/"><i className="lni lni-instagram-original"></i></Link></li>
                  </ul>
               </div>
               <div className="footer_copyright_content pt-4 text-center">
                  <p className="text-white">تمامی حقوق این سایت متعلق به <Link href="/" rel="nofollow" className="text-teal-500 hover:text-theme-color">وب استودیو</Link> می باشد.</p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer