import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Full Name is required!')
        .min(1),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(1),
    password: yup
        .string()
        .trim()
        .required('Password is required!')
        .min(1),
    role_name: yup
        .string()
        .oneOf(['role'], 'Role is required!'),
})

export default formSchema;