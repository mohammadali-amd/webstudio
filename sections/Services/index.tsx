const servises = [
   {
      id: '1',
      title: 'طراحی سایت',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-layout',
   },
   {
      id: '2',
      title: 'دیجیتال مارکتینگ',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-bullhorn',
   },
   {
      id: '3',
      title: 'اپلیکیشن موبایل',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-mobile',
   },
   {
      id: '4',
      title: 'خدمات سئو',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-seo',
   },
   {
      id: '5',
      title: 'طراحی گرافیک',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-layers',
   },
   {
      id: '6',
      title: 'مشاوره کسب و کار',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      lineIcon: 'lni lni-briefcase',
   },
];

const Services = () => {
   return (
      <section id="services" className="services_area pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">ما در وب استودیو چکار میکنیم؟</h5>
                     <h4 className="main_title">خدمات ما</h4>
                  </div>
               </div>
            </div>
            <div className="row justify-center">
               {servises.map((service) => (
                  <div key={service.id} className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                     <div className="single_services text-center mt-8 mx-3">
                        <div className="services_icon">
                           <i className={`lni lni-${service.lineIcon}`}></i>
                           <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                              <path className="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                           </svg>
                        </div>
                        <div className="services_content mt-5 xl:mt-10">
                           <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">{service.title}</h3>
                           <p className="mt-4">{service.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Services;