
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("SPA form",form)

    const onsubmit = ()=>{
        console.log("SPA form submitted",form)
        alert("SPA form data submitted")
    }

    const registerFormValid = !form.BatchID?.length ||
    !form.Crop?.length ||
    !form.date?.length ||
    !form.Variety?.length ||
    !form.SourceQuantity?.length ||
    !form.Owner?.length ||
    !form.Plot?.length


    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;