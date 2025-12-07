import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-[300px] p-4 hidden lg:block sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300">
            <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <img className="w-8 h-8 rounded-full object-cover" src="/images/asap_profile.png" alt="profile" />
                    <span className="font-medium text-[15px]">A$AP</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span className="font-medium text-[15px]">Friends</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 5.223m0 0a9.093 9.093 0 0 0-3.746.478 3 3 0 0 0 4.682 2.72m.943-3.204A14.953 14.953 0 0 1 12 10.5c2.141 0 4.166.54 5.943 1.504M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="font-medium text-[15px]">Groups</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                    <span className="font-medium text-[15px]">Marketplace</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    <span className="font-medium text-[15px]">Watch</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="font-medium text-[15px]">Memories</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <span className="font-medium text-[15px]">See more</span>
                </li>
            </ul>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="text-lg font-semibold text-gray-500 mb-2 px-2">Your Shortcuts</div>
            <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <img className="w-8 h-8 rounded-lg object-cover" src="/images/drake_concert_fan.jpg" alt="Drake" />
                    <span className="font-medium text-[15px]">Drake Concert Fans</span>
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02]">
                    <img className="w-8 h-8 rounded-lg object-cover" src="/images/travis_scott_live.jpg" alt="Travis" />
                    <span className="font-medium text-[15px]">Travis Scott Live</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
