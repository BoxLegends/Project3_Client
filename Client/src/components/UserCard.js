import React from 'react';
import './styles/UserCard.css';
import Default from '../images/default.png';
import Yorlan from '../images/idk.jpg';
import Jared from '../images/self.jpg';


  const members = [
    {url: "users/63e1ada3f632ba6ebf048bf2", name: "Nick", title: "developer", src: Default},
    {url: "users/63e1ada3f632ba6ebf048bf3", name: "Jared", title: "Developer", src: Jared},
    {url: "users/63e1ada3f632ba6ebf048bf4", name: "John", title: "Developer", src:Default},
    {url: "users/63e1ada3f632ba6ebf048bf5", name: "Sebastian", title: "Developer", src: Default},
    {url: "users/63e1ada3f632ba6ebf048bf6", name: "Jorge", title: "Developer", src: Default},
    {url: "users/63e1ada3f632ba6ebf048bf7", name: "Yorlan", title: "Developer", src:Yorlan}
];

function UserCard() {

  return (
<div style={{textAlign: `center`, objectPosition: `center`}}>
            {members.map(p => (
  <figure id="next-project">
  <a href={p.url}>
      <img src={p.src} alt={p.pageName}/>
      </a>
<figcaption>{p.name}<br/>{p.title}</figcaption>
</figure>
            ))}
    </div>
  )
            }


export default UserCard;