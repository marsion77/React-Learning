import './App.css'
import Course from './Course';
import Backend from './assets/Backend.avif'
import Database from './assets/Database.jpg'
import Frontend from './assets/Frontend.webp'

function App() {
 
return(
<>

<Course name='Front End' description='HTML,CSS,Bootstrap, Javascript,React' img={Frontend} ratings='5' show={true}/>
<Course name='Back End' description='Python,Django,Flask' img={Backend} ratings='4.5' show={true}/>
<Course name='Data Base' description='MongoDB' img={Database} ratings='4' show={true}/>

 </>

);
}

export default App
