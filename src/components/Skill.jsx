import React from 'react'

export default function Skill({name, image}) {

  return (
    <div className="p-5 flex items-center gap-4 bg-neutral-800 rounded">
      <img className="w-10 h-10" src={image} alt={name} />
      <p className="text-neutral-300">{name}</p>
    </div>
  )
}
