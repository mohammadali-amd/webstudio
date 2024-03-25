import Image from "next/image"

const HomePage = () => {
   return (
      <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
         <div className="hero_shape hidden lg:block shape_1">
            <i className="lni lni-nodejs text-5xl text-green-600"></i>
         </div>
         <div className="hero_shape hidden lg:block shape_2">
            <img src="/images/shape/shape-1.svg" alt="shape" />
         </div>
         <div className="hero_shape hidden lg:block shape_3">
            <i className="lni lni-javascript text-2xl "></i>
         </div>
         <div className="hero_shape hidden lg:block shape_4">
            <img src="/images/shape/shape-2.svg" alt="shape" />
         </div>
         <div className="hero_shape hidden lg:block shape_6">
            <img src="/images/shape/shape-3.svg" alt="shape" />
         </div>
         <div className="hero_shape hidden lg:block shape_7">
            <i className="lni lni-mongodb text-3xl text-green-500"></i>
         </div>
         <div className="hero_shape hidden lg:block shape_8">
            <img src="/images/shape/shape-4.svg" alt="shape" />
         </div>
         <div className="hero_shape hidden lg:block shape_9">
            <i className="lni lni-nextjs text-5xl text-stone-950"></i>
         </div>
         <div className="hero_shape hidden lg:block shape_10">
            <i className="lni lni-tailwindcss text-3xl text-cyan-400"></i>
         </div>
         <div className="hero_shape hidden lg:block shape_11">
            <img src="/images/shape/shape-1.svg" alt="shape" />
         </div>
         <div className="hero_shape hidden lg:block shape_12">
            <i className="lni lni-react text-4xl text-cyan-500"></i>
         </div>

         <div className="container">
            <div className="row">
               <div className="w-full lg:w-1/2">
                  <div className="header_hero_content pt-110 lg:pt-0">
                     <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                        طراحی وبسایت و ارائه خدمات دیجیتال در <span className="text-theme-color">وب استودیو</span>
                     </h2>
                     <p className="mt-8 lg:ml-8">
                        ما اینجا به شما کمک می کنیم تا کسب و کارتون رو دیجیتال کنید.
                        <br />
                        با ما از رقبایتان چند قدم جلوتر باشید!
                        <br />
                        برای ارتباط با ما میتونید از شبکه های اجتماعی و راه های ارتباطی در بخش تماس ها استفاده کنید...
                     </p>
                     <div className="hero_btn mt-10">
                        <a className="main-btn" href="#contact">راه های ارتباطی</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_shape hidden lg:block"></div>

         <div className="header_image flex items-center">
            <div className="md:pr-[7rem]">
               <Image
                  src="/images/hero-image.svg"
                  alt="Hero image"
                  width={600}
                  height={600}
                  priority
               />
            </div>
         </div>
      </div>
   )
}

export default HomePage