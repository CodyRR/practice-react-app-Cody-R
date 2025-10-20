import React from "react"

function ProfileCard({name, age, bio}){

    return (
        <div className="container">
            <div className="profileCardContainer">
                <p className="profileCard">Name: {name}</p>
                <p className="profileCard">Age: {age}</p>
                <p className="profileCard">Bio: {bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard