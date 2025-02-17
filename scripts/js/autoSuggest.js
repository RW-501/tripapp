// Airports data
const airports = [
 // USA
{ code: "ATL", name: "Hartsfield–Jackson Atlanta International Airport", city: "Atlanta", country: "USA", type: "International" },
{ code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA", type: "International" },
{ code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "USA", type: "International" },
{ code: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas/Fort Worth", country: "USA", type: "International" },
{ code: "DEN", name: "Denver International Airport", city: "Denver", country: "USA", type: "International" },
{ code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA", type: "International" },
{ code: "SEA", name: "Seattle–Tacoma International Airport", city: "Seattle", country: "USA", type: "International" },
{ code: "MIA", name: "Miami International Airport", city: "Miami", country: "USA", type: "International" },
{ code: "MCO", name: "Orlando International Airport", city: "Orlando", country: "USA", type: "International" },
{ code: "IAH", name: "George Bush Intercontinental Airport", city: "Houston", country: "USA", type: "International" },
{ code: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "USA", type: "International" },
{ code: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "USA", type: "International" },
{ code: "CLT", name: "Charlotte Douglas International Airport", city: "Charlotte", country: "USA", type: "International" },
{ code: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "USA", type: "International" },
{ code: "MSP", name: "Minneapolis–Saint Paul International Airport", city: "Minneapolis", country: "USA", type: "International" },
{ code: "DTW", name: "Detroit Metropolitan Airport", city: "Detroit", country: "USA", type: "International" },
{ code: "PHL", name: "Philadelphia International Airport", city: "Philadelphia", country: "USA", type: "International" },
{ code: "SAN", name: "San Diego International Airport", city: "San Diego", country: "USA", type: "International" },
{ code: "TPA", name: "Tampa International Airport", city: "Tampa", country: "USA", type: "International" },
{ code: "BWI", name: "Baltimore/Washington International Thurgood Marshall Airport", city: "Baltimore", country: "USA", type: "International" },
{ code: "DCA", name: "Ronald Reagan Washington National Airport", city: "Washington, D.C.", country: "USA", type: "International" },
{ code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA", type: "International" },
{ code: "EWR", name: "Newark Liberty International Airport", city: "Newark", country: "USA", type: "International" },
{ code: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA", type: "International" },
{ code: "FLL", name: "Fort Lauderdale–Hollywood International Airport", city: "Fort Lauderdale", country: "USA", type: "International" },
{ code: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City", country: "USA", type: "International" },
{ code: "AUS", name: "Austin-Bergstrom International Airport", city: "Austin", country: "USA", type: "International" },
{ code: "HNL", name: "Daniel K. Inouye International Airport", city: "Honolulu", country: "USA", type: "International" },
{ code: "PVD", name: "T.F. Green Airport", city: "Providence", country: "USA", type: "International" },
{ code: "RIC", name: "Richmond International Airport", city: "Richmond", country: "USA", type: "International" },
{ code: "OAK", name: "Oakland International Airport", city: "Oakland", country: "USA", type: "International" },
{ code: "BHM", name: "Birmingham-Shuttlesworth International Airport", city: "Birmingham", country: "USA", type: "International" },
{ code: "IND", name: "Indianapolis International Airport", city: "Indianapolis", country: "USA", type: "International" },
{ code: "CVG", name: "Cincinnati/NKY International Airport", city: "Cincinnati", country: "USA", type: "International" },
{ code: "SJC", name: "San Jose International Airport", city: "San Jose", country: "USA", type: "International" },
{ code: "BUF", name: "Buffalo Niagara International Airport", city: "Buffalo", country: "USA", type: "International" },
{ code: "MSY", name: "Louis Armstrong New Orleans International Airport", city: "New Orleans", country: "USA", type: "International" },
{ code: "TUS", name: "Tucson International Airport", city: "Tucson", country: "USA", type: "International" },
{ code: "MKE", name: "General Mitchell International Airport", city: "Milwaukee", country: "USA", type: "International" },
{ code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA", type: "International" },
{ code: "RSW", name: "Southwest Florida International Airport", city: "Fort Myers", country: "USA", type: "International" },
{ code: "PDX", name: "Portland International Airport", city: "Portland", country: "USA", type: "International" },
{ code: "JAX", name: "Jacksonville International Airport", city: "Jacksonville", country: "USA", type: "International" },
{ code: "SNA", name: "John Wayne Airport", city: "Santa Ana", country: "USA", type: "International" },
{ code: "CHA", name: "Chattanooga Metropolitan Airport", city: "Chattanooga", country: "USA", type: "International" },
{ code: "CMH", name: "John Glenn Columbus International Airport", city: "Columbus", country: "USA", type: "International" },
{ code: "BHM", name: "Birmingham-Shuttlesworth International Airport", city: "Birmingham", country: "USA", type: "International" },
{ code: "LIT", name: "Bill and Hillary Clinton National Airport", city: "Little Rock", country: "USA", type: "International" },
{ code: "SEA", name: "Seattle–Tacoma International Airport", city: "Seattle", country: "USA", type: "International" },
{ code: "ICT", name: "Wichita Dwight D. Eisenhower National Airport", city: "Wichita", country: "USA", type: "International" },
{ code: "SYR", name: "Syracuse Hancock International Airport", city: "Syracuse", country: "USA", type: "International" },
{ code: "LBB", name: "Lubbock Preston Smith International Airport", city: "Lubbock", country: "USA", type: "International" },
{ code: "ABQ", name: "Albuquerque International Sunport", city: "Albuquerque", country: "USA", type: "International" },
{ code: "MCI", name: "Kansas City International Airport", city: "Kansas City", country: "USA", type: "International" },
{ code: "GSO", name: "Piedmont Triad International Airport", city: "Greensboro", country: "USA", type: "International" },
{ code: "SHV", name: "Shreveport Regional Airport", city: "Shreveport", country: "USA", type: "International" },
{ code: "HSV", name: "Huntsville International Airport", city: "Huntsville", country: "USA", type: "International" },
{ code: "CVG", name: "Cincinnati/NKY International Airport", city: "Cincinnati", country: "USA", type: "International" },
{ code: "GSP", name: "Greenville-Spartanburg International Airport", city: "Greenville", country: "USA", type: "International" },

// Lesser-known USA airports
{ code: "GEG", name: "Spokane International Airport", city: "Spokane", country: "USA", type: "Regional" },
{ code: "PIT", name: "Pittsburgh International Airport", city: "Pittsburgh", country: "USA", type: "International" },
{ code: "SAV", name: "Savannah/Hilton Head International Airport", city: "Savannah", country: "USA", type: "Regional" },
{ code: "MSY", name: "Louis Armstrong New Orleans International Airport", city: "New Orleans", country: "USA", type: "International" },
{ code: "PDX", name: "Portland International Airport", city: "Portland", country: "USA", type: "International" },
{ code: "ANC", name: "Ted Stevens Anchorage International Airport", city: "Anchorage", country: "USA", type: "International" },
{ code: "BOI", name: "Boise Air Terminal", city: "Boise", country: "USA", type: "Regional" },
{ code: "BDL", name: "Bradley International Airport", city: "Hartford", country: "USA", type: "International" },
{ code: "RSW", name: "Southwest Florida International Airport", city: "Fort Myers", country: "USA", type: "International" },
{ code: "FLL", name: "Fort Lauderdale–Hollywood International Airport", city: "Fort Lauderdale", country: "USA", type: "International" },
{ code: "HSV", name: "Huntsville International Airport", city: "Huntsville", country: "USA", type: "Regional" },
{ code: "SJU", name: "Luis Muñoz Marín International Airport", city: "San Juan", country: "USA", type: "International" },
{ code: "SMF", name: "Sacramento International Airport", city: "Sacramento", country: "USA", type: "Regional" },
{ code: "TUL", name: "Tulsa International Airport", city: "Tulsa", country: "USA", type: "Regional" },
{ code: "BHM", name: "Birmingham-Shuttlesworth International Airport", city: "Birmingham", country: "USA", type: "Regional" },
{ code: "RDU", name: "Raleigh-Durham International Airport", city: "Raleigh", country: "USA", type: "Regional" },
{ code: "PVD", name: "T.F. Green Airport", city: "Providence", country: "USA", type: "Regional" },
{ code: "OKC", name: "Will Rogers World Airport", city: "Oklahoma City", country: "USA", type: "Regional" },
{ code: "FAY", name: "Fayetteville Regional Airport", city: "Fayetteville", country: "USA", type: "Regional" },
{ code: "BZN", name: "Bozeman Yellowstone International Airport", city: "Bozeman", country: "USA", type: "Regional" },
{ code: "COS", name: "Colorado Springs Airport", city: "Colorado Springs", country: "USA", type: "Regional" },
{ code: "LIT", name: "Bill and Hillary Clinton National Airport", city: "Little Rock", country: "USA", type: "Regional" },
{ code: "MKE", name: "Milwaukee Mitchell International Airport", city: "Milwaukee", country: "USA", type: "Regional" },
{ code: "GSP", name: "Greenville-Spartanburg International Airport", city: "Greenville", country: "USA", type: "Regional" },
{ code: "ISP", name: "Long Island MacArthur Airport", city: "Islip", country: "USA", type: "Regional" },
{ code: "ACY", name: "Atlantic City International Airport", city: "Atlantic City", country: "USA", type: "Regional" },
{ code: "TYS", name: "McGhee Tyson Airport", city: "Knoxville", country: "USA", type: "Regional" },
{ code: "LBB", name: "Lubbock Preston Smith International Airport", city: "Lubbock", country: "USA", type: "Regional" },
{ code: "DAB", name: "Daytona Beach International Airport", city: "Daytona Beach", country: "USA", type: "Regional" },
{ code: "MLI", name: "Quad City International Airport", city: "Moline", country: "USA", type: "Regional" },
{ code: "MHT", name: "Manchester-Boston Regional Airport", city: "Manchester", country: "USA", type: "Regional" },
{ code: "MCI", name: "Kansas City International Airport", city: "Kansas City", country: "USA", type: "Regional" },
{ code: "ABE", name: "Lehigh Valley International Airport", city: "Allentown", country: "USA", type: "Regional" },
{ code: "ROA", name: "Roanoke-Blacksburg Regional Airport", city: "Roanoke", country: "USA", type: "Regional" },
{ code: "HSV", name: "Huntsville International Airport", city: "Huntsville", country: "USA", type: "Regional" },
{ code: "MOD", name: "Modesto City–County Airport", city: "Modesto", country: "USA", type: "Regional" },
{ code: "TRI", name: "Tri-Cities Airport", city: "Blountville", country: "USA", type: "Regional" },
{ code: "EUG", name: "Eugene Airport", city: "Eugene", country: "USA", type: "Regional" },
{ code: "PIE", name: "St. Pete–Clearwater International Airport", city: "St. Petersburg", country: "USA", type: "Regional" },
{ code: "ICT", name: "Wichita Dwight D. Eisenhower National Airport", city: "Wichita", country: "USA", type: "Regional" },
{ code: "BUF", name: "Buffalo Niagara International Airport", city: "Buffalo", country: "USA", type: "Regional" },
{ code: "RAP", name: "Rapid City Regional Airport", city: "Rapid City", country: "USA", type: "Regional" },
{ code: "CLL", name: "Easterwood Airport", city: "College Station", country: "USA", type: "Regional" },
{ code: "ATW", name: "Appleton International Airport", city: "Appleton", country: "USA", type: "Regional" },
{ code: "XNA", name: "Northwest Arkansas Regional Airport", city: "Fayetteville", country: "USA", type: "Regional" },
{ code: "ALO", name: "Waterloo Regional Airport", city: "Waterloo", country: "USA", type: "Regional" },
{ code: "JAC", name: "Jackson Hole Airport", city: "Jackson", country: "USA", type: "Regional" },
{ code: "BKG", name: "Branson Airport", city: "Branson", country: "USA", type: "Regional" },
{ code: "LSE", name: "La Crosse Regional Airport", city: "La Crosse", country: "USA", type: "Regional" },
{ code: "GRR", name: "Gerald R. Ford International Airport", city: "Grand Rapids", country: "USA", type: "Regional" },
{ code: "CID", name: "The Eastern Iowa Airport", city: "Cedar Rapids", country: "USA", type: "Regional" },
{ code: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City", country: "USA", type: "International" },
{ code: "BNA", name: "Nashville International Airport", city: "Nashville", country: "USA", type: "International" },
{ code: "GNV", name: "Gainesville Regional Airport", city: "Gainesville", country: "USA", type: "Regional" },
{ code: "ROC", name: "Greater Rochester International Airport", city: "Rochester", country: "USA", type: "Regional" },


// South America
{ code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", type: "International" },
{ code: "GRU", name: "São Paulo–Guarulhos International Airport", city: "São Paulo", country: "Brazil", type: "International" },
{ code: "GIG", name: "Rio de Janeiro–Galeão International Airport", city: "Rio de Janeiro", country: "Brazil", type: "International" },
{ code: "SCL", name: "Comodoro Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile", type: "International" },
{ code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia", type: "International" },
{ code: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru", type: "International" },
{ code: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay", type: "International" },

// Lesser-known South American airports
{ code: "CGB", name: "Marechal Rondon International Airport", city: "Cuiabá", country: "Brazil", type: "Domestic" },
{ code: "CPO", name: "El Tepual International Airport", city: "Puerto Montt", country: "Chile", type: "Regional" },
{ code: "AEP", name: "Jorge Newbery Airfield", city: "Buenos Aires", country: "Argentina", type: "Domestic" },
{ code: "SJU", name: "Luis Muñoz Marín International Airport", city: "San Juan", country: "Puerto Rico", type: "International" },
{ code: "VVI", name: "Viru Viru International Airport", city: "Santa Cruz", country: "Bolivia", type: "International" },
{ code: "CTG", name: "Rafael Núñez International Airport", city: "Cartagena", country: "Colombia", type: "Domestic" },
{ code: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico", type: "International" },
{ code: "ARJ", name: "Arjona Airport", city: "Arjona", country: "Colombia", type: "Regional" },
{ code: "POA", name: "Salgado Filho International Airport", city: "Porto Alegre", country: "Brazil", type: "Domestic" },
{ code: "IGU", name: "Cataratas del Iguazú International Airport", city: "Foz do Iguaçu", country: "Brazil", type: "International" },

  // Europe
    { code: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom", type: "International" },
    { code: "LGW", name: "London Gatwick Airport", city: "London", country: "United Kingdom", type: "International" },
    { code: "STN", name: "London Stansted Airport", city: "London", country: "United Kingdom", type: "Regional" },
    { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", type: "International" },
    { code: "ORY", name: "Orly Airport", city: "Paris", country: "France", type: "International" },
    { code: "AMS", name: "Amsterdam Schiphol Airport", city: "Amsterdam", country: "Netherlands", type: "International" },
    { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", type: "International" },
    { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", type: "International" },
    { code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany", type: "International" },
    { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain", type: "International" },
    { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain", type: "International" },
    { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria", type: "International" },
    { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", type: "International" },
    { code: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland", type: "International" },
    { code: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium", type: "International" },
    { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", type: "International" },
    { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark", type: "International" },
    { code: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway", type: "International" },
    { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden", type: "International" },
    { code: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki", country: "Finland", type: "International" },
    { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland", type: "International" },
    { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece", type: "International" },
    { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy", type: "International" },
    { code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy", type: "International" },
    { code: "LIS", name: "Humberto Delgado Airport", city: "Lisbon", country: "Portugal", type: "International" },
    { code: "PRG", name: "Václav Havel Airport", city: "Prague", country: "Czech Republic", type: "International" },
    { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary", type: "International" },
    { code: "OTP", name: "Henri Coandă International Airport", city: "Bucharest", country: "Romania", type: "International" },
    { code: "SOF", name: "Sofia Airport", city: "Sofia", country: "Bulgaria", type: "International" },
    { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", type: "International" },
    
    // Lesser-known airports
    { code: "BGY", name: "Orio al Serio International Airport", city: "Bergamo", country: "Italy", type: "Regional" },
    { code: "SJJ", name: "Sarajevo International Airport", city: "Sarajevo", country: "Bosnia and Herzegovina", type: "International" },
    { code: "ZAD", name: "Zadar Airport", city: "Zadar", country: "Croatia", type: "Regional" },
    { code: "PMO", name: "Falcone–Borsellino Airport", city: "Palermo", country: "Italy", type: "Regional" },
    { code: "LJU", name: "Ljubljana Jože Pučnik Airport", city: "Ljubljana", country: "Slovenia", type: "International" },
    { code: "TLL", name: "Tallinn Airport", city: "Tallinn", country: "Estonia", type: "International" },
    { code: "SVQ", name: "Seville Airport", city: "Seville", country: "Spain", type: "Regional" },
    { code: "RIX", name: "Riga International Airport", city: "Riga", country: "Latvia", type: "International" },
    { code: "CTA", name: "Catania Fontanarossa Airport", city: "Catania", country: "Italy", type: "Regional" },
    { code: "BGO", name: "Bergen Airport, Flesland", city: "Bergen", country: "Norway", type: "Regional" },

// Asia
    { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China", type: "International" },
    { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", type: "International" },
    { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China", type: "International" },
    { code: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China", type: "International" },
    { code: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India", type: "International" },
    { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India", type: "International" },
    { code: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India", type: "International" },
    { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", type: "International" },
    { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea", type: "International" },
    { code: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea", type: "Domestic" },
    { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia", type: "International" },
    { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", type: "International" },
    { code: "NRT", name: "Narita International Airport", city: "Narita", country: "Japan", type: "International" },
    { code: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta", country: "Indonesia", type: "International" },
    { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", type: "International" },
    { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates", type: "International" },
    { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "United Arab Emirates", type: "International" },
    { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", type: "International" },

    // Lesser Known Airports
    { code: "SGN", name: "Tan Son Nhat International Airport", city: "Ho Chi Minh City", country: "Vietnam", type: "International" },
    { code: "REP", name: "Siem Reap International Airport", city: "Siem Reap", country: "Cambodia", type: "International" },
    { code: "YUL", name: "Yangon International Airport", city: "Yangon", country: "Myanmar", type: "International" },
    { code: "KOJ", name: "Kagoshima Airport", city: "Kagoshima", country: "Japan", type: "Domestic" },
    { code: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan", type: "International" },
    { code: "MLE", name: "Malé International Airport", city: "Malé", country: "Maldives", type: "International" },
    { code: "DPS", name: "Ngurah Rai International Airport", city: "Denpasar", country: "Indonesia", type: "International" },
    { code: "LCA", name: "Larnaca International Airport", city: "Larnaca", country: "Cyprus", type: "International" },
    { code: "CKG", name: "Chongqing Jiangbei International Airport", city: "Chongqing", country: "China", type: "International" },


// Africa
    { code: "JNB", name: "O. R. Tambo International Airport", city: "Johannesburg", country: "South Africa", type: "International" },
    { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", type: "International" },
    { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", type: "International" },
    { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria", type: "International" },
    { code: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana", type: "International" },
    { code: "DUR", name: "King Shaka International Airport", city: "Durban", country: "South Africa", type: "International" },
    { code: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe", type: "International" },
    { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia", type: "International" },
    { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania", type: "International" },
    { code: "ABJ", name: "Félix-Houphouët-Boigny International Airport", city: "Abidjan", country: "Ivory Coast", type: "International" },
    { code: "KGL", name: "Kigali International Airport", city: "Kigali", country: "Rwanda", type: "International" },
    { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", type: "International" },
    { code: "LUN", name: "Kenneth Kaunda International Airport", city: "Lusaka", country: "Zambia", type: "International" },
    { code: "TUN", name: "Tunis–Carthage International Airport", city: "Tunis", country: "Tunisia", type: "International" },
    { code: "RAK", name: "Marrakech Menara Airport", city: "Marrakech", country: "Morocco", type: "International" },
    { code: "SOU", name: "Sousse International Airport", city: "Sousse", country: "Tunisia", type: "International" },
    
    // Lesser-known airports
    { code: "DZA", name: "Zanzibar International Airport", city: "Zanzibar", country: "Tanzania", type: "International" },
    { code: "KRT", name: "Khartoum International Airport", city: "Khartoum", country: "Sudan", type: "International" },
    { code: "SEZ", name: "Seychelles International Airport", city: "Victoria", country: "Seychelles", type: "International" },
    { code: "FNA", name: "Lungi International Airport", city: "Freetown", country: "Sierra Leone", type: "International" },
    { code: "FIH", name: "N'djili Airport", city: "Kinshasa", country: "Democratic Republic of the Congo", type: "International" },
    { code: "PMI", name: "Punta Cana International Airport", city: "Punta Cana", country: "Dominican Republic", type: "International" },
    { code: "MWX", name: "Mwanza Airport", city: "Mwanza", country: "Tanzania", type: "Domestic" },
    { code: "VFA", name: "Victoria Falls International Airport", city: "Victoria Falls", country: "Zimbabwe", type: "International" },
    { code: "SHY", name: "Shinyanga Airport", city: "Shinyanga", country: "Tanzania", type: "Domestic" },
    { code: "SDY", name: "Sandy Bay Airport", city: "Sandy Bay", country: "Sierra Leone", type: "Domestic" },
    { code: "BJL", name: "Banjul International Airport", city: "Banjul", country: "Gambia", type: "International" },
    { code: "KSI", name: "Kassala Airport", city: "Kassala", country: "Sudan", type: "Domestic" },

    ];
    





// Auto-suggest function with debounce and improved accessibility
function destinationAutoSuggest(inputId) {
    addSuggestionBox();

    const input = document.getElementById(inputId);
    const suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box";
    suggestionBox.setAttribute('role', 'listbox');
    input.parentNode.appendChild(suggestionBox);

    let debounceTimeout;
    input.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        suggestionBox.innerHTML = "";

        if (!query) return;

        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const filteredAirports = airports.filter(airport =>
                airport.code.toLowerCase().includes(query) ||
                airport.name.toLowerCase().includes(query) ||
                airport.city.toLowerCase().includes(query) ||
                airport.country.toLowerCase().includes(query)
            );

            filteredAirports.forEach(airport => {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion";
                suggestion.setAttribute('role', 'option');
                suggestion.textContent = `${airport.code} - ${airport.name} (${airport.city}, ${airport.country})`;
                suggestion.addEventListener("click", function () {
                    input.value = `${airport.code} - ${airport.name}`;
                    suggestionBox.innerHTML = "";
                });
                suggestionBox.appendChild(suggestion);
            });

            if (filteredAirports.length === 0) {
                suggestionBox.innerHTML = "<div class='suggestion'>No results found</div>";
            }
        }, 300);  // Debounce delay
    });

    // Close suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (!input.contains(e.target) && !suggestionBox.contains(e.target)) {
            suggestionBox.innerHTML = "";
        }
    });

    // Make suggestions accessible for keyboard users
    let currentIndex = -1;
    input.addEventListener("keydown", function (e) {
        const suggestions = suggestionBox.querySelectorAll(".suggestion");
        if (suggestions.length === 0) return;

        if (e.key === "ArrowDown" && currentIndex < suggestions.length - 1) {
            currentIndex++;
        } else if (e.key === "ArrowUp" && currentIndex > 0) {
            currentIndex--;
        } else if (e.key === "Enter" && currentIndex >= 0) {
            suggestions[currentIndex].click();
            return;
        }

        suggestions.forEach((suggestion, index) => {
            suggestion.classList.toggle("highlight", index === currentIndex);
        });
    });
}

window.destinationAutoSuggest = destinationAutoSuggest;

function addSuggestionBox() {
    const style = document.createElement('style');
    style.innerHTML = `
        .suggestion-box { 
            position: absolute;
            background: white;
            border: 1px solid #ccc;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            top: 100%;
            left: 0;
        }

        .suggestion {
            padding: 8px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .suggestion:hover, .suggestion.highlight {
            background: #f0f0f0;
        }

        .suggestion-box div {
            padding: 10px;
            cursor: pointer;
        }
        
        .suggestion-box div.no-results {
            color: grey;
        }
    `;
    document.head.appendChild(style);
}
