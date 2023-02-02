import { useState } from 'react'

export default function Nav() {

  const [active, setActive] = useState(false)

  const handleToggle = () => setActive(!active)
  const handleClick = () => setActive(false)


  return (
    <>
      <nav className={`${!active && "hidden"} md:h-16 md:block fixed w-full h-full z-40 bg-black`}>
        <ul className='w-full h-full items-center flex flex-col gap-8 md:flex-row justify-center'>
          <li><a onClick={handleClick} className={a} href="#home">Home</a></li>
          <li><a onClick={handleClick} className={a} href="#projects">Projects</a></li>
          <li><a onClick={handleClick} className={a} href="#skills">Skills</a></li>
          <li><a onClick={handleClick} className={a} href="#about">About me</a></li>
        </ul>
      </nav>
      
      <button 
        className="fixed bottom-4 right-4 z-50 w-12 h-12 md:hidden rounded-full bg-neutral-700 flex justify-center items-center"
        onClick={handleToggle}
      >
          {
            active
            ? (<svg className='fill-neutral-200 w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
              </svg>)
            : (<svg className='fill-neutral-200 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>) 
          }
      </button>
    </>
  )
}

const a = "block text-center text-neutral-400 p-2 hover:text-white transition-all"
