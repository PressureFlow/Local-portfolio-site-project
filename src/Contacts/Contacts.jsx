import React, { useState, useRef   } from 'react'
import { Formik } from 'formik';
import '../Contacts/Contacts.css'
import emailjs from '@emailjs/browser';

export default function Contacts() {


    const [show, setShow] = useState(false);
    const form = useRef();



    const sendEmail = () => {
        
    
        emailjs.sendForm('service_pz62aed', 'template_9b5i3l5', form.current, 'EMrOPUk9WqCKge-db')
          .then((result) => {
              console.log(result.text);
              console.log('Письмо отправлено на почту');    
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <section className='contacts'>

<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Поле с email постое!';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Некорректное значение для email!';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setShow(true)
        setSubmitting(false);
        sendEmail();
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form ref={form} onSubmit={handleSubmit} className='form-global-container'>
            


            <div className="form-container">
                <label htmlFor="">Введите вашу почту: </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
            {errors.email && touched.email && errors.email}
            </div>

            <div className="form-container">
                <label htmlFor="">Введите ваше сообщение: </label>
                    <textarea name="message" id="" cols="40" rows="5"></textarea>

            {errors.password && touched.password && errors.password}
            </div>

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           
         </form>
       )}
     </Formik>

     {show &&  <p> Данные успешно отправлены </p> }
    
    </section>
  )
}
