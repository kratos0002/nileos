import React from 'react'
import { Link } from 'react-router-dom'

export default function PreHomeScreen() {
  return (


    <div className='row top'>
    <div className='col-2'>
        <ul>
            <li>
                <div>
                <h1>Books</h1>
                <Link to={`/books`}>
                  <img className="medium" src={'/images/malazan-cover.jpeg'} alt ='books'/>
              </Link>
                </div>
            </li>
        </ul>
            </div>
    <div className='col-2'>

            <div >
                <h1>Music</h1>
                <Link to={`/music`}>
                  <img className="medium" src={'/images/music-cover.jpeg'} alt ='music'/>
              </Link>
            </div>

    </div>
            </div>

  )
}
