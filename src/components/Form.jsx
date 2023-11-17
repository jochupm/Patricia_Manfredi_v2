import React, { useState } from 'react'

const Form =()=> {

    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[phone, setPhone]= useState("")

    const handleSubmit=(e)=>{
e.preventDefault()

//validation
console.log(name, email, phone)
    }



    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={(e)=>setName(e.target.value)} />
                <input type="email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="phone" onChange={(e)=>setPhone(e.target.value)} />

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Form