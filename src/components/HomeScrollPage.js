import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import ReactPageScroller from 'react-page-scroller';


function HomeScrollPage() {
    return(
        <div className='scrollBackground'>
        <div className="homeBackground">
            <div className='normalPageContainer'>
                <h1>hello</h1>
            </div>
        </div>
        </div>
    )
}

export default HomeScrollPage;