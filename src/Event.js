import React from 'react';
import './App.css';

const events = [
  {
    name: 'PRERNA',
    image: 'https://example.com/prerna.jpg',
    description1: 'Prerna is an inspiring event aimed at motivating individuals to take action for social causes.',
    description2: 'It brings together speakers and volunteers to create awareness and drive change in the community.',
  },
  {
    name: 'AARAMBH FOUNDATION WEEK',
    image: 'https://example.com/aarambh.jpg',
    description1: 'A week-long celebration of the foundation of NSS, featuring various activities and workshops.',
    description2: 'This event emphasizes the mission and vision of social service and community engagement.',
  },
  {
    name: 'HAPPYTHON',
    image: 'https://example.com/happython.jpg',
    description1: 'A fun-filled marathon promoting happiness, mental health awareness, and physical well-being.',
    description2: 'Participants engage in joyful activities, interactive sessions, and group runs.',
  },
  {
    name: 'INDEPENDENCE DAY',
    image: 'https://example.com/independence.jpg',
    description1: 'A patriotic event celebrating India’s independence with cultural programs and flag hoisting.',
    description2: 'Students and faculty participate in speeches, dances, and community service initiatives.',
  },
  {
    name: 'YOGA DAY',
    image: 'https://example.com/yoga.jpg',
    description1: 'Promoting health and wellness through yoga sessions conducted by trained professionals.',
    description2: 'People of all ages join together to practice mindfulness and improve their physical well-being.',
  },
  {
    name: 'NATIONAL YOUTH DAY',
    image: 'https://example.com/youth.jpg',
    description1: 'Celebrating the energy and contribution of youth in nation-building and social welfare.',
    description2: 'The event includes motivational talks, debates, and youth-centric activities.',
  },
  {
    name: 'REPUBLIC DAY',
    image: 'https://example.com/republic.jpg',
    description1: 'Commemorating the adoption of the Indian Constitution with parades and cultural programs.',
    description2: 'A day filled with patriotic fervor, music, and awareness drives about citizens’ responsibilities.',
  },
  {
    name: 'CLEANLINESS DRIVE',
    image: 'https://example.com/cleanliness.jpg',
    description1: 'A campaign to promote hygiene, waste management, and environmental sustainability.',
    description2: 'Volunteers clean public places and educate people about keeping surroundings clean.',
  },
  {
    name: 'BLOOD DONATION CAMP',
    image: 'https://example.com/blood.jpg',
    description1: 'A life-saving event encouraging individuals to donate blood and help those in need.',
    description2: 'Medical professionals guide donors and ensure safe and effective blood collection.',
  },
];

function App() {
  return (
    <div className="events-container">
      <h2 className="events-title">EVENTS</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.name} className={`event-box ${index % 2 === 0 ? 'left' : 'right'}`}>
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-description">{event.description1}</p>
              <p className="event-description">{event.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
