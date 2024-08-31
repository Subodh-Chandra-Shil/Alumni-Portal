import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ user }) => {
    return (
        <div className="border-2 rounded-md w-80 p-6 ">
            <img
                src="shajal2.jpg"
                alt={user.firstName}
                height="200px"
                width="200px"
                className="rounded-md mb-2 mx-auto"
            />

            {/* Social icons */}
            <div className="flex flex-row justify-around border p-2 rounded-md mb-2 mt-2">
                <a href="https://www.facebook.com/amiekazob" target="_blank">
                    <FaFacebookSquare href="" className="text-3xl" />
                </a>

                <a href="https://x.com/amiekazob" target="_blank">
                    <FaSquareXTwitter href="" className="text-3xl" />
                </a>

                <a
                    href="https://www.linkedin.com/in/md-samiul-alam-shajal-3bb79a223/"
                    target="_blank"
                >
                    <FaLinkedin href="" className="text-3xl" />
                </a>
            </div>

            {/* Content */}
            <section className="ml-8">
                <h1 className="font-bold">Name: Shajal Ahmed</h1>
                <h2>Batch: 37th</h2>
                <h2>
                    Current Position:{" "}
                    <span className="font-bold"> Software Architecture </span>{" "}
                </h2>

                <h2>
                    Current Institute:
                    <span className="font-bold"> Uber</span>
                </h2>
                <h2>
                    Current Address:
                    <span className="font-bold"> Bay Area, California</span>
                </h2>
            </section>
        </div>
    );
};

export default Card;
