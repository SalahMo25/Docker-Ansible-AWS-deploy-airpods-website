import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useAuth } from '../../AppContexts/AuthContext';

const Signup = ({ onSignupSuccess }) => {
    const { signUp, currentUser } = useAuth();

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const onSubmit = async (values, { setSubmitting }) => {
        // console.log(values?.email , values?.password);
        
        setSubmitting(true);
        
        try{

            await signUp(values?.email, values?.password);
            // onSignupSuccess();
            console.log("sucess😂");
        }catch(err){
            setError("Failed to sign up");
            console.log(error);
        }

        // try {
        //     setError("");
        //     setLoading(true);
        //     await signUp(values?.email, values?.password);
        //     console.log("User signed up successfully");
        //     onSignupSuccess();
        //     navigate(location.state?.from || '/');
        // } catch {
        //     setError("Failed to sign up");
        //     console.log("Sign up failed");
        // }
        setLoading(false);
        setSubmitting(false);
    };
    
    useEffect(() => {
        console.log("user logged in:", currentUser?.email);
    }, [currentUser])

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Invalid email address'),
        phone: Yup.string()
            .required('Phone is required')
            .test('is-number', 'Invalid phone number', (value) => !isNaN(Number(value))),
        password: Yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("Password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm Password is required")
    });


    return (
        <div className="mt-24 p-10 flex justify-center">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Card className="sign-up p-8">
                        <Typography variant="h4" className="text-white">
                            Sign Up
                        </Typography>
                        <Typography className="text-white mt-1 font-normal">
                            Nice to meet you! Enter your details to register.
                        </Typography>
                        <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <div>
                                    <Typography variant="h6" className="text-white mb-3">
                                        Your Name
                                    </Typography>
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="Joe Doe"
                                        as={Input}
                                        size="lg"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    />
                                    <div className='error mt-1'>
                                        <ErrorMessage name='name' component='span' className='text-red-600' />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="h6" className="text-white mb-3">
                                        Phone Number
                                    </Typography>
                                    <Field
                                        name="phone"
                                        type="tel"
                                        placeholder="01xxxxxxxxxx"
                                        as={Input}
                                        size="lg"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    />
                                    <div className='error mt-1'>
                                        <ErrorMessage name='phone' component='span' className='text-red-600' />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="h6" className="text-white mb-3">
                                        Email
                                    </Typography>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="name@mail.com"
                                        as={Input}
                                        size="lg"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    />
                                    <div className='error mt-1'>
                                        <ErrorMessage name='email' component='span' className='text-red-600' />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="h6" className="text-white mb-3">
                                        Password
                                    </Typography>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="********"
                                        as={Input}
                                        size="lg"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    />
                                    <div className='error mt-1'>
                                        <ErrorMessage name='password' component='span' className='text-red-600' />
                                    </div>
                                </div>
                                <div>
                                    <Typography variant="h6" className="text-white mb-3">
                                        Confirm Password
                                    </Typography>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="********"
                                        as={Input}
                                        size="lg"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    />
                                    <div className='error mt-1'>
                                        <ErrorMessage name='confirmPassword' component='span' className='text-red-600' />
                                    </div>
                                </div>
                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        className="flex items-center font-normal text-white"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button type='submit' className="sign-btn mt-6" fullWidth disabled={loading || isSubmitting}>
                                Sign up
                            </Button>
                            <Typography className="mt-4 text-center font-normal text-gray-400">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-white">
                                    Sign In
                                </Link>
                            </Typography>
                        </Form>
                    </Card>
                )}
            </Formik>
        </div>
    );
}

export default Signup;


// Before Form Submission: setSubmitting(true) is called to set isSubmitting to true, 
// indicating that the form is currently being submitted. 
// This can be used to disable the submit button or show a loading spinner.
// After Form Submission: setSubmitting(false) is called to set isSubmitting to false, 
// indicating that the form has finished submitting. 
// This allows the form elements to be re-enabled.
