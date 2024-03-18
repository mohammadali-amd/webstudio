import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const projects = [
   {
      id: '1',
      image: '/images/work-1.jpg',
      title: 'Project 1',
      description: 'Description 1',
   },
   {
      id: '2',
      image: '/images/work-2.jpg',
      title: 'Project 2',
      description: 'Description 2',
   },
   {
      id: '3',
      image: '/images/work-3.jpg',
      title: 'Project 3',
      description: 'Description 3',
   },
   {
      id: '4',
      image: '/images/work-4.jpg',
      title: 'Project 4',
      description: 'Description 4',
   },
   {
      id: '5',
      image: '/images/work-5.jpg',
      title: 'Project 5',
      description: 'Description 5',
   },
]

const Projects = () => {
   return (

      <section id="work" className="work_area bg-gray pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-ull lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">Works</h5>
                     <h4 className="main_title">Some of Our Recent Works</h4>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="work_wrapper relative">
               <div className="row work_active px-4 md:px-12">
                  <Swiper
                     style={{
                        '--swiper-navigation-color': '#000',
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
                     {projects.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="w-full px-2">
                              <div className="single_item mx-auto">
                                 <div className="single_work mx-3">
                                    <div className="work_image">
                                       <img src={item.image} alt={item.title} className="w-full" />
                                    </div>
                                    <div className="work_content">
                                       <a href="#" className="arrow"><i className="lni lni-chevron-right"></i></a>
                                       <h4 className="work_title text-xl md:text-2xl"><a href="#">{item.title}</a></h4>
                                       <p className="mt-2">{item.description}</p>
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