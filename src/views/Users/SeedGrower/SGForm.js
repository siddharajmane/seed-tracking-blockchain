import React from 'react'
import useForm from './useForm'
import SGUIForm from './SGUIForm'

const SGForm = ()=>{
    return <SGUIForm form={useForm()}/>
}

export default SGForm;