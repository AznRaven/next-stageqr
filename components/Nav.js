import React from 'react'

const Nav = () => {
    const links = [
        {
        path: '/',
        name: 'Home'
    },
        {
        path: '/links',
        name: 'Links'
    },
        {
        path: '/about',
        name: 'About'
    },
]
  return (
    <nav className='flex justify-center'>
        <ul className='flex gap-5'>
            {links.map(link => (<li key={link.path}>{link.name}</li>))}
        </ul>
    </nav>
    
  )
}

export default Nav