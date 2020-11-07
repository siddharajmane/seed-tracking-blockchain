import React from 'react'
import useForm from './useForm'
import InspectorUIForm from './InspectorUIForm'

const InspectorForm = ()=>{
    return <InspectorUIForm form={useForm()}/>
}

export default InspectorForm;