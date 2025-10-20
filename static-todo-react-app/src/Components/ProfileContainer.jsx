import Reack from "react";
import ProfileCard from "./ProfileCard";

function ProfileContainer(){

    const profiles = [
        {
            "Name": "Alex",
            "Age": 25,
            "Bio": "A software engineer who loves hiking"
        },
        {
            "Name": "Taylor",
            "Age": 30,
            "Bio": "A designer passionate about photography"
        },
        {
            "Name": "Cody",
            "Age": 32,
            "Bio": "A coder and a gamer"
        }
    ]

    return (
        <div>
            {profiles.map((profile) => (
                <ProfileCard name={profile.Name} age={profile.Age} bio={profile.Bio} />))}
        </div>
    )
}

export default ProfileContainer;