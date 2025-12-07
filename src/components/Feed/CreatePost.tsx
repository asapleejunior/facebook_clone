import React from 'react';

const CreatePost: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="/images/asap_profile.png"
                    alt="profile"
                />
                <input
                    className="flex-1 bg-facebook-gray rounded-full py-2.5 px-4 outline-none hover:bg-gray-200 cursor-pointer placeholder:text-gray-600"
                    type="text"
                    placeholder="What's on your mind, A$AP?"
                />
            </div>
            <div className="flex items-center justify-evenly">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" alt="live-video" className="h-6 w-6" />
                    <span className="font-semibold text-gray-500 text-[15px]">Live video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" alt="photo-video" className="h-6 w-6" />
                    <span className="font-semibold text-gray-500 text-[15px]">Photo/video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg hidden sm:flex">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/epLG5zRzIDq.png" alt="feeling-activity" className="h-6 w-6" />
                    <span className="font-semibold text-gray-500 text-[15px]">Feeling/activity</span>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
