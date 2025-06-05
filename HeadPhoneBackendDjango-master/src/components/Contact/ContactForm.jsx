import React from 'react';
import { toast, Bounce } from 'react-toastify';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };

    const onSubmit = (values, {resetForm}) => {
            console.log("onSubmit", values);
            resetForm()
            toast.success("Form Submitted", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            })
        };

    const validationSchema = Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().required('Email is required').email('Invalid email address'),
            phone: Yup.string()
            .required('Phone is required')
            .test('is-number', 'Invalid phone number', (value) => {
                // Check if the value is a valid number
                return !isNaN(Number(value));
                // The test method allows you to define a custom validation function. 
                // The first argument is a unique identifier for the test, 
                // and the second argument is the error message to be displayed if the test fails.
            }),
            message: Yup.string().required('Message is required'),
        });

return (
    <div className='flex justify-center mt-10'>
    <div className='contact-form bg-transparent rounded-xl shadow-lg py-5 px-10 text-white w-2/5 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/5 mx-auto'>
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit} 
    validationSchema={validationSchema}>  
        {() => 
        <Form className='flex flex-col space-y-4'>
        <div>
            <label htmlFor="name">Name</label><br />
            <Field className='form-input w-full rounded-md px-4 py-2 mt-3 outline-none bg-transparent' id="name" type="text" name="name" />
            <div className='error'>
                <ErrorMessage name='name' component='span' className='text-red-600'/>
            </div>
        </div>
        <div>
            <label htmlFor="email">Email</label><br />
            <Field className='form-input w-full rounded-md px-4 py-2 mt-3 outline-none bg-transparent' id="email" type="email" name="email"/>
            <div className='error'>
                <ErrorMessage name='email' component='span' className='text-red-600' />
            </div>
        </div>
        <div>
            <label htmlFor="phone">Phone number</label><br />
            <Field className='form-input w-full rounded-md px-4 py-2 mt-3 outline-none bg-transparent' id="phone" type="tel" name="phone"/>
            <div className='error'>
                <ErrorMessage name='phone' component='span' className='text-red-600' />
            </div>
        </div>
        <div>
            <label htmlFor="message">Your message</label><br />
            <Field
                as="textarea"
                className="form-input w-full rounded-md px-4 py-2 mt-3 outline-none bg-transparent"
                id="message"
                name="message"
                rows="6"
                />
            <div className='error'>
                <ErrorMessage name='message' component='span' className='text-red-600' />
            </div>
        </div>
        <button
        className='form-btn w-full p-3 text-lg capitalize rounded-lg text-white'
        type='submit'>Submit</button>
    </Form>
        } 
    
    </Formik>
    </div>
    </div>
);
};

export default ContactForm;


