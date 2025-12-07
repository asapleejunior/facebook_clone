import React from 'react';

const StoryReel: React.FC = () => {
    const stories = [
        {
            image: "/images/asap_profile.png",
            profileSrc: "/images/asap_profile.png",
            title: "Create Story",
            isUser: true
        },
        {
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            profileSrc: "https://randomuser.me/api/portraits/women/1.jpg",
            title: "Anna Smith"
        },
        {
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            profileSrc: "https://randomuser.me/api/portraits/men/32.jpg",
            title: "Mark Tech"
        },
        {
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            profileSrc: "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Sarah J."
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
            profileSrc: "https://randomuser.me/api/portraits/men/65.jpg",
            title: "David B."
        }
    ];

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-6 justify-start md:justify-center">
            {stories.map((story, index) => (
                <div key={index} className="relative w-[110px] h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-md shrink-0 group hover:scale-[1.02] transition-transform duration-200">
                    <img
                        className={`w-full h-full object-cover ${story.isUser ? 'h-[75%] object-top' : 'brightness-75 group-hover:brightness-100'}`}
                        src={story.image}
                        alt={story.title}
                    />

                    {story.isUser ? (
                        <div className="absolute bottom-0 w-full h-[25%] bg-white flex flex-col items-center justify-end pb-2">
                            <div className="w-8 h-8 bg-facebook-blue rounded-full absolute -top-4 border-4 border-white flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <span className="text-[13px] font-semibold text-black">{story.title}</span>
                        </div>
                    ) : (
                        <>
                            <img
                                className="absolute top-4 left-4 w-9 h-9 rounded-full border-4 border-facebook-blue object-cover"
                                src={story.profileSrc}
                                alt="avatar"
                            />
                            <span className="absolute bottom-3 left-3 text-white font-semibold text-[13px] break-words">{story.title}</span>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StoryReel;
