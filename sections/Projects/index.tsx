import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSProperties } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const team = [
   {
      id: '1',
      name: 'پروژه فول استک MERN',
      job: 'Room Booker',
      image: '/images/roombooker.jpg',
      website: '#',
      github: 'https://github.com/mohammadali-amd/MERN-Blog',
   },
   {
      id: '2',
      name: 'طراحی سایت آرامیکو',
      job: 'Aramico Company',
      image: '/images/arami-co.jpg',
      website: 'https://arami-co.com/',
      github: '#',
   },
   {
      id: '3',
      name: 'طراحی سایت آراد لیان',
      job: 'Alma Machine',
      image: '/images/alma.jpg',
      website: 'https://almamachine.com/',
      github: '#',
   },
   {
      id: '4',
      name: 'طراحی رابط کاربری UI/UX',
      job: 'HooBank',
      image: '/images/hoobank.jpg',
      website: 'https://hoo-bank.pages.dev/',
      github: 'https://github.com/mohammadali-amd/Modern-UI-UX-Website',
   },
   {
      id: '5',
      name: 'پروژه باشگاه بدنسازی',
      job: 'Fitness Club',
      image: '/images/fitness-club.jpg',
      website: 'https://gym-exercises.pages.dev/',
      github: 'https://github.com/mohammadali-amd/gym_exercises',
   },
   {
      id: '6',
      name: 'طراحی سایت آرامد',
      job: 'Aramed Health',
      image: '/images/aramed.jpg',
      website: 'https://aramedhealth.com/',
      github: '#',
   },
]

const Projects = () => {
   return (
      <section id="work" className="work_area bg-gray pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-ull lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">| نمونه کار های ما</h5>
                     <h4 className="main_title">با ما کسب و کار خود را بروز کنید</h4>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="work_wrapper relative">
               <div className="row work_active px-4 md:px-12">
                  <Swiper
                     style={{
                        '--swiper-navigation-color': 'teal',
                        '--swiper-navigation-size': '33px',
                        // '--swiper-pagination-color': '#000',
                     } as CSSProperties}
                     // spaceBetween={20}
                     slidesPerView={1}
                     breakpoints={{
                        720: {
                           slidesPerView: 2,
                        },
                        1025: {
                           slidesPerView: 4,
                        },

                     }}
                     autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                     }}
                     // onSlideChange={() => console.log('slide change')}
                     navigation={true}
                     // pagination={true}
                     modules={[Autoplay, Navigation, Pagination]}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                     {team.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="w-full px-2 group">
                              <div className="single_team_item mx-auto">
                                 <div className="single_team mx-3">
                                    <div className="team_image relative">
                                       <Image src={item.image} alt={item.name} className="w-full" loading='lazy' width={500} height={446} />
                                       <ul className="social absolute top-4 right-8">
                                          <li><a target='_blank' href={item.website}><i className="lni lni-link"></i></a></li>
                                          <li><a target='_blank' href={item.github}><i className="lni lni-github-original"></i></a></li>
                                       </ul>
                                    </div>
                                    <div className="team_content py-5 px-8 relative">
                                       <h4 className="team_name text-xl md:text-2xl"><a href="#" className="text-black group-hover:text-white">{item.name}</a></h4>
                                       <p className="mt-2 transition-all duration-300 group-hover:text-white">{item.job}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Projects