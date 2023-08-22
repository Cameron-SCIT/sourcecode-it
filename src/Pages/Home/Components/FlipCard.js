import React from 'react'
import "./FlipCard.css"

export default function FlipCard({src, alt, title, lines=[]}) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={src} alt={alt} className='flip-card-image' />
                </div>
                <div class="flip-card-back">
                    <h2>{title}</h2>
                    {lines.map(line => <p>{line}</p>)}
                </div>
            </div>
        </div>
    )
}
