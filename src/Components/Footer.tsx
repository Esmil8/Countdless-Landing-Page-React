
export default function Footer() {


    return ( 

<footer className="py-10 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6"> 
        
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8"> 

            <a href="#about" 
        className="text-gray-600 hover:text-gray-900 mb-2 md:mb-0 text-sm font-medium">About Us</a>

            <a href="#privacy" 
            className="text-gray-600 hover:text-gray-900 mb-2 md:mb-0 text-sm font-medium">Privacy Policy</a>

            <a href="#terms" 
            className="text-gray-600 hover:text-gray-900 text-sm font-medium">Terms of Service</a>
        </div>
        
        <div className="text-center mt-6 text-gray-400 text-xs">
            &copy; 2025 Countdless Landing Page. All rights reserved.
        </div>

    </div>
</footer>

)}