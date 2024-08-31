import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data.users));
    }, []);

    return (
        <section className="flex flex-wrap gap-4 mt-5 justify-center">
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </section>
    );
};

export default Cards;
