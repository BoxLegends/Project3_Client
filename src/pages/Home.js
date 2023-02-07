import React from 'react';
import './styles/Home.css';

export default function Home() {
    return (
      <div className='home'>
           
           <header className="title">
      <h1>Welcome to Devs List!</h1>
      </header>
      <div className='content-container'>
           <p> <h1>Our developers</h1><br></br> Visit our team one page to Discover the members of our talented development team and learn more about their skills and experience! We also offer a system 
        for users to upload themselves to the website in order to get their name out there and display many of their talents as well.
          </p>
          <aside>
            <h2>Whats to come</h2>
            <li>Sign up function</li>
            <li>login up function</li>
            <li>a profile editor</li>
            <li>add/edit team</li>
            <li>join existing team</li>
          </aside>

          <p> <img className = "hero" src ="https://i.ytimg.com/vi/-7vd6wswQyU/maxresdefault.jpg"></img> <h1> The Mission</h1><br></br>Here at devs list we believe that collaboration is key and we want to make collaboration easier! our website sort of acts as a roster in order to
        easily find other like minded talented developers to work with! Sign up today and start collaborating more effectively, and add a profile so
        its easier for others to find you!
         </p>
         
         </div>
    </div>
      
    );
  }