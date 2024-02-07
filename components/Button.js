'use client'


const Button = ({name, handleClick, letter, numbers}) => {
  return (
    <button onClick={handleClick} className={`uppercase ${letter == name ? 'bg-red-500 p-2 rounded-md text-white':''} ${numbers == name ? 'bg-red-500 p-2 rounded-md text-white':''}`}>{name}</button>
  )
}

export default Button