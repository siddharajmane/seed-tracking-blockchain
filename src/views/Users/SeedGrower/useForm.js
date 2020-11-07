
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("SG form",form)

    const onsubmit = ()=>{
        console.log("SG form submitted",form)
        alert("SG form data submitted")
    }

    const registerFormValid = !form.BatchNo?.length

    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;