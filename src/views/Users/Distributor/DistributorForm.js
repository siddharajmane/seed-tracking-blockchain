import React from 'react'
import useForm from './useForm'
import DistributorUIForm from './DistributorUIForm'

const DistributorForm = ()=>{
    return <DistributorUIForm form={useForm()}/>
}

export default DistributorForm;