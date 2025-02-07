    /* 
      Full element data:
      - number: Atomic number
      - symbol: Element symbol
      - name: Element name
      - category: one of:
          alkali-metal, alkaline-earth, transition-metal, post-transition,
          metalloid, nonmetal, noble-gas, lanthanide, actinide, unknown
      - mass: Approx. atomic mass
      - period: For main table rows 1–7. 
                Lanthanides assigned to period=8 for display,
                Actinides assigned to period=9 for display.
      - group: 1–18 for main block, 3–17 for lanthanides/actinides row.
      - summary: Short description/extra detail
    */
    const elements = [
      { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', mass: 1.008, period: 1, group: 1,
        summary: 'The lightest element, highly flammable gas, and most abundant in the universe.' },
      { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', mass: 4.0026, period: 1, group: 18,
        summary: 'A noble gas used in balloons and cryogenics.' },
      { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', mass: 6.94, period: 2, group: 1,
        summary: 'Soft, silvery metal, the lightest solid element.' },
      { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', mass: 9.0122, period: 2, group: 2,
        summary: 'A hard metal used in aerospace and other specialized applications.' },
      { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', mass: 10.81, period: 2, group: 13,
        summary: 'A metalloid essential in borosilicate glass and semiconductors.' },
      { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', mass: 12.011, period: 2, group: 14,
        summary: 'Found in all known life; the basis of organic chemistry.' },
      { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', mass: 14.007, period: 2, group: 15,
        summary: 'Colorless gas making up 78% of Earth’s atmosphere.' },
      { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', mass: 15.999, period: 2, group: 16,
        summary: 'Essential for respiration; one of the most abundant elements on Earth.' },
      { number: 9, symbol: 'F', name: 'Fluorine', category: 'nonmetal', mass: 18.998, period: 2, group: 17,
        summary: 'Highly reactive pale yellow gas; the most reactive element.' },
      { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', mass: 20.18, period: 2, group: 18,
        summary: 'A noble gas used in neon signs and high-voltage indicators.' },
      { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', mass: 22.99, period: 3, group: 1,
        summary: 'Soft, silvery-white, highly reactive metal.' },
      { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', mass: 24.305, period: 3, group: 2,
        summary: 'A light metal that burns with a bright white flame.' },
      { number: 13, symbol: 'Al', name: 'Aluminium', category: 'post-transition', mass: 26.9815, period: 3, group: 13,
        summary: 'A lightweight, silvery metal used in many alloys.' },
      { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', mass: 28.085, period: 3, group: 14,
        summary: 'A metalloid crucial for electronics and semiconductors.' },
      { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', mass: 30.974, period: 3, group: 15,
        summary: 'A reactive nonmetal found in several allotropic forms.' },
      { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', mass: 32.06, period: 3, group: 16,
        summary: 'A bright yellow nonmetal used in fertilizers and chemicals.' },
      { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'nonmetal', mass: 35.45, period: 3, group: 17,
        summary: 'A greenish-yellow gas, highly reactive, used as a disinfectant.' },
      { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', mass: 39.948, period: 3, group: 18,
        summary: 'A noble gas making up about 1% of Earth’s atmosphere.' },
      { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', mass: 39.0983, period: 4, group: 1,
        summary: 'Highly reactive alkali metal essential to plant growth.' },
      { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', mass: 40.078, period: 4, group: 2,
        summary: 'Soft gray metal; vital for bones and shells in living organisms.' },
      { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', mass: 44.9559, period: 4, group: 3,
        summary: 'A silvery-white metal sometimes considered a rare earth element.' },
      { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', mass: 47.867, period: 4, group: 4,
        summary: 'A strong, light metal with excellent corrosion resistance.' },
      { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', mass: 50.9415, period: 4, group: 5,
        summary: 'A hard, silvery-grey metal used to strengthen steel.' },
      { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', mass: 52.0, period: 4, group: 6,
        summary: 'A shiny, hard metal known for its corrosion resistance (chrome).' },
      { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', mass: 54.938, period: 4, group: 7,
        summary: 'An important alloying element in steelmaking.' },
      { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', mass: 55.845, period: 4, group: 8,
        summary: 'A major component of steel and the most used metal on Earth.' },
      { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', mass: 58.933, period: 4, group: 9,
        summary: 'A ferromagnetic metal used in alloys and batteries.' },
      { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', mass: 58.6934, period: 4, group: 10,
        summary: 'A versatile metal often used for plating and alloys.' },
      { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', mass: 63.546, period: 4, group: 11,
        summary: 'A highly conductive metal essential in wiring and electronics.' },
      { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', mass: 65.38, period: 4, group: 12,
        summary: 'A bluish-white metal used to galvanize steel and in alloys.' },
      { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition', mass: 69.723, period: 4, group: 13,
        summary: 'A soft metal that can melt in your hand (m.p. ~30 °C).' },
      { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', mass: 72.63, period: 4, group: 14,
        summary: 'A metalloid important in semiconductor technology.' },
      { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', mass: 74.9216, period: 4, group: 15,
        summary: 'A toxic metalloid with various allotropic forms.' },
      { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', mass: 78.971, period: 4, group: 16,
        summary: 'Used in glassmaking and electronics; can be toxic in large amounts.' },
      { number: 35, symbol: 'Br', name: 'Bromine', category: 'nonmetal', mass: 79.904, period: 4, group: 17,
        summary: 'A reddish-brown liquid at room temperature; used in flame retardants.' },
      { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', mass: 83.798, period: 4, group: 18,
        summary: 'A noble gas used in lighting and photography.' },
      { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', mass: 85.4678, period: 5, group: 1,
        summary: 'A very soft, highly reactive alkali metal.' },
      { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth', mass: 87.62, period: 5, group: 2,
        summary: 'A soft metal that burns with a bright red flame.' },
      { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', mass: 88.9058, period: 5, group: 3,
        summary: 'Often grouped with the rare earth elements, used in phosphors.' },
      { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', mass: 91.224, period: 5, group: 4,
        summary: 'Highly resistant to corrosion; used in nuclear reactors.' },
      { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', mass: 92.9064, period: 5, group: 5,
        summary: 'Used in specialized alloys for superconducting magnets.' },
      { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', mass: 95.95, period: 5, group: 6,
        summary: 'Essential for many enzymes; used to strengthen steel.' },
      { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', mass: 98, period: 5, group: 7,
        summary: 'The lightest element with no stable isotopes.' },
      { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', mass: 101.07, period: 5, group: 8,
        summary: 'A rare transition metal used in electronics and alloys.' },
      { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', mass: 102.9055, period: 5, group: 9,
        summary: 'A rare, silvery-white metal highly resistant to corrosion.' },
      { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', mass: 106.42, period: 5, group: 10,
        summary: 'Used in catalytic converters and electronics.' },
      { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', mass: 107.8682, period: 5, group: 11,
        summary: 'A precious metal with the highest electrical conductivity.' },
      { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', mass: 112.414, period: 5, group: 12,
        summary: 'A toxic metal previously used in batteries and pigments.' },
      { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition', mass: 114.818, period: 5, group: 13,
        summary: 'A soft metal used in LCDs and solders.' },
      { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition', mass: 118.71, period: 5, group: 14,
        summary: 'Familiar from tin cans (actually tin-plated steel).' },
      { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', mass: 121.76, period: 5, group: 15,
        summary: 'A lustrous metalloid used in flame retardants.' },
      { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', mass: 127.6, period: 5, group: 16,
        summary: 'A brittle, mildly toxic metalloid with semiconductor properties.' },
      { number: 53, symbol: 'I', name: 'Iodine', category: 'nonmetal', mass: 126.9045, period: 5, group: 17,
        summary: 'A purple-black solid essential in thyroid function.' },
      { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', mass: 131.293, period: 5, group: 18,
        summary: 'A heavy noble gas used in lighting and anesthesia.' },
      { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', mass: 132.9054, period: 6, group: 1,
        summary: 'An extremely reactive metal, the most electropositive element.' },
      { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth', mass: 137.327, period: 6, group: 2,
        summary: 'A soft, silvery metal used in drilling fluids and fireworks.' },
      /* Lanthanides (La–Lu) forced to "Period 8" for display, Group 3–17 */
      { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', mass: 138.9055, period: 8, group: 3,
        summary: 'A soft, ductile metal often considered the first lanthanide.' },
      { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', mass: 140.116, period: 8, group: 4,
        summary: 'The most abundant rare earth element, used in catalytic converters.' },
      { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', mass: 140.9077, period: 8, group: 5,
        summary: 'A soft, silvery metal used in alloys for aircraft engines.' },
      { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', mass: 144.242, period: 8, group: 6,
        summary: 'Used in powerful neodymium magnets.' },
      { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', mass: 145, period: 8, group: 7,
        summary: 'Radioactive, does not occur naturally in significant quantities.' },
      { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', mass: 150.36, period: 8, group: 8,
        summary: 'Used in magnets and nuclear reactor control rods.' },
      { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', mass: 151.964, period: 8, group: 9,
        summary: 'A reactive lanthanide used in anti-forgery phosphors on euro banknotes.' },
      { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', mass: 157.25, period: 8, group: 10,
        summary: 'Used in MRI contrast agents and neutron shielding.' },
      { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', mass: 158.9254, period: 8, group: 11,
        summary: 'Used in green phosphors and solid-state devices.' },
      { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', mass: 162.5, period: 8, group: 12,
        summary: 'Adds strength to magnets at high temperatures.' },
      { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', mass: 164.9303, period: 8, group: 13,
        summary: 'Has the highest magnetic strength of any element.' },
      { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', mass: 167.259, period: 8, group: 14,
        summary: 'Used in optical fibers for communications lasers.' },
      { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', mass: 168.9342, period: 8, group: 15,
        summary: 'The second least abundant lanthanide, used in X-ray devices.' },
      { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', mass: 173.045, period: 8, group: 16,
        summary: 'Used in certain steel alloys and chemical sensors.' },
      { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', mass: 174.9668, period: 8, group: 17,
        summary: 'The last of the lanthanides; used in PET scan detectors.' },
      /* Continue Period 6 after Ba -> Hf ... Rn */
      { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', mass: 178.49, period: 6, group: 4,
        summary: 'Used in nuclear control rods due to its neutron-absorption ability.' },
      { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', mass: 180.9479, period: 6, group: 5,
        summary: 'Highly corrosion-resistant; used in electronics (capacitors).' },
      { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', mass: 183.84, period: 6, group: 6,
        summary: 'Has the highest melting point of all metals; used in filaments.' },
      { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', mass: 186.207, period: 6, group: 7,
        summary: 'A rare metal with a very high melting point; used in superalloys.' },
      { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', mass: 190.23, period: 6, group: 8,
        summary: 'The densest naturally occurring element.' },
      { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', mass: 192.217, period: 6, group: 9,
        summary: 'Extremely corrosion-resistant, found in meteorites.' },
      { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', mass: 195.084, period: 6, group: 10,
        summary: 'A precious metal used in catalytic converters and jewelry.' },
      { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', mass: 196.9666, period: 6, group: 11,
        summary: 'A highly valued precious metal used as currency and in electronics.' },
      { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', mass: 200.592, period: 6, group: 12,
        summary: 'The only metallic element that is liquid at standard conditions.' },
      { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition', mass: 204.38, period: 6, group: 13,
        summary: 'A toxic metal once used in rat poisons and insecticides.' },
      { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition', mass: 207.2, period: 6, group: 14,
        summary: 'A heavy metal known for its toxicity; used in batteries and shielding.' },
      { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition', mass: 208.9804, period: 6, group: 15,
        summary: 'A brittle metal with low toxicity; used in some medications.' },
      { number: 84, symbol: 'Po', name: 'Polonium', category: 'metalloid', mass: 209, period: 6, group: 16,
        summary: 'A rare, highly radioactive metalloid discovered by Marie Curie.' },
      { number: 85, symbol: 'At', name: 'Astatine', category: 'metalloid', mass: 210, period: 6, group: 17,
        summary: 'A very rare, radioactive element with properties of both metals and halogens.' },
      { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', mass: 222, period: 6, group: 18,
        summary: 'A radioactive noble gas that can accumulate in homes.' },
      /* Period 7: Fr -> Ra, then Actinides in period=9, group=3..17, then 104+ continues main block */
      { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', mass: 223, period: 7, group: 1,
        summary: 'An extremely rare and radioactive alkali metal.' },
      { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth', mass: 226, period: 7, group: 2,
        summary: 'A radioactive metal once used in luminous paints.' },
      /* Actinides (Ac–Lr) forced to "Period 9", Group 3–17 */
      { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', mass: 227, period: 9, group: 3,
        summary: 'A radioactive metal that glows in the dark due to intense radioactivity.' },
      { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', mass: 232.0377, period: 9, group: 4,
        summary: 'A slightly radioactive metal with potential as nuclear fuel.' },
      { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', mass: 231.0358, period: 9, group: 5,
        summary: 'A rare, highly radioactive element that decays into actinium.' },
      { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', mass: 238.0289, period: 9, group: 6,
        summary: 'Primarily used as fuel for nuclear power plants and weapons.' },
      { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', mass: 237, period: 9, group: 7,
        summary: 'A radioactive metal produced in nuclear reactors.' },
      { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', mass: 244, period: 9, group: 8,
        summary: 'A key fissile element used in nuclear weapons and reactors.' },
      { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide', mass: 243, period: 9, group: 9,
        summary: 'Used in smoke detectors; named after the Americas.' },
      { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', mass: 247, period: 9, group: 10,
        summary: 'Named after Marie and Pierre Curie; used in space batteries.' },
      { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', mass: 247, period: 9, group: 11,
        summary: 'A synthetic element named after Berkeley, California.' },
      { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', mass: 251, period: 9, group: 12,
        summary: 'Used to start nuclear reactors; named after California.' },
      { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', mass: 252, period: 9, group: 13,
        summary: 'Named after Albert Einstein; a synthetic, highly radioactive metal.' },
      { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', mass: 257, period: 9, group: 14,
        summary: 'Discovered in the debris of the first hydrogen bomb explosion.' },
      { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', mass: 258, period: 9, group: 15,
        summary: 'Named after Dmitri Mendeleev, the father of the periodic table.' },
      { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', mass: 259, period: 9, group: 16,
        summary: 'Named in honor of Alfred Nobel, inventor of dynamite.' },
      { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', mass: 266, period: 9, group: 17,
        summary: 'Named after Ernest Lawrence, inventor of the cyclotron.' },
      /* Back to Period 7, Groups 4–18: Rf–Og */
      { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', mass: 267, period: 7, group: 4,
        summary: 'A synthetic element named after Ernest Rutherford.' },
      { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', mass: 268, period: 7, group: 5,
        summary: 'A highly radioactive synthetic element named after Dubna in Russia.' },
      { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', mass: 269, period: 7, group: 6,
        summary: 'Named after Glenn T. Seaborg; synthetic and very unstable.' },
      { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', mass: 270, period: 7, group: 7,
        summary: 'A synthetic element named after Niels Bohr.' },
      { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', mass: 270, period: 7, group: 8,
        summary: 'Synthetic; named after the German state of Hesse.' },
      { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', mass: 278, period: 7, group: 9,
        summary: 'Named after Lise Meitner, co-discoverer of nuclear fission.' },
      { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', mass: 281, period: 7, group: 10,
        summary: 'Synthetic; named after Darmstadt, Germany.' },
      { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', mass: 282, period: 7, group: 11,
        summary: 'Named after Wilhelm Röntgen, discoverer of X-rays.' },
      { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', mass: 285, period: 7, group: 12,
        summary: 'Named after Nicolaus Copernicus; highly unstable synthetic element.' },
      { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition', mass: 286, period: 7, group: 13,
        summary: 'Named after “Nihon,” one of the Japanese words for Japan.' },
      { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition', mass: 289, period: 7, group: 14,
        summary: 'Named after the Flerov Laboratory of Nuclear Reactions in Russia.' },
      { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition', mass: 289, period: 7, group: 15,
        summary: 'Named after Moscow; a synthetic, radioactive element.' },
      { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition', mass: 293, period: 7, group: 16,
        summary: 'Named after Lawrence Livermore National Laboratory.' },
      { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'nonmetal', mass: 294, period: 7, group: 17,
        summary: 'A synthetic element named after Tennessee; predicted to be a halogen.' },
      { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', mass: 294, period: 7, group: 18,
        summary: 'A synthetic noble gas named after Yuri Oganessian.' },
    ];

    /**
     * Generate the table by creating cells for periods 1..9 and groups 1..18.
     * If an element matches (period, group), place it; else place an empty cell.
     */
    function createPeriodicTable() {
      const table = document.getElementById('periodicTable');

      // We go up to period=9 (1..7 plus extra 8=Lanthanides, 9=Actinides)
      for (let period = 1; period <= 9; period++) {
        for (let group = 1; group <= 18; group++) {
          const element = elements.find(e => e.period === period && e.group === group);
          if (element) {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${element.category}`;
            elementDiv.innerHTML = `
              <div class="atomic-number">${element.number}</div>
              <div class="symbol">${element.symbol}</div>
            `;
            elementDiv.addEventListener('click', () => showElementDetails(element));
            table.appendChild(elementDiv);
          } else {
            // If no element is found, create an empty cell
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty-cell';
            table.appendChild(emptyDiv);
          }
        }
      }
    }

    /**
     * Display element details in a modal.
     */
    function showElementDetails(element) {
      const modal = document.getElementById('elementModal');
      const details = document.getElementById('elementDetails');

      // Capitalize the category nicely
      const prettyCategory = element.category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Fill content
      details.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p><strong>Atomic Number:</strong> ${element.number}</p>
        <p><strong>Atomic Mass:</strong> ${element.mass}</p>
        <p><strong>Category:</strong> ${prettyCategory}</p>
        <p><strong>Period:</strong> ${element.period === 8 ? '6 (Lanthanide row)' : element.period === 9 ? '7 (Actinide row)' : element.period}</p>
        <p><strong>Group:</strong> ${element.group}</p>
        <p style="margin-top: 1em;">${element.summary}</p>
      `;

      // Show modal
      modal.style.display = 'flex';
    }

    /**
     * Hook up search functionality.
     */
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      // Collect all .element cells
      const elementDivs = document.querySelectorAll('.element');

      // Since the order of .element matches the order of elements[] in find(),
      // we can just filter by index
      elementDivs.forEach((div, index) => {
        const el = elements[index];
        const matches =
          el.name.toLowerCase().includes(searchTerm) ||
          el.symbol.toLowerCase().includes(searchTerm) ||
          el.number.toString().includes(searchTerm);
        div.classList.toggle('hidden', !matches);
      });
    });

    /**
     * Close the modal when clicking the close button or outside the modal content.
     */
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('elementModal').style.display = 'none';
    });
    window.addEventListener('click', (event) => {
      const modal = document.getElementById('elementModal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Initialize the periodic table
    createPeriodicTable();