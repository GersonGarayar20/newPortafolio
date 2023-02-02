import {useState} from 'react'
import Skill from './Skill'
import {frontend, backend} from './skillData'


export default function SkillList() {

  const [select, setSelect] = useState("front")

  return (
    <section className=''>
      <ul className='flex justify-center md:justify-start mb-8'>
        <li className={`${select==="front"?"border-b-2":""} border-teal-400`}>
          <button 
            onClick={()=>setSelect("front")} 
            className='text-neutral-400 hover:text-neutral-300 px-4 py-2'>
              Frontend
          </button>
        </li>
        <li className={`${select==="back"?"border-b-2":""} border-teal-400`}>
          <button 
            onClick={()=>setSelect("back")} 
            className='text-neutral-400 hover:text-neutral-300 px-4 py-2'>
              Backend
          </button>
        </li>
      </ul>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {
          select === "front"
          ? frontend.map(({id, name, image})=>(<Skill key={id} name={name} image={image} />))
          : null
        }
        {
          select === "back"
          ? backend.map(({id, name, image})=>(<Skill key={id} name={name} image={image} />))
          : null
        }
      </div>
    </section>
  )
}
