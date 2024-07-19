'use client'


const Button = ({name, handleClick, letter, numbers}) => {
  return (
    <button onClick={handleClick} className={`w-8  uppercase ${letter == name ? 'bg-red-500 p-2 rounded-md text-white':''} ${numbers == name ? 'bg-red-500 p-2 rounded-md text-white':''} hover:border-b hover:border-red-500`}>{name}</button>
  )
}

export default Button