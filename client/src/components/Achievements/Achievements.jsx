// MainComponent.js
import React from 'react';
import Achievement from './Achievement';
import { achievements } from './AchievementsData.js';

const MainComponent = () => {
  return (
    <section className="section achievements_section" id="teams">
      <h2 className="section__title" style={{ color: '#319DC4' }}>Teams</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <Achievement key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default MainComponent;
