
import { images } from "../assets/images/images"
import CTAS1, { CTA3, CTA4,} from "./CTAS"
import Features1 from "./Features"

import Testimonials from "./Testimonials"

type HeroProps = {
    darkMode: boolean;
}

export default function Hero({darkMode}: HeroProps) { 





return (

    <main className="flex flex-col p-2 mt-2" aria-labelledby="hero-title">

<section className="w-full ">

    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> 

        <div className=""> 
        
        <h1 id="hero-title" className="font-bold text-3xl sm:text-4xl md:text-5xl text-start leading-tight py-4 mb-4 max-w-2xl ">Struggling with taxes?
            Manage your finances without being an accountant</h1>

            <p className={`font-sans text-gray-700 max-w-md text-start ${darkMode? "text-gray-300" : "text-gray-600"}`}>Let Countdless handle your taxes, invoices and reports while you focus on growing your business.</p>
        
        <div className="font-extrabold text-sm mt-4 flex flex-col gap-1 ">
            <p>Trusted by freelancers and small busineses</p>
            
        </div>

        <Testimonials></Testimonials>

        <CTAS1></CTAS1>

        <Features1 darkMode = {darkMode}></Features1>


        </div>


        <div className="order-1 md:order-2 flex justify-center md:justify-end">

        <img src={images.economicgrow} alt="Person helping" className="w-full h-auto max-w-md mb-6 md:mb-0"/>

        </div>
        

    </div>
    </section>



    <section className="py-40">

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 ">

        <img src={images.Report} alt="Person analizing a graphic" loading="lazy" className="w-full h-auto max-w-xs md:max-w-md mx-auto md:mx-0 order-1 md:order-1"/>
        <div className="flex flex-col md:text-left md:order-2 order-1 mx-auto px-0">
        <h2 className="font-extrabold text-4xl max-w-max py-10 lg:text-5xl">Automate your reports in seconds</h2>
        <p className="font-sans max-w-md mx-auto md:mx-0 mb-6"> Upload invoices and see your finances organized instantly. Save hours every week.</p>

        <CTA3></CTA3>
        </div>

    </div>

    </section>



<section className="py-40">

    <div className="flex flex-col md:flex-row max-w-7xl items-center mx-auto space-y-8 md:space-y-0 md:space-x-12">


    <div className="flex flex-col md:text-left md:order-2 order-1 mx-auto px-0 "> 
        <h2 className="font-extrabold text-4xl lg:text-5xl max-w-max mb-8"> Never miss a tax deadline again. </h2>
        <p className="font-sans mx-auto max-w-md md:mx-0 mb-6">We remind you before every tax date, generate reports, and keep your documents safe in the cloud </p>
        <CTA4></CTA4>
    </div>
    <img src={images.Finance} alt="A person with a calculator" loading="lazy" className="w-full h-auto max-w-xl mx-auto md:mx-0 order-1 md:order-2"/>
    </div>
    
    
</section>
</main>

)
}