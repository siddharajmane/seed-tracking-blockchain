import React from 'react'
import useForm from './useForm'
import ProducerUIForm from './ProducerUIForm'

const ProducerForm = ()=>{
    return <ProducerUIForm form={useForm()}/>
}

export default ProducerForm;