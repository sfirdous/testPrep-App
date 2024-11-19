
export const NEET = [
  { imgSource: require('../assests/physics.png'), sName: 'Physics', sDes: 'physics_description' },


  { imgSource: require('../assests/chemistry.png'), sName: 'Chemistry', sDes: 'chemistry_description' },


  { imgSource: require('../assests/biology.png'), sName: 'Biology', sDes: 'biology_description' },
]

export const MHTPCB = [

  { imgSource: require('../assests/physics.png'), sName: 'Physics', sDes: 'physics_description' },

  { imgSource: require('../assests/chemistry.png'), sName: 'Chemistry', sDes: 'chemistry_description' },

  { imgSource: require('../assests/biology.png'), sName: 'Biology', sDes: 'biology_description' },

]

export const MHTCETPCMB = [

  { imgSource: require('../assests/physics.png'), sName: 'Physics', sDes: 'physics_description' },


  { imgSource: require('../assests/chemistry.png'), sName: 'Chemistry', sDes: 'chemistry_description' },



  { imgSource: require('../assests/mathematics.png'), sName: 'Maths', sDes: 'maths_description' },



  { imgSource: require('../assests/biology.png'), sName: 'Biology', sDes: 'biology_description' },

]

export const MHTPCM = [

  { imgSource: require('../assests/physics.png'), sName: 'Physics', sDes: 'physics_description' },

  { imgSource: require('../assests/chemistry.png'), sName: 'Chemistry', sDes: 'chemistry_description' },

  { imgSource: require('../assests/mathematics.png'), sName: 'Maths', sDes: 'maths_description' },
]

export const examlabel = [
  {
    examName : 'NEET',
    img : require('../assests/neet.png')
  },
  {
    examName : 'MHT-CET (PCMB)',
    img : require('../assests/cet.png')
  },
  {
    examName : 'MHT-CET (PCM)',
    img : require('../assests/cet.png')
  },
  {
    examName : 'MHT-CET (PCB)',
    img : require('../assests/cet.png')
  },

]


// export const getDataByLabel = (label : string) => {
//   switch (label) {
//     case 'NEET':
//       console.log('NEET')
//       return NEET;
//     case 'MHT-CET (PCMB)':
//       console.log('MHT-CET (PCMB)')
//       return data;
//     case 'MHT-CET (PCM)':
//       console.log('MHT-CET (PCM)')
//       return MHTPCM;
//     case 'MHT-CET (PCB)':
//       console.log('MHT-CET (PCB)')
//       return MHTPCB;
//     default:
//       return []
  
//   }
// };

export const questionDetails = [
  {
    heading: 'Question Paper 1',
    time: '-',
    question: '200 Que',
    subjects: 'Physics | Chemistry | Mathematics | Biology',
    access: 'Free'
  },
  {
    heading: 'Question Paper 2',
    time: '1 mins',
    question: '150 Que',
    subjects: 'Physics | Chemistry | Mathematics',
    access: 'Requires Purchase'

  },
  {
    heading: 'Question Paper 3',
    time: '100 mins',
    question: '150 Que',
    subjects: 'Physics | Chemistry | Biology',
    access: 'Requires Purchase'
  },
  {
    heading: 'Question Paper 4',
    time: '100 mins',
    question: '100 Que',
    subjects: 'Physics | Chemistry | Biology',
    access: 'Requires Purchase'
  },

]


export const Physics = [
  {
    heading: 'Oscillation',
    time: '-',
    question: '150 Que',
    subjects: 'Physics',
    access: 'Free'
  },
  {
    heading: 'Newtonian Mechanics',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Physics',
    access: 'Requires Purchase'
  },
  {
    heading: 'Thermodynamics',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Physics',
    access: 'Requires Purchase'
  },
  {
    heading: 'Electromagnetism',
    time: '100 mins',
    question: '100 Que',
    subjects: 'Physics',
    access: 'Requires Purchase'
  }
];

export const Chemistry = [
  {
    heading: 'Chemical Reactions',
    time: '-',
    question: '150 Que',
    subjects: 'Chemistry',
    access: 'Free'
  },
  {
    heading: 'Atomic Structure',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Chemistry',
    access: 'Requires Purchase'
  },
  {
    heading: 'Chemical Bonding',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Chemistry',
    access: 'Requires Purchase'
  },
  {
    heading: 'Acids and Bases',
    time: '100 mins',
    question: '100 Que',
    subjects: 'Chemistry',
    access: 'Requires Purchase'
  }
];

export const Maths = [
  {
    heading: 'Algebra',
    time: '-',
    question: '150 Que',
    subjects: 'Mathematics',
    access: 'Free'
  },
  {
    heading: 'Geometry',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Mathematics',
    access: 'Requires Purchase'
  },
  {
    heading: 'Calculus',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Mathematics',
    access: 'Requires Purchase'
  },
  {
    heading: 'Statistics',
    time: '100 mins',
    question: '100 Que',
    subjects: 'Mathematics',
    access: 'Requires Purchase'
  }
];

export const Biology = [
  {
    heading: 'Cell Biology',
    time: '-',
    question: '150 Que',
    subjects: 'Biology',
    access: 'Free'
  },
  {
    heading: 'Genetics',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Biology',
    access: 'Requires Purchase'
  },
  {
    heading: 'Ecology',
    time: '180 mins',
    question: '150 Que',
    subjects: 'Biology',
    access: 'Requires Purchase'
  },
  {
    heading: 'Human Anatomy',
    time: '100 mins',
    question: '100 Que',
    subjects: 'Biology',
    access: 'Requires Purchase'
  }
];

export const questionpaper1 = [
  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },
];


export const questionpaper2 = [
  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },

];

export const questionpaper3 = [
  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },
];

export const questionpaper4 = [
  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },
];

export const questionpaper5 = [
  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },
];

export const oscillation = [

  {
    question: '1.Which of the following is a noble gas?',
    a: 'Hydrogen',
    b: 'Oxygen',
    c: 'Helium',
    d: 'Carbon',
  },
  {
    question: '2.What is the chemical symbol for gold?',
    a: 'Ag',
    b: 'Au',
    c: 'Pt',
    d: 'Fe',
  },
  {
    question: '3.What is the formula for water?',
    a: 'H2O',
    b: 'CO2',
    c: 'NaCl',
    d: 'NH3',
  },
  {
    question: '4.Which metal is extracted by the process of electrolysis?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '5.What is the unit of electric current?',
    a: 'Volt',
    b: 'Watt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '6.Which gas is produced during photosynthesis?',
    a: 'Oxygen',
    b: 'Nitrogen',
    c: 'Carbon dioxide',
    d: 'Methane',
  },
  {
    question: '7.Which organ produces insulin in the human body?',
    a: 'Pancreas',
    b: 'Liver',
    c: 'Stomach',
    d: 'Kidney',
  },
  {
    question: '8.What is the main component of natural gas?',
    a: 'Methane',
    b: 'Ethane',
    c: 'Propane',
    d: 'Butane',
  },
  {
    question: '9.Which metal is used in galvanization?',
    a: 'Iron',
    b: 'Copper',
    c: 'Aluminum',
    d: 'Zinc',
  },
  {
    question: '10.Which gas is known as laughing gas?',
    a: 'Nitrogen',
    b: 'Oxygen',
    c: 'Carbon dioxide',
    d: 'Nitrous oxide',
  },

]

export const newtonianMechanics = [
  {
    question: '1.Which law states that an object in motion stays in motion?',
    a: 'Newton\'s First Law',
    b: 'Newton\'s Second Law',
    c: 'Newton\'s Third Law',
    d: 'Law of Inertia',
  },
  {
    question: '2.What is the formula for force?',
    a: 'F = ma',
    b: 'F = mv',
    c: 'F = mg',
    d: 'F = mv^2',
  },
  {
    question: '3.What is the unit of force?',
    a: 'Newton',
    b: 'Joule',
    c: 'Watt',
    d: 'Pascal',
  },
  {
    question: '4.What is the acceleration due to gravity?',
    a: '9.8 m/s²',
    b: '9.8 km/s²',
    c: '9.8 m/s',
    d: '9.8 m²/s',
  },
  {
    question: '5.What is the term for the resistance of an object to change its state of motion?',
    a: 'Inertia',
    b: 'Momentum',
    c: 'Force',
    d: 'Velocity',
  }
];


export const thermodynamics = [
  {
    question: '1.What is the first law of thermodynamics?',
    a: 'Energy cannot be created or destroyed',
    b: 'Entropy always increases',
    c: 'Heat flows from hot to cold',
    d: 'Pressure is directly proportional to temperature',
  },
  {
    question: '2.What is the unit of temperature?',
    a: 'Kelvin',
    b: 'Celsius',
    c: 'Fahrenheit',
    d: 'Joule',
  },
  {
    question: '3.What is the formula for calculating work done?',
    a: 'W = Fd',
    b: 'W = mg',
    c: 'W = ma',
    d: 'W = mv²',
  },
  {
    question: '4.What is entropy?',
    a: 'A measure of disorder',
    b: 'A measure of energy',
    c: 'A measure of temperature',
    d: 'A measure of pressure',
  },
  {
    question: '5.What is the efficiency of a Carnot engine?',
    a: '1 - (T_cold / T_hot)',
    b: '1 + (T_cold / T_hot)',
    c: 'T_hot / T_cold',
    d: 'T_cold / T_hot',
  }
];


export const electromagnetism = [
  {
    question: '1.What is the unit of electric charge?',
    a: 'Coulomb',
    b: 'Volt',
    c: 'Ampere',
    d: 'Ohm',
  },
  {
    question: '2.What is the formula for Ohm\'s Law?',
    a: 'V = IR',
    b: 'V = IR²',
    c: 'V = I/R',
    d: 'V = R/I',
  },
  {
    question: '3.What is the magnetic field unit?',
    a: 'Tesla',
    b: 'Newton',
    c: 'Joule',
    d: 'Watt',
  },
  {
    question: '4.What device measures electric current?',
    a: 'Ammeter',
    b: 'Voltmeter',
    c: 'Ohmmeter',
    d: 'Thermometer',
  },
  {
    question: '5.What is Faraday\'s law of induction?',
    a: 'EMF = -dΦ/dt',
    b: 'EMF = dΦ/dt',
    c: 'EMF = Φd/dt',
    d: 'EMF = Φ/dt',
  }
];


export const chemicalReactions = [
  {
    question: '1.Which of the following is a chemical reaction?',
    a: 'Melting of ice',
    b: 'Rusting of iron',
    c: 'Boiling of water',
    d: 'Breaking of glass',
  },
  {
    question: '2.What is the product of the reaction between acid and base?',
    a: 'Salt and water',
    b: 'Salt and hydrogen',
    c: 'Water and carbon dioxide',
    d: 'Hydrogen and oxygen',
  },
  {
    question: '3.What is the law of conservation of mass?',
    a: 'Mass is neither created nor destroyed in a chemical reaction',
    b: 'Energy is neither created nor destroyed',
    c: 'Matter can be converted into energy',
    d: 'Energy can be converted into matter',
  },
  {
    question: '4.What is a catalyst?',
    a: 'A substance that speeds up a chemical reaction',
    b: 'A substance that slows down a chemical reaction',
    c: 'A reactant in a chemical reaction',
    d: 'A product of a chemical reaction',
  },
  {
    question: '5.What is the pH of a neutral solution?',
    a: '7',
    b: '1',
    c: '14',
    d: '0',
  }
];

export const atomicStructure = [
  {
    question: '1.What is the charge of a proton?',
    a: 'Positive',
    b: 'Negative',
    c: 'Neutral',
    d: 'Depends on the atom',
  },
  {
    question: '2.What is the center of an atom called?',
    a: 'Nucleus',
    b: 'Proton',
    c: 'Electron',
    d: 'Neutron',
  },
  {
    question: '3.What particle orbits the nucleus of an atom?',
    a: 'Electron',
    b: 'Proton',
    c: 'Neutron',
    d: 'Quark',
  },
  {
    question: '4.What is the atomic number?',
    a: 'Number of protons in an atom',
    b: 'Number of neutrons in an atom',
    c: 'Number of electrons in an atom',
    d: 'Total number of protons and neutrons',
  },
  {
    question: '5.What is an isotope?',
    a: 'Atoms with the same number of protons but different number of neutrons',
    b: 'Atoms with the same number of neutrons but different number of protons',
    c: 'Atoms with the same number of electrons but different number of protons',
    d: 'Atoms with different number of protons and neutrons',
  }
];
export const chemicalBonding = [
  {
    question: '1.What is an ionic bond?',
    a: 'A bond formed by the transfer of electrons',
    b: 'A bond formed by the sharing of electrons',
    c: 'A bond formed by the transfer of protons',
    d: 'A bond formed by the sharing of protons',
  },
  {
    question: '2.What is a covalent bond?',
    a: 'A bond formed by the sharing of electrons',
    b: 'A bond formed by the transfer of electrons',
    c: 'A bond formed by the sharing of protons',
    d: 'A bond formed by the transfer of protons',
  },
  {
    question: '3.What is an example of a covalent molecule?',
    a: 'H2O',
    b: 'NaCl',
    c: 'CaCl2',
    d: 'MgO',
  },
  {
    question: '4.What type of bond is present in NaCl?',
    a: 'Ionic bond',
    b: 'Covalent bond',
    c: 'Metallic bond',
    d: 'Hydrogen bond',
  },
  {
    question: '5.What is the octet rule?',
    a: 'Atoms tend to have eight electrons in their valence shell',
    b: 'Atoms tend to have eight protons in their nucleus',
    c: 'Atoms tend to have eight neutrons in their nucleus',
    d: 'Atoms tend to lose eight electrons',
  }
];
export const acidsAndBases = [
  {
    question: '1.What is the pH range of acids?',
    a: '0 to 7',
    b: '7 to 14',
    c: '0 to 14',
    d: '7 to 8',
  },
  {
    question: '2.What is the pH range of bases?',
    a: '7 to 14',
    b: '0 to 7',
    c: '0 to 14',
    d: '6 to 7',
  },
  {
    question: '3.What is a common example of a strong acid?',
    a: 'Hydrochloric acid',
    b: 'Acetic acid',
    c: 'Citric acid',
    d: 'Carbonic acid',
  },
  {
    question: '4.What is a common example of a strong base?',
    a: 'Sodium hydroxide',
    b: 'Ammonia',
    c: 'Calcium carbonate',
    d: 'Baking soda',
  },
  {
    question: '5.What is produced when an acid reacts with a base?',
    a: 'Salt and water',
    b: 'Salt and hydrogen',
    c: 'Water and carbon dioxide',
    d: 'Hydrogen and oxygen',
  }
];

export const algebra = [
  {
    question: '1.What is the solution to the equation x + 2 = 5?',
    a: 'x = 3',
    b: 'x = 5',
    c: 'x = 7',
    d: 'x = 2',
  },
  {
    question: '2.What is the formula for the quadratic equation?',
    a: 'ax^2 + bx + c = 0',
    b: 'ax + b = 0',
    c: 'ax^2 + c = 0',
    d: 'bx + c = 0',
  },
  {
    question: '3.What is the value of x in the equation 2x = 8?',
    a: 'x = 4',
    b: 'x = 8',
    c: 'x = 2',
    d: 'x = 1',
  },
  {
    question: '4.What is the value of x in the equation x^2 = 16?',
    a: 'x = 4 or -4',
    b: 'x = 4',
    c: 'x = -4',
    d: 'x = 16',
  },
  {
    question: '5.What is the solution to the system of equations: x + y = 5 and x - y = 1?',
    a: 'x = 3, y = 2',
    b: 'x = 2, y = 3',
    c: 'x = 1, y = 4',
    d: 'x = 4, y = 1',
  }
];

export const geometry = [
  {
    question: '1.What is the sum of the angles in a triangle?',
    a: '180 degrees',
    b: '360 degrees',
    c: '90 degrees',
    d: '270 degrees',
  },
  {
    question: '2.What is the formula for the area of a circle?',
    a: 'πr^2',
    b: '2πr',
    c: 'πd',
    d: 'πr',
  },
  {
    question: '3.What is the Pythagorean theorem?',
    a: 'a^2 + b^2 = c^2',
    b: 'a + b = c',
    c: 'a^2 = b^2 + c^2',
    d: 'a^2 + b = c^2',
  },
  {
    question: '4.What is the formula for the circumference of a circle?',
    a: '2πr',
    b: 'πr^2',
    c: 'πd',
    d: 'πr',
  },
  {
    question: '5.What is the area of a triangle with base 5 and height 10?',
    a: '25',
    b: '50',
    c: '30',
    d: '15',
  }
];
export const calculus = [
  {
    question: '1.What is the derivative of x^2?',
    a: '2x',
    b: 'x',
    c: 'x^2',
    d: '2',
  },
  {
    question: '2.What is the integral of x?',
    a: 'x^2/2 + C',
    b: 'x^2 + C',
    c: 'x + C',
    d: '1/x + C',
  },
  {
    question: '3.What is the limit of (1/x) as x approaches infinity?',
    a: '0',
    b: '1',
    c: 'Infinity',
    d: 'Undefined',
  },
  {
    question: '4.What is the derivative of sin(x)?',
    a: 'cos(x)',
    b: '-sin(x)',
    c: 'sin(x)',
    d: '-cos(x)',
  },
  {
    question: '5.What is the integral of e^x?',
    a: 'e^x + C',
    b: 'e + x',
    c: 'e^x/x',
    d: 'x^e + C',
  }
];
export const statistics = [
  {
    question: '1.What is the mean of the data set [2, 4, 6, 8, 10]?',
    a: '6',
    b: '5',
    c: '7',
    d: '4',
  },
  {
    question: '2.What is the median of the data set [1, 3, 3, 6, 7, 8, 9]?',
    a: '6',
    b: '7',
    c: '3',
    d: '8',
  },
  {
    question: '3.What is the mode of the data set [1, 2, 2, 3, 3, 3, 4]?',
    a: '3',
    b: '2',
    c: '1',
    d: '4',
  },
  {
    question: '4.What is the range of the data set [2, 5, 7, 10, 12]?',
    a: '10',
    b: '12',
    c: '5',
    d: '2',
  },
  {
    question: '5.What is a standard deviation?',
    a: 'A measure of the amount of variation or dispersion in a set of values',
    b: 'The square of the variance',
    c: 'The average of a data set',
    d: 'The difference between the highest and lowest values in a data set',
  }
];
export const cellBiology = [
  {
    question: '1.What is the basic unit of life?',
    a: 'Cell',
    b: 'Tissue',
    c: 'Organ',
    d: 'Organism',
  },
  {
    question: '2.What structure controls the activities of the cell?',
    a: 'Nucleus',
    b: 'Cytoplasm',
    c: 'Cell membrane',
    d: 'Mitochondria',
  },
  {
    question: '3.What is the powerhouse of the cell?',
    a: 'Mitochondria',
    b: 'Nucleus',
    c: 'Ribosome',
    d: 'Golgi apparatus',
  },
  {
    question: '4.What is the function of ribosomes?',
    a: 'Protein synthesis',
    b: 'DNA replication',
    c: 'Energy production',
    d: 'Cell division',
  },
  {
    question: '5.What is the liquid component of the cell?',
    a: 'Cytoplasm',
    b: 'Nucleus',
    c: 'Mitochondria',
    d: 'Chloroplast',
  }
];
export const genetics = [
  {
    question: '1.What is the study of heredity?',
    a: 'Genetics',
    b: 'Ecology',
    c: 'Cell biology',
    d: 'Physiology',
  },
  {
    question: '2.What carries genetic information?',
    a: 'DNA',
    b: 'RNA',
    c: 'Protein',
    d: 'Lipid',
  },
  {
    question: '3.What is the shape of the DNA molecule?',
    a: 'Double helix',
    b: 'Single strand',
    c: 'Triple helix',
    d: 'Circle',
  },
  {
    question: '4.What is a gene?',
    a: 'A segment of DNA that codes for a protein',
    b: 'A type of protein',
    c: 'A lipid molecule',
    d: 'A type of carbohydrate',
  },
  {
    question: '5.What is a mutation?',
    a: 'A change in the DNA sequence',
    b: 'A type of cell division',
    c: 'A form of asexual reproduction',
    d: 'A process of photosynthesis',
  }
];
export const ecology = [
  {
    question: '1.What is the study of interactions between organisms and their environment?',
    a: 'Ecology',
    b: 'Genetics',
    c: 'Physiology',
    d: 'Botany',
  },
  {
    question: '2.What is a community?',
    a: 'A group of different species living in the same area',
    b: 'A group of the same species living in the same area',
    c: 'An organism\'s role in its environment',
    d: 'A single organism',
  },
  {
    question: '3.What is an ecosystem?',
    a: 'A community of organisms and their physical environment',
    b: 'A group of the same species',
    c: 'An organism\'s habitat',
    d: 'A type of biome',
  },
  {
    question: '4.What is a producer?',
    a: 'An organism that makes its own food',
    b: 'An organism that eats other organisms',
    c: 'An organism that decomposes organic material',
    d: 'An organism that lives in water',
  },
  {
    question: '5.What is the term for the position of an organism in a food chain?',
    a: 'Trophic level',
    b: 'Niche',
    c: 'Habitat',
    d: 'Community',
  }
];
export const humanAnatomy = [
  {
    question: '1.What is the largest organ in the human body?',
    a: 'Skin',
    b: 'Heart',
    c: 'Liver',
    d: 'Brain',
  },
  {
    question: '2.What is the function of the heart?',
    a: 'To pump blood throughout the body',
    b: 'To filter blood',
    c: 'To produce hormones',
    d: 'To aid in digestion',
  },
  {
    question: '3.What is the main organ of the respiratory system?',
    a: 'Lungs',
    b: 'Heart',
    c: 'Stomach',
    d: 'Liver',
  },
  {
    question: '4.What is the function of the kidneys?',
    a: 'To filter waste from the blood',
    b: 'To pump blood',
    c: 'To produce insulin',
    d: 'To digest food',
  },
  {
    question: '5.What type of joint is found in the shoulder?',
    a: 'Ball and socket',
    b: 'Hinge',
    c: 'Pivot',
    d: 'Gliding',
  }
];



export const history = [
  {
    test_name: 'Oscillation',
    test_date: 'Mar 23, 2020',
    test_time: '2:25 PM',
    time_taken: '75 mins',
    percentage: '92%',
  },
  {
    test_name: 'Chemical Reactions',
    test_date: 'Apr 15, 2020',
    test_time: '10:00 AM',
    time_taken: '60 mins',
    percentage: '88%',
  },
  {
    test_name: 'Algebra',
    test_date: 'May 1, 2020',
    test_time: '1:30 PM',
    time_taken: '70 mins',
    percentage: '85%',
  },
  {
    test_name: 'Cell Biology',
    test_date: 'Jun 12, 2020',
    test_time: '11:45 AM',
    time_taken: '80 mins',
    percentage: '90%',
  },
  {
    test_name: 'Question Paper 1',
    test_date: 'Jul 4, 2020',
    test_time: '9:20 AM',
    time_taken: '65 mins',
    percentage: '87%',
  },
  {
    test_name: 'Statistics',
    test_date: 'Aug 25, 2020',
    test_time: '3:15 PM',
    time_taken: '95 mins',
    percentage: '93%',
  },
  {
    test_name: 'Question Paper 3',
    test_date: 'Sep 14, 2020',
    test_time: '4:00 PM',
    time_taken: '85 mins',
    percentage: '89%',
  }
];






