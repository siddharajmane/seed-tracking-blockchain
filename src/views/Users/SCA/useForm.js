import web3 from "../../../web3"
import contract from "../../../contract"
import {useState} from "react";


const useForm = ()=>{
    const [form, setForm] = useState({});

    const onchange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log("Labformdata",form)

    const onsubmit = ()=>{
        console.log("Lab form submitted",form)
        web3.eth.getAccounts().then(res=>{
            console.log(res[0])
            contract.methods.setCertification(form.BatchNo,form.Certificate,form.date,form.Validity).send({
                from:res[0],gas:3000000
               }).then(function(res){
                 console.log(res)
               })
        }).catch(err=>{
            console.log(err)
        })
        alert("Lab form data submitted")
    }

    const registerFormValid = !form.BatchNo?.length ||
    !form.date?.length ||
    !form.Validity?.length ||
    !form.Certificate?.length

    return({form,onchange,onsubmit,registerFormValid})
}

export default useForm;