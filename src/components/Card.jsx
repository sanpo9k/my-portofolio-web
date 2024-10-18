import React from "react";
import Container from "./Container";
import { FadeIn } from "./FadeIn";
import image1 from "../assets/wheelhub--sample.png"
import image2 from "../assets/javaFX--sample.png"
import image3 from "../assets/ikigotchi--sample.jpg.png"

const workdata = [
  {
    id: 1,
    image: image1,
    title: "WheelHub E-commerce Website",
    description: "E-commerce website created using HTML, CSS and JavaScript. Complete with validation",
    link: "https://github.com/sanpo9k/wheelhub-ecommerce-web-concept"
  },
  {
    id: 2,
    image: image2,
    title: "JAVAFX CRUD Program",
    description: "A CRUD program that was created using Java, JavaFX for the GUI and MySQL for the database",
    link: "https://github.com/sanpo9k/java-javaFX-crud"
  },
  {
    id: 3,
    image: image3,
    title: "Ikigotchi App",
    description: "Ikigotchi is an mobile app that uses the concept of gamification to help people battling with addiction or bad Habit, created using React-native",
    link: "https://github.com/sanpo9k/ikigotchi-app"
  }
];

function Card() {
  return (
    <FadeIn>
      <div className="flex justify-center flex-wrap gap-6 p-5">
      {workdata.map((wd)=> 
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black/30 border hover:bg-blue-500">
          <img className="w-full max-h-60" src={wd.image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{wd.title}</div>
            <p className="text-gray-700 text-base">{wd.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer" href={wd.link}>#Github</a>
          </div>
        </div>
        )}
      </div>
    </FadeIn>
  );
}

export default Card;
