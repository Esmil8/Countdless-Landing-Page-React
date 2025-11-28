import React, { useState } from "react"

type FormProps = {

    darkMode: boolean
}

export default function Form1({darkMode}: FormProps) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [isSend, setIsSend] = useState(false)

    const HanddleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        console.log( 'Name', name)
        console.log( 'Email', email)

        setIsSend(true)

        setTimeout(() => {
            setIsSend(false)
        },4000)

    }
    


    return (


<section className="py-20 w-full" id="start">

<div className="mx-auto px-6 max-w-3xl">

    <form className="border border-gray-200 rounded-2xl shadow-lg flex flex-col mx-auto p-10 gap-8" onSubmit={HanddleSubmit}>

    <div className="flex flex-col w-full">
        <label htmlFor="name" className={`text-gray-700 font-semibold mb-1 text-lg2 ${darkMode? "text-white" : "text-gray-700"}`}> Name</label>

        <input onChange={(e) => setName(e.target.value)} type="text" id="name" value={name} name="name" placeholder="Your name" aria-describedby="error-name" minLength={5} maxLength={30}  required className="border border-gray-300 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition"/>

        <span aria-live="polite" id="error-name" className="mt-2 text-sm text-red-600 hidden"></span>
    </div>


    <div className="flex flex-col w-full">
        <label htmlFor="email" className={`font-semibold mb-1 text-lg ${darkMode? "text-white" : "text-gray-700"}`}> Email </label>

        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" value={email} name="email" placeholder="example@email.com" aria-describedby="error-email" required 
        className="border border-gray-300 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-400 transition"/>

        <span aria-live="polite" id="error-email" className="mt-2 text-sm text-red-600 hidden"></span>

    </div>
    <div className="flex justify-center">
    
        <div className="flex justify-center"> 

        <button id="buttoncolor"
        type="submit" className={` ${isSend? "bg-green-600 text-white hover:bg-green-800" : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"} border border-yellow-500 rounded-lg px-10 py-4
            text-lg font-bold shadow-md hover:shadow-xl transition duration-300`}> {isSend? "Submited" : "Start Free Trial"}
        

        </button>
        </div>
    
        </div>
    </form>

</div>
</section>

    )
}