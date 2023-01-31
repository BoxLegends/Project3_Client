import React from 'react';



export default function Teams() {
    return (
        <div className='members'>
            {members.map(p => (
        <figure>
                <div className="container">
                <img  className="image" src={p.src} alt={p.memberName}></img>
                </div>
                <figcaption>{p.memberName}</figcaption>
            </figure>
            ))}
        </div>
    );
}