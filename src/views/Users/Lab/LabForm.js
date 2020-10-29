import React from 'react'
import useForm from './useForm'
import LabUIForm from './LabUIForm'

const LabForm = ()=>{
    return <LabUIForm form={useForm()}/>
}

export default LabForm;