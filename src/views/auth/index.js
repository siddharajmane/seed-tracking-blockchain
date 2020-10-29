import React from 'react'
import useForm from './useForm'
import RegisterForm from './RegisterForm'

const RegisterUser = ()=>{
    return <RegisterForm form={useForm()}/>
}

export default RegisterUser;