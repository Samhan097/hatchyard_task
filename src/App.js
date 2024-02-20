import React, { useState } from 'react';

const PersonsList = ({ persons }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleClick = (person) => {
    setSelectedPerson(person);
  };

  const getTextColor = (age) => {
    return age <= 20 ? 'green' : 'red';
  };
  
  return (
    <div>
      <h2>Persons List</h2>
      {selectedPerson && (
        <div className="selected-person" style={{ color: getTextColor(selectedPerson.info.age) }}>
          <strong >{selectedPerson.info.title} {selectedPerson.name}</strong>
          <div>Age: {selectedPerson.info.age}</div>
          {/* <div>Age: {selectedPerson.info.age}</div> */}
        </div>
      )}
      <div className="columns-container">
        <div className="column">
          {persons.map((person, index) => (
            <div key={person.name} className="person-box" onClick={() => handleClick(person)}>
              <div>
                <strong>{person.info.title} {person.name}</strong>
              </div>
              <div>Age: {person.info.age}</div>
              <div>Email: {person.info.email}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

const App = () => {
  const persons = [
    {
      "name": "Dock Reichel",
      "info": {
        "title": "Prof.",
        "age": 15,
        "phone": "+1-214-847-2259",
        "email": "romaguera.xander@gmail.com"
      }
    },
    {
      "name": "Kaylin Schneider",
      "info": {
        "title": "Dr.",
        "age": 26,
        "phone": "935.525.2930 x985",
        "email": "lola.brown@yahoo.com"
      }
    },
    {
      "name": "Christophe Sauer",
      "info": {
          "title": "Dr.",
          "age": 42,
          "phone": "+1-735-893-4875",
          "email": "reyna.lindgren@hotmail.com"
      }
  },
  {
      "name": "Rasheed Kreiger",
      "info": {
          "title": "Mrs.",
          "age": 17,
          "phone": "387.767.3369",
          "email": "murphy.lily@yahoo.com"
      }
  },
  ];

  return <PersonsList persons={persons} />;
};

export default App;
