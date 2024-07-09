import React, { Fragment } from 'react';
import './Lessons.css';
import Sidebar from '../Dashboard/Sidebar';

const Lessons = () => {
  const categories = [
    { name: 'Forces', icon: '🔬', color: '#407bff' },
    { name: 'Being Alive', icon: '❤️', color: '#ffab00' },
    { name: 'Human Body', icon: '🧑‍⚕️', color: '#db76c3' },
    { name: 'Materials', icon: '🧱', color: '#5067a9' },
    { name: 'Space', icon: '👩‍🚀', color: '#ff5733' },
    { name: 'Seasons', icon: '🌦️', color: '#4169e1' },
    { name: 'Climate', icon: '🌍', color: '#7ecf51' },
    { name: 'Sustainability', icon: '♻️', color: '#ff8c00' },
    { name: 'Sea Life', icon: '🐠', color: '#ff8c69' },
    { name: 'Travel & Transports', icon: '✈️', color: '#00bfff' },
    { name: 'Sound', icon: '🔊', color: '#dc143c' },
    { name: 'Around The World', icon: '🌏', color: '#6a5acd' },
    { name: 'Growing Plants', icon: '🌱', color: '#800080' },
    { name: 'Global Perspective', icon: '🌐', color: '#ff6347' },
    { name: 'Life Cycle of Honey Bee', icon: '🐝', color: '#3cb371' },
    { name: 'Mini Beasts', icon: '🐞', color: '#4169e1' },
  ];

  return (
    <Fragment>
    <div className="maindashboard">
        <div>
            <Sidebar />
        </div>
        <div>
           <div className='miniProfileContainer'>
           <div className='myProfile'>
                <h1>Lessons/Units</h1>
            </div>
            <div className='myProfileBtn'>
            </div>
           </div>
    <div className="category-grid">
      {categories.map((category) => (
        <div
          key={category.name}
          className="category-item"
          style={{ backgroundColor: category.color }}
        >
          <div className="category-icon">{category.icon}</div>
          <div className="category-name">{category.name}</div>
        </div>
      ))}
    </div>

        </div>
    </div>



</Fragment>
  )
}

export default Lessons