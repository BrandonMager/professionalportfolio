import React from "react";

const Contact: React.FC = () => {

    return <div className="flex flex-col ustify-center items-center bg-black text-white">
    <div className="flex flex-col sm:flex-row mx-auto sm:w-1/2">
        <div className="flex flex-col mx-10 my-10 text-center text-md sm:text-left">
            <h1 className="text-4xl mb-4 font-medium text-white">Contact Us</h1>
            <p className="text-sm mb-16">Fill up the form and our Team will get back to you within 24 hours.</p>

            <p className="mb-5">Email: brandonsoto@magitechmedia.com</p>
            <p className="mb-5">Office Location: USA</p>
            <p className="mb-5">Subniches: SaaS, Mobile Games, Desktop Games, Apps</p>
        </div>

        <div className="flex flex-col my-10 mx-10 p-10 text-sm justify-center items-center text-black bg-white rounded-xl">
            <form name="contact" netlify>
                <h1 className="flex flex-col"><label className="mb-2 font-bold">Name</label><input type="text" name = "name" /></h1>
                <p className = "flex flex-col"><label className="mb-2 mt-1 font-bold">Email</label><input type="email" name = "email" /></p>
                            
                <p className="flex flex-col"><label className="mb-2 mt-1 font-bold">Message</label> <textarea rows = "4" cols = "20" name = "comment" className = "text-white p-2" form = "usrform">Enter text here ...</textarea></p>
                <p className="ml-1/2 mt-5 text-center"><button className = "bg-blue-300 p-3 rounded-md hover:text-white cursor" type = "submit">Send</button></p>

            </form>

        </div>
    </div>
    </div>
}

export default Contact