import React from 'react'
import { useState, useEffect } from 'react'
import "./Home.css"

const VisitCount = () => {
const [viewCount, setViewCount] = useState(0)

let updateVisitCount = () =>{
    fetch('https://api.countapi.xyz/update/gelomm/gelomm-portfolio/?amount=1')
    .then(res => res.json())
    .then(res => {
        let updateView = res.value;
        setViewCount(updateView)
    })
}
useEffect(() => {
    updateVisitCount()
}, [])

return (
    <div className='visit-cont'>
        <div>
            <p>This page is viewed</p>
            <h3>{viewCount || 0}</h3>
            <p>times</p>

        </div>
    </div>
)
}

export default VisitCount