import React from 'react';
import reactLogo from '../assets/react.jpg'

function Header(){
    return(
        <header>
                <img src={reactLogo} alt="reactLogo" width={300}/>
            </header>
    )
}


function List2(){
    return(
        <>
            <Header></Header>
            <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is popular library</li>
                <li>I will be able to fit in with all the coolest devs out there</li>
                <li>I am more likely to get a job as a front end developer</li>
                <li>If I know react I can create my own website</li>

            </ol>
            </main>
            <footer>
                <p>&copy; 20xx Sutara Developermnt. All rights reserved</p>
               
            </footer>
        </>
        
    );
}
export default List2;