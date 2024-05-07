import * as yup from 'yup'

export  const FormSchema=yup.object().shape({
    name:yup.string().min(5).required('Enter your name'),
    email:yup.string().email().required('Enter a valid email'),
    password:yup.string().min(5).max(10).required("Password should be atleast 5 characters"),
    confirmPassowrd:yup.string().oneOf([yup.ref("password")], "Passwords did not match")
})