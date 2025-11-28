
export default function CTAS1() {


    return (

<div className="mt-8 flex justify-start">

            <a href="#start" className=" text-black bg-yellow-300 hover:bg-hover-primary hover:text-black hover:text-lg transition duration-300  border border-gray-500 rounded-md px-3 py-3 md:text-base "> Get started </a> 

            
        </div>
    )    
}

export function CTA2(){


    return (

        <li className="p-3">
        <a href="#start" className={`text-black bg-yellow-300 hover:bg-hover-primary hover:text-black hover:text-lg transition duration-300  border border-gray-500 rounded-md px-3 py-3 md:text-base`}> Get started </a> 
        
        </li>
    )
}

export function CTA3 (){


    return(

        <a href="#start" className="text-black bg-yellow-300 hover:bg-hover-primary hover:text-black hover:text-lg transition duration-300 max-w-40 border border-gray-500 rounded-md px-8 py-4 inline-block ">Free trial </a>

    )
}

export function CTA4 (){

    return (

        <a href="#start" className="text-black bg-yellow-300 hover:bg-hover-primary hover:text-black hover:text-lg transition duration-300 max-w-40 border border-gray-500 rounded-md px-8 py-4 inline-block ">Try it now </a>
    )
}


export function CTA5 (){


    return (

        <div className="flex justify-center"> 
        <button id="buttoncolor"
        type="submit" className="text-black bg-yellow-400 hover:bg-yellow-500 border border-yellow-500 rounded-lg px-10 py-4 text-lg font-bold shadow-md hover:shadow-xl transition duration-300">
        Start Free Trial

        </button>
        </div>
    )
}