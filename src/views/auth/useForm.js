import {useState} from "react";
import contract from "../../contract"
import web3 from "../../web3"

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
        web3.eth.getAccounts().then(res=>{
            contract.methods.setUser(form.Address,form.Name,form.userType).send({
                 from : res[0],gas:3000000
                 }).then(function(result){
                   console.log(result)
             }) 
        })
        alert("User created")
    }

    const registerFormValid = !form.Name?.length ||
    !form.Address?.length



    const validation=()=>{
        if(!form.Name?.length){
            setValid({...valid,[form.Name]:true})
        }
    }


    return({form,onchange,onsubmit,validation, registerFormValid})
}

export default useForm;