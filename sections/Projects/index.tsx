import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const team = [
   {
      id: '1',
      name: 'Chris Dave',
      job: 'Founder and CEO',
      image: '/images/team-1.jpg',
   },
   {
      id: '2',
      name: 'Sarah Doe',
      job: 'UI Designer',
      image: '/images/team-2.jpg',
   },
   {
      id: '3',
      name: 'Rob Hope',
      job: 'Sofwate Engeneer',
      image: '/images/team-3.jpg',
   },
   {
      id: '4',
      name: 'Micheal Jordan',
      job: 'Business Development Manager',
      image: '/images/team-5.jpg',
   },
   {
      id: '4',
      name: 'Micheal Jordan',
      job: 'Business Development Manager',
      image: '/images/team-1.jpg',
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
                        '--swiper-navigation-size': '40px',

                        // '--swiper-pagination-color': '#000',
                     }}
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
                     onSlideChange={() => console.log('slide change')}
                     navigation={true}
                     // pagination={true}
                     modules={[Navigation, Pagination]}
                     onSwiper={(swiper) => console.log(swiper)}
                  >
                     {team.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="w-full px-2 group">
                              <div className="single_team_item mx-auto">
                                 <div className="single_team mx-3">
                                    <div className="team_image relative">
                                       <img src={item.image} alt={item.name} className="w-full" />
                                       <ul className="social absolute top-4 right-8">
                                          <li><a href="#"><i className="lni lni-instagram-fill"></i></a></li>
                                          <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                          <li><a href="#"><i className="lni lni-envelope"></i></a></li>
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