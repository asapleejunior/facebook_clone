import React from 'react';
import StoryReel from './StoryReel';
import CreatePost from './CreatePost';
import Post from './Post';

const Feed: React.FC = () => {
    return (
        <div className="flex-1 p-4 pb-20 md:p-8 min-w-0 max-w-[750px] mx-auto">
            {/* Story Reel */}
            <div className="animate-fade-in-down">
                <StoryReel />
            </div>

            {/* Create Post */}
            <div className="animate-fade-in-up">
                <CreatePost />
            </div>

            {/* Posts */}
            <div className="space-y-4 animate-fade-in-up delay-100">
                <Post
                    profilePic="/images/asap_profile.png"
                    image="/images/travis_scott.jpg"
                    username="A$AP"
                    timestamp="Just now"
                    message="Travis went crazy on stage last night! 🔥 This energy is unmatched. #TravisScott #Concert #RapLife"
                />
                <Post
                    profilePic="/images/drake_profile.jpg"
                    image="/images/drake_summer.jpg"
                    username="Drake"
                    timestamp="2h ago"
                    message="Club paradise vibes. 🇨🇦🦉"
                />
                <Post
                    profilePic="https://randomuser.me/api/portraits/men/22.jpg"
                    // No image
                    username="Kendrick Fan"
                    timestamp="4h ago"
                    message="We need that new album ASAP! The game is waiting. 📀"
                />
            </div>
        </div>
    );
};

export default Feed;
