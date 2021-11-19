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
        .min(5, '>= 5!!')
        .trim()
        .matches(/JoeBlow/, '')
        .required('Type Your Name!'),
    password: yup
        .string()
        .trim()
        .required('Valid Password!')
        .matches(
            /1234/, 'Must Submit A Valid Password!!'
        ),
    role_name: yup
        .string()
        .oneOf(['role'], 'Pick a Role!'),
})

export default formSchema;