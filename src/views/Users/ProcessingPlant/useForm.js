
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("Producerformdata",form)

    const onsubmit = ()=>{
        console.log("register form submitted",form)
        alert("Producer form data submitted")
    }

    const registerFormValid = !form.BatchID?.length ||
    !form.TotalQuantity?.length ||
    !form.date?.length


    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;