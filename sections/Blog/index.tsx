import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
   return (
      <section id="blog" className="blog_area pt-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">Blog</h5>
                     <h4 className="main_title">From The Blog</h4>
                  </div>
               </div>
            </div>
            <div className="row justify-center lg:justify-start">
               <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                  <div className="single_blog mx-6 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                     <div className="blog_image">
                        <Image src="/images/blog-1.jpg" alt="blog" className="w-full" width={500} height={500} />
                     </div>
                     <div className="blog_content p-4 md:p-5">
                        <ul className="blog_meta flex justify-between">
                           <li className="text-body-color text-sm md:text-base">By: <Link href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</Link></li>
                           <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                        </ul>
                        <h3 className="blog_title"><Link href="#">How to track your business revenue</Link></h3>
                        <Link href="#" className="more_btn">Read More</Link>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                  <div className="single_blog mx-6 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                     <div className="blog_image">
                        <Image src="/images/blog-2.jpg" alt="blog" className="w-full" width={500} height={500} />
                     </div>
                     <div className="blog_content p-4 md:p-5">
                        <ul className="blog_meta flex justify-between">
                           <li className="text-body-color text-sm md:text-base">By: <Link href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</Link></li>
                           <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                        </ul>
                        <h3 className="blog_title"><Link href="#">Improving products depending on feedback</Link></h3>
                        <Link href="#" className="more_btn">Read More</Link>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
                  <div className="single_blog mx-6 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                     <div className="blog_image">
                        <Image src="/images/blog-3.jpg" alt="blog" className="w-full" width={500} height={500} />
                     </div>
                     <div className="blog_content p-4 md:p-5">
                        <ul className="blog_meta flex justify-between">
                           <li className="text-body-color text-sm md:text-base">By: <Link href="#" className="text-body-color hover:text-theme-color">Musharof Chowdury</Link></li>
                           <li className="text-body-color text-sm md:text-base">15 June 2024</li>
                        </ul>
                        <h3 className="blog_title"><Link href="#">How to diversify your audience</Link></h3>
                        <Link href="#" className="more_btn">Read More</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Blog