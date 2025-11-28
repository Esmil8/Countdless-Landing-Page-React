import { images } from "../assets/images/images";

type FeaturesProps = {
    darkMode: boolean
}

export default function Features1 ({darkMode}: FeaturesProps) {


    return (

        <section className="py-16 md:grid-cols-2 ">

        <div className={`mx-auto grid grid-cols-3 sm:grid-cols-3 text-center px-6 items-center max-w-7xl`}>
            
            <figure className={`p-4 hover:shadow-xl rounded-xl transition ${darkMode? "bg-neutral-700 hover:shadow-2xl mx-2" : "bg-white"}`}>
            <img src={images.graphic} className="w-12 h-12 mx-auto mb-2" />
            <figcaption className="text-sm">+500 accounting reports generated</figcaption>
            </figure>

            <figure className={`p-4 hover:shadow-xl rounded-xl transition ${darkMode? "bg-neutral-700 hover:shadow-2xl mx-2" : "bg-white"}`}>
            <img src={images.target} className="w-12 h-12 mx-auto mb-2" />
            <figcaption className="text-sm">98% customer satisfaction</figcaption>
            </figure>

            <figure className={`p-4 hover:shadow-xl rounded-xl transition ${darkMode? "bg-neutral-700 hover:shadow-2xl mx-2" : "bg-white"}`}>
            <img src={images.personalsupport} className="w-12 h-12 mx-auto mb-2" />
            <figcaption className="text-sm">Personal support 24/7</figcaption>
            </figure>

        </div>
        
        </section>
    )
}