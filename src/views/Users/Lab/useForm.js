
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("Labformdata",form)

    const onsubmit = ()=>{
        console.log("Lab form submitted",form)
        alert("Lab form data submitted")
    }

    const registerFormValid = !form.date?.length ||
    !form.Result?.length ||
    !form.BatchNo?.length

    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;