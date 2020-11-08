import web3 from "../../../web3"
import contract from "../../../contract"
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("Producerformdata",form)

    const onsubmit = ()=>{
        console.log("register form submitted",form)
        web3.eth.getAccounts().then(res=>{
            console.log(res[0])
            contract.methods.setProcessor(form.BatchID,form.TotalQuantity,form.date).send({
                from:res[0],gas:3000000
               }).then(function(res){
                 console.log(res)
               })
        }).catch(err=>{
            console.log(err)
        })
        alert("Producer form data submitted")
    }

    const registerFormValid = !form.BatchID?.length ||
    !form.TotalQuantity?.length ||
    !form.date?.length


    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;