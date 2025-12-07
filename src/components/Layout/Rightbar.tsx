import React from 'react';

const Rightbar: React.FC = () => {
    const contacts = [
        { name: "Chris Brown", image: "/images/Chris Brown.jpeg", online: true },
        { name: "Justin Bieber", image: "/images/Justin bieber.jpg", online: true },
        { name: "Rihanna", image: "/images/Rihanna.jpeg", online: true },
        { name: "The Kid Laroi", image: "/images/The kid laroi.jpeg", online: false },
        { name: "Drake", image: "/images/drake_profile.jpg", online: true },
        { name: "Travis Scott", image: "/images/travis_profile.jpg", online: false },
    ];

    return (
        <div className="w-[300px] p-4 hidden lg:block sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 right-0">
            <div className="flex items-center justify-between text-facebook-text-secondary mb-4">
                <span className="font-semibold text-[17px]">Sponsored</span>
            </div>

            <div className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
                <img className="w-[120px] h-[70px] rounded-lg object-cover" src="https://picsum.photos/200/300?random=10" alt="ad" />
                <div className="flex flex-col">
                    <span className="font-semibold text-[15px] text-facebook-text-primary">E-commerce Course</span>
                    <span className="text-[13px] text-facebook-text-secondary">example.com</span>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
                <img className="w-[120px] h-[70px] rounded-lg object-cover" src="https://picsum.photos/200/300?random=11" alt="ad" />
                <div className="flex flex-col">
                    <span className="font-semibold text-[15px] text-facebook-text-primary">Best Coding Bootcamp</span>
                    <span className="text-[13px] text-facebook-text-secondary">bootcamp.com</span>
                </div>
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex items-center justify-between text-facebook-text-secondary mb-2">
                <span className="font-semibold text-[17px]">Contacts</span>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>

            <ul className="space-y-2">
                {contacts.map((contact, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                        <div className="relative">
                            <img className="w-8 h-8 rounded-full object-cover" src={contact.image} alt={contact.name} />
                            {contact.online && (
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute bottom-0 right-0 border border-white"></div>
                            )}
                        </div>
                        <span className="font-medium text-[15px]">{contact.name}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Rightbar;
