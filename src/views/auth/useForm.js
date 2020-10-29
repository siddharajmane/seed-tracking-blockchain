import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});
    const[valid,setValid] = useState({
        Name:false,
        Location:false,
        Contact:false,
    })

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("registerformdata",form)

    const onsubmit = ()=>{
        console.log("register form submitted",form)
        alert("User created")
    }

    const registerFormValid = !form.Name?.length ||
    !form.Location?.length ||
    !form.Contact?.length ||
    !form.Address?.length



    const validation=()=>{
        if(!form.Name?.length){
            setValid({...valid,[form.Name]:true})
        }
    }


    return({form,onchange,onsubmit,validation, registerFormValid})
}

export default useForm;