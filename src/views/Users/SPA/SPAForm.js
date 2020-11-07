import React from 'react'
import useForm from './useForm'
import SPAUIForm from './SPAUIForm'

const InspectorForm = ()=>{
    return <SPAUIForm form={useForm()}/>
}

export default InspectorForm;