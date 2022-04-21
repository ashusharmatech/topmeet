import React from 'react'

let membersList = [
    {id:1, name: "Gurmit Singh", post: "General Manager APAC", company: "Quora", photo: "https://randomuser.me/api/portraits/men/10.jpg" },
    {id:2, name: "Neeraj Arora", post: "Co-Founder", company: "Venture Highway", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
    {id:3, name: "Louis Graham", post: "General Manager APAC", company: "Google", photo: "https://randomuser.me/api/portraits/women/3.jpg" },
    {id:4, name: "Mikki Orchard", post: "Paradise Court", company: "Amazon", photo: "https://randomuser.me/api/portraits/women/4.jpg" },
    {id:5, name: "Neeraj Arora", post: "Co-Founder", company: "Venture Highway", photo: "https://randomuser.me/api/portraits/men/11.jpg" },
    {id:6, name: "Louis Graham", post: "General Manager APAC", company: "Google", photo: "https://randomuser.me/api/portraits/women/43.jpg" },
    {id:7, name: "Mikki Orchard", post: "Paradise Court", company: "Amazon", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
];

const ImportantMember = () => {
    return (
        <div className="container mx-auto flex flex-wrap justify-center pb-12">
            <h2 className="w-full my-2 text-4xl font-black leading-tight text-center text-gray-800 lg:mt-8 py-12">
                Say hello to our members
            </h2>
            <div className="grid grid-cols-4 gap-12 place-content-center">
                {
                    membersList.map((member) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={member.id}>
                            <img className="rounded-full w-full hover:border-2" src={member.photo} alt="User Image"></img>
                            <div className="font-bold text-xl mb-2">{member.name}</div>
                            <div className='text-gray-700 text-base'>
                                <h4>{member.post}</h4>
                                <p>{member.company}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImportantMember