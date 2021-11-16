import * as yup from 'yup';

const formSchema = yup.object().shape({
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
})

export default formSchema;
