import Image from "next/image";
import Link from "next/link"
import { useForm } from 'react-hook-form';

const ContactUs = () => {
   const { register, trigger, formState: { errors } } = useForm();

   const onSubmit = async (e: any) => {
      const isValid = await trigger();
      if (!isValid) {
         e.preventDefault();
      }
   };

   return (
      <section id="contact" className="contact_area relative pt-25 mt-6 pb-120">
         <div className="contact_image flex items-center justify-end">
            <div className="image lg:pl-13">
               <Image src="/images/contact-pic.jpg" alt="contact us" width={500} height={500} />
            </div>
         </div>

         <div className="container">
            <div className="row justify-end">
               <div className="w-full lg:w-1/2">
                  <div className="contact_wrapper mt-11">
                     <div className="section_title pb-4">
                        <h5 className="sub_title">| تماس با ما</h5>
                        <h4 className="main_title">راه های ارتباطی با ما</h4>
                        <div className="pt-12 pl-8 space-y-12 lg:space-y-0 xl:flex lg:justify-between">
                           {/* Instagram */}
                           <Link target="_blank" href="https://instagram.com/webstudio.official/" className="grid justify-items-center" rel="noreferrer">
                              <i className="lni lni-instagram text-3xl"></i>
                              <span className="text-lg mt-3">webstudio.official</span>
                           </Link>
                           {/* Whatsapp */}
                           <Link target="_blank" href="tel:09981140432" className="grid justify-items-center" rel="noreferrer">
                              <i className="lni lni-whatsapp text-3xl"></i>
                              <span className="text-lg mt-3">09981140432</span>
                           </Link>
                           {/* Email */}
                           <Link target="_blank" href="mailto:webstudio.ir@gmail.com" className="grid justify-items-center" rel="noreferrer">
                              <i className="lni lni-envelope text-3xl"></i>
                              <span className="text-lg mt-3">webstudio.ir@gmail.com</span>
                           </Link>
                        </div>
                     </div>

                     <div className="contact_form">
                        <form
                           target="_blank"
                           onSubmit={onSubmit}
                           id="contact-form"
                           action="https://formsubmit.co/webstu.ir@gmail.com"
                           method="POST"
                        >
                           <div className="row">
                              <div className="w-full md:w-1/2">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <input
                                          id="name"
                                          type="text"
                                          placeholder="نام شما"
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                          {...register('name', {
                                             required: true,
                                             maxLength: 30,
                                          })}
                                       />
                                       {errors.name && (
                                          <p className="mt-1 text-red-500">
                                             {errors.name.type === 'required' && 'پر کردن این بخش الزامیست!'}
                                             {errors.name.type === 'maxLength' && 'حداکثر 100 کاراکتر مجاز هستید وارد کنید.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full md:w-1/2">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <input
                                          id="email"
                                          type="email"
                                          placeholder="ایمیل"
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                          {...register('email', {
                                             required: true,
                                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          })}
                                       />
                                       {errors.email && (
                                          <p className="mt-1 text-red-500">
                                             {errors.email.type === 'required' && 'پر کردن این بخش الزامیست!'}
                                             {errors.email.type === 'pattern' && 'ایمیل وارد شده اشتباه است.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <textarea
                                          id="message"
                                          placeholder="متن مورد نظر خود را بنویسید..."
                                          rows={5}
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"
                                          {...register('message', {
                                             required: true,
                                             maxLength: 200,
                                          })}
                                       />
                                       {errors.message && (
                                          <p className="text-red-500">
                                             {errors.message.type === 'required' && 'پر کردن این بخش الزامیست!'}
                                             {errors.message.type === 'maxLength' && 'حداکثر 200 کاراکتر مجاز هستید وارد کنید.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <p className="form-message mx-3"></p>
                              <div className="w-full">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <button type="submit" className="main-btn contact-btn">ارسال</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactUs