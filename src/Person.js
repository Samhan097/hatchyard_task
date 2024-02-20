import React from 'react'

const persons =[
    {
        "name": "Dock Reichel",
        "info": {
            "title": "Prof.",
            "age": 35,
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
        "name": "Wilmer Medhurst",
        "info": {
            "title": "Miss",
            "age": 33,
            "phone": "+15428437525",
            "email": "rhoda37@yahoo.com"
        }
    },
    {
        "name": "Katarina Lakin",
        "info": {
            "title": "Dr.",
            "age": 28,
            "phone": "743.498.6025 x50510",
            "email": "ktorp@gmail.com"
        }
    },
    {
        "name": "Aletha Kohler",
        "info": {
            "title": "Dr.",
            "age": 29,
            "phone": "1-757-724-0882 x67808",
            "email": "gterry@hotmail.com"
        }
    },
    {
        "name": "Durward Koss",
        "info": {
            "title": "Miss",
            "age": 20,
            "phone": "+13879376837",
            "email": "edd70@gmail.com"
        }
    },
    {
        "name": "Clemens O'Kon",
        "info": {
            "title": "Dr.",
            "age": 27,
            "phone": "589.735.0362 x5675",
            "email": "leland.kohler@hotmail.com"
        }
    },
    {
        "name": "Rachael Ankunding",
        "info": {
            "title": "Prof.",
            "age": 53,
            "phone": "1-445-972-0402 x007",
            "email": "parker.carlos@hotmail.com"
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
            "age": 57,
            "phone": "387.767.3369",
            "email": "murphy.lily@yahoo.com"
        }
    },
    {
        "name": "Mikayla Lindgren",
        "info": {
            "title": "Ms.",
            "age": 44,
            "phone": "718-907-1576",
            "email": "russel08@gmail.com"
        }
    }
]

export default function Person({persons}) {
    
  return (
     <div className="person">
      <h2>{persons.name}</h2>
      <p>{persons.description}</p>
    </div>
  )
}
