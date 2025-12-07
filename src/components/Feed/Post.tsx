import React from 'react';

interface PostProps {
    profilePic: string;
    image?: string;
    username: string;
    timestamp: string;
    message: string;
}

const Post: React.FC<PostProps> = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-4">
            {/* Header */}
            <div className="flex items-center p-3 mb-1">
                <img className="w-10 h-10 rounded-full object-cover mr-2.5" src={profilePic} alt="Author" />
                <div className="">
                    <h3 className="font-semibold text-[15px] hover:underline cursor-pointer">{username}</h3>
                    <div className="flex items-center text-gray-500 text-[13px]">
                        <p>{timestamp}</p>
                        <span className="mx-1">·</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="ml-auto p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>

            {/* Message */}
            <div className="px-4 pb-2 text-[15px]">
                <p>{message}</p>
            </div>

            {/* Image */}
            {image && (
                <div className="w-full cursor-pointer">
                    <img src={image} alt="" className="w-full object-cover" />
                </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2">

                <div className="flex items-center justify-between text-gray-500 text-[14px] border-b border-gray-200 pb-2">
                    <div className="flex items-center gap-1 cursor-pointer hover:underline">
                        <div className="bg-blue-500 rounded-full p-1 w-4.5 h-4.5 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-white">
                                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c.086-1.277.586-2.502 1.488-3.416.902-.914 2.139-1.414 3.417-1.498 1.278.084 2.514.584 3.416 1.498.902.914 1.402 2.139 1.488 3.416.14.739-.247 1.574-.933 1.944a1.751 1.751 0 0 1-2.316-.279l-4.24-4.24a.2.2 0 0 0-.28 0l-4.24 4.24a1.748 1.748 0 0 1-2.317.279ZM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                {/* Simplified thumb icon for size */}
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                            </svg>
                            <span className="text-white text-[10px]">👍</span>
                        </div>
                        <span className="">124</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="cursor-pointer hover:underline">10 comments</span>
                        <span className="cursor-pointer hover:underline">5 shares</span>
                    </div>
                </div>

                <div className="flex items-center justify-evenly pt-1">
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg text-gray-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        <span>Like</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg text-gray-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.698 9-8.25s-4.03-8.25-9-8.25S3 7.402 3 11.95c0 2.409.91 4.633 2.414 6.256A9.774 9.774 0 0 1 5.922 21c-.496.883.82 1.625 1.484.97A10.51 10.51 0 0 0 10 20.25h2Z" />
                        </svg>
                        <span>Comment</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg text-gray-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                        <span>Share</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;
