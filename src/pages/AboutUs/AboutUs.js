import React, { useEffect, useState } from "react";
import UsCard from "../../components/UsCard/UsCard";
import persons from "../../common/aboutus.json";
import "./AboutUs.css";


export default function AboutUs() {
// const token = localStorage.getItem("token");
const [users, setUsers] = useState([]);
console.log(users);

useEffect(() => {
setUsers()
}, []);

return (
    <div className="about-us-container">
        {persons.map((person) => (
        <UsCard
            key={person.id}
            imageURL={person.imageURL}
            fullName={person.fullName}
            location={person.location}
            description={person.description}
            goToRepositories={person.goToRepositories}
        />
        ))}
    </div>
)
}