import web3 from "../../../web3"
import contract from "../../../contract"
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
       
    }
    console.log("SPA form",form)

    const onsubmit = ()=>{
        console.log("SPA form submitted",form)

        web3.eth.getAccounts().then(res=>{
            contract.methods.setBatchDetails(form.BatchID,form.Crop,form.Variety,form.SourceQuantity,form.date,form.Owner,form.Plot).send({
                from:res[0],gas:3000000
               }).then(function(res){
                 console.log(res)
               })
        })

       
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