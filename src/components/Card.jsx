import React from 'react'
import Container from './Container'
import { FadeIn } from './FadeIn'

const workdata = [{
  id: 1,
  image: "pixel-grass.png",
  title: "My work",
  description: "This is a brief description of the card content."
},
{
  id: 2,
  image: "pixel-grass.png",
  title: "My work",
  description: "Lorem ipsum"
},
{
  id: 3,
  image: "pixel-grass.png",
  title: "My work",
  description: "Lorem ipsum"
}

]


function Card() {
  return (
    <FadeIn>
    <div className="flex flex-wrap justify-center gap-6 px-12 py-10">
      {workdata.map((wd) => ( 
    <div className="rounded-lg shadow-lg bg-white overflow-hidden">
    <img className="w-full h-48 object-cover" 
      src={`../assets/${wd.image}`} alt="Card Title" />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{wd.title}</h2>
      <p className="mt-2 text-gray-600">{wd.description}</p>
    </div>
  </div>
    ))}
    </div>
  </FadeIn>
  )
}


export default Card