import React, { Component } from 'react'
import '../index.css'
import '../App.css'
import logo from '../assets/images/coin.png'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleNav: ['HOME', 'ABOUT', 'VIDEO', 'GAMEPLAY', 'BIGTOKEN', 'TEAM', 'ROADMAP', 'ARTICLE', 'NFT MARKETPLACE'],
        }
    } 
  render() {
    return (
      <nav className='navbar'>
          <Slide top>
            <span>
              <div className="logoWrapper"><img className='assets' src={logo} alt=""/></div>
            </span>
            <ul className='listWrapper w-4/5'>
                {this.state.titleNav.map((item) => {
                  return <li className='listItem'>
                      <Link>{item}</Link>
                  </li>
                })}
            </ul>
          </Slide>
      </nav>
    )
  }
}


