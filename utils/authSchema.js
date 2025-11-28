import * as Yup from 'yup';

const validationSchema= Yup.object().shape({
    email:Yup.string().required('Email is required.').email('Invalid Email formate.'),
    password:Yup.string().required('Password is required.').min(6,"Password must be of 6 characters.")
})

export default validationSchema