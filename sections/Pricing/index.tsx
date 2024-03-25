import React from 'react'

const Pricing = () => {
   return (
      <section id="pricing" className="pricing_area pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">| تعرفه ها</h5>
                     <h4 className="main_title">پلن مورد نیاز خود را انتخاب کنید</h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="w-full">
                  <div className="pricing_content mt-6_area">
                     <div className="tab-content">
                        <div className="active tab-pane" id="monthlyPlan" data-tab-content>
                           <div className="row justify-center">
                              <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 group">
                                 <div className="single_pricing text-center mt-8 mx-3">
                                    <div className="pricing_title relative inline-block">
                                       <h4 className="title group-hover:text-white">اقتصادی</h4>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                                          <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f" />
                                       </svg>
                                    </div>
                                    <div className="pricing_content mt-6">
                                       <p className="pricing_price font-bold text-black text-3xl pb-5">
                                          وبسایت شخصی/وبلاگ
                                       </p>
                                       <span className="pricing_price font-bold text-black/80 text-xl">بین 8 تا 14 میلیون تومان</span>
                                       <ul className="about_list pt-3">
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   دامنه رایگان ir
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   پشتیبانی رایگان برای مدت 6 ماه
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی قالب اختصاصی
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی کاملا ریسپانسیو و واکنش گرا
                                                </p>
                                             </div>
                                          </li>
                                       </ul>
                                       <a href="" className="main-btn pricing_btn">انتخاب پلن</a>
                                    </div>
                                 </div>
                              </div>

                              <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12">
                                 <div className="single_pricing text-center mt-8 mx-3 active">
                                    <div className="pricing_title relative inline-block">
                                       <h4 className="title group-hover:text-white">پیشنهادی</h4>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                                          <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f" />
                                       </svg>
                                    </div>
                                    <div className="pricing_content mt-6">
                                       <p className="pricing_price font-bold text-black text-4xl pb-5">
                                          وبسایت فروشگاهی
                                       </p>
                                       <span className="pricing_price font-bold text-black/80 text-xl">بین 12 تا 20 میلیون تومان</span>
                                       <ul className="about_list pt-3">
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check_active">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   دامنه رایگان ir
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check_active">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   پشتیبانی رایگان برای مدت 6 ماه
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check_active">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی قالب اختصاصی
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check_active">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی کاملا ریسپانسیو و واکنش گرا
                                                </p>
                                             </div>
                                          </li>
                                       </ul>
                                       <a href="" className="main-btn pricing_btn">انتخاب پلن</a>
                                    </div>
                                 </div>
                              </div>

                              <div className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 group">
                                 <div className="single_pricing text-center mt-8 mx-3">
                                    <div className="pricing_title relative inline-block">
                                       <h4 className="title group-hover:text-white">پیشرفته</h4>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110">
                                          <path className="services_shape" id="Polygon_15" data-name="Polygon 15" d="M51.2,2.329a11,11,0,0,1,9.6,0L96.15,19.478a11,11,0,0,1,5.927,7.466l8.76,38.665a11,11,0,0,1-2.1,9.258l-24.508,30.96A11,11,0,0,1,75.6,110H36.4a11,11,0,0,1-8.625-4.173L3.266,74.867a11,11,0,0,1-2.1-9.258l8.76-38.665a11,11,0,0,1,5.927-7.466Z" fill="#f94f4f" />
                                       </svg>
                                    </div>
                                    <div className="pricing_content mt-6">
                                       <p className="pricing_price font-bold text-black text-4xl pb-5">
                                          وبسایت شرکتی
                                       </p>
                                       <span className="pricing_price font-bold text-black/80 text-xl">از 18 میلیون تومان</span>
                                       <ul className="about_list pt-3">
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   دامنه رایگان ir
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   پشتیبانی رایگان برای مدت 6 ماه
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی قالب اختصاصی
                                                </p>
                                             </div>
                                          </li>
                                          <li className="flex items-center mt-3">
                                             <div className="pricing_check">
                                                <i className="lni lni-checkmark-circle"></i>
                                             </div>
                                             <div className="pr-3">
                                                <p>
                                                   طراحی کاملا ریسپانسیو و واکنش گرا
                                                </p>
                                             </div>
                                          </li>
                                       </ul>
                                       <a href="" className="main-btn pricing_btn">انتخاب پلن</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}

export default Pricing