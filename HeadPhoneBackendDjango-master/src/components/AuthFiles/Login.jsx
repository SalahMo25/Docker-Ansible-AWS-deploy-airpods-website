import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useAuth } from '../../AppContexts/AuthContext';

const Login = ({ onSigninSuccess }) => {
    const { login, currentUser } = useAuth();
    const initialValues = {
        email: "",
        password: "",
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
            setError("");
            setLoading(true);
            await login(values.email, values.password);
            console.log("User signed in successfully");
            onSigninSuccess();
            navigate(location.state?.from || '/');
        } catch {
            setError("Failed to log in");
            console.log("Log in failed");
        }
        setLoading(false);
        setSubmitting(false);
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email address'),
        password: Yup.string().required('Password is required'),
    });

    useEffect(() => {
        if (currentUser) {
            console.log("User logged in:", currentUser.email);
        }
    }, [currentUser]);

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
                            Log In
                        </Typography>
                        <Typography className="text-white mt-1 font-normal">
                            Welcome Back!
                        </Typography>
                        <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
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
                            </div>
                            <Button type='submit' className="sign-btn mt-6" fullWidth disabled={loading || isSubmitting}>
                                Log In
                            </Button>
                            <Typography color="gray" className="mt-4 text-center text-gray-400 font-normal">
                                You Don't have an account?{" "}
                                <Link to="/signup" className="font-medium text-white">
                                    Sign Up
                                </Link>
                            </Typography>
                        </Form>
                    </Card>
                )}
            </Formik>
        </div>
    );
};

export default Login;
