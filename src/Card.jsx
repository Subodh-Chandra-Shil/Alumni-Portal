import React from "react";

const Card = ({ user }) => {
    return (
        <div className="border-2 rounded-md w-80 p-6">
            <img src={user.image} alt={user.firstName} />
            <hr />
            <h1 className="font-bold">
                Name: {user.firstName} {user.lastName}
            </h1>
            <h2>
                Current Position:{" "}
                <span className="font-bold"> {user.company.title} </span>{" "}
            </h2>
            <h2>
                Current Institute:
                <span className="font-bold"> {user.company.name}</span>
            </h2>
            <h2>
                Current Address: {user.address.city}, {user.address.state}
            </h2>
            <h2>Graduation Year: {user.university}</h2>
        </div>
    );
};

export default Card;
