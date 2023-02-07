import React from 'react';
import './styles/Home.css';

export default function Home() {
    return (
      <div className='home'>
           <div>
           <header className="title">
      <h1>Welcome to Devs List!</h1>
      </header>
      <h1>Our developers</h1>
           <p> Visit our team one page to Discover the members of our talented development team and learn more about their skills and experience! We also offer a system 
        for users to upload themselves to the website in order to get their name out there and display many of their talents as well.
          </p>

        <img className = "hero" src ="https://i.ytimg.com/vi/-7vd6wswQyU/maxresdefault.jpg"></img> 
        <h1> The Mission</h1>
          <p> Here at devs list we believe that collaboration is key and we want to make collaboration easier! our website sort of acts as a roster in order to
        easily find other like minded talented developers to work with! Sign up today and start collaborating more effectively, and add a profile so
        its easier for others to find you!
         </p>
         <aside>
          <p>
            
          </p>
         </aside>
    </div>
      </div>
    );
  }