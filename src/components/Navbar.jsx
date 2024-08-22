import React from 'react'
import discord_icon from '../assets/discord.svg';
const Navbar = () => {
  return (
    <section className='navbar'>
        <div className='left-container'>
            <div className='logo'>
                <span></span>
                <p>SYNTASK.</p>
            </div>
            <div className='counter-container'>
                <span></span>
                <p>458 members online</p>
            </div>
        </div>

        <div className='right-container'>
            <div className='links-container' id='links'>
                <a id='#events'>
                    Events
                </a>
                <a id='#blog'>
                    Blog
                </a>
                <a id='#about'>
                    About
                </a>
            </div>

            <div className='buttons-container'>
                <div className='sign-up-button'>Sign Up For Free</div>
                <div className='discord-button'>
                    <img src={discord_icon}/>
                    Join Us</div>

            </div>
        </div>
    </section>
  )
}

export default Navbar