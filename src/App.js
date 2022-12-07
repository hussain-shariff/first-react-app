import './App.css';
import Person from './person.png'

function App() {
  return (
    <div className='info'>
        <div className="person-img">
          <img src={Person} className="image" alt="img" />
        </div>
          <div className="content">
            <h1 className='name'>Laura Smith</h1>
            <p className='title'>Frontend Developer</p>
            <p className='website-name'>laurasmith.website</p>
          </div>
          <div className="btns">
            <button className='email-btn btn'> <i class="fa-solid fa-envelope"></i> Email</button>
            <button className='linkedin-btn btn'> <i class="fa-brands fa-linkedin"></i> LinkedIn</button>
          </div>
    </div>
  );
}

export default App;
