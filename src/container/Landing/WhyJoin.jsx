import React from 'react'


let whyList = [
    {id:1, name: "Curated network", description: "Every member is invited by us or has to clear our application process.", icon: "" },
    {id:2, name: "Relationship Manager", description: "Every member will be assigned a personal relationship manager you can reach out to.", icon: "" },
    {id:3, name: "Video meetings", description: "Connect with other members using our live video meetings", icon: "" },
    {id:4, name: "Online Chat", description: "A personal Rolodex of all your connections and the conversation with them in one place.", icon: "" },
    {id:5, name: "No Spam", description: "Other members cannot DM or email you directly. They can only express their interest in meeting you to us.", icon: "" },
    {id:6, name: "Manage Availability", description: "When you are just swamped with work or personal stuff., feel free to snooze CoffeeMug; we will not disturb you.", icon: "" },

];


const WhyJoin = () => {
    return (

        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">---</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Why join Topmeet?</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"></p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        {
                            whyList.map((item) => (

                                <div className="relative" key={item.id}>
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                </div>

                            ))
                        }
                    </dl>
                </div>


            </div>
        </div>
    )
}

export default WhyJoin