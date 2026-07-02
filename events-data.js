/**
 * YC Founder Bay Area Retention Event Strategy - Event Dataset
 * Grouped, structured, and metadata-enriched.
 */

window.THEMES = {
  heritage: {
    id: "heritage",
    name: "Silicon Valley Heritage & Tech Roots",
    description: "Connect founders to the region's lineage: they aren't just renting a desk, they are joining a historical chain of builders.",
    icon: "⚡"
  },
  network: {
    id: "network",
    name: "Founder Network & Alumni Density",
    description: "Foster serendipity ('surface area for luck') with successful alumni and ambitious local operators.",
    icon: "🤝"
  },
  nature: {
    id: "nature",
    name: "Nature Immersion & Scenic Escapes",
    description: "Counteract batch stress and housing costs with the Bay Area's world-class natural beauty.",
    icon: "🌲"
  },
  water: {
    id: "water",
    name: "Water, Ferries & Bay Adventures",
    description: "Position the SF Bay as a central character with ferries, sailing, and waterfront bonding.",
    icon: "⛵"
  },
  food: {
    id: "food",
    name: "Food, Neighborhoods & Multicultural Belonging",
    description: "Introduce international and domestic founders to local cuisines, neighborhood walks, and cozy food crawls.",
    icon: "🌮"
  },
  arts: {
    id: "arts",
    name: "Arts, Culture & Creative Weirdness",
    description: "Counter the stereotype that SF is 'only tech' by revealing its artistic edge, comedy, and history.",
    icon: "🎨"
  },
  gems: {
    id: "gems",
    name: "Quirky Hidden Gems & 'Only in SF'",
    description: "Create memorable stories and childlike joy with concrete slides, wave organs, and mirror mazes.",
    icon: "🔮"
  },
  wellness: {
    id: "wellness",
    name: "Wellness, Play & Recovery",
    description: "Frame SF as a place to live sustainably over decades through fitness, yoga, and mental rest.",
    icon: "🧘"
  },
  festivals: {
    id: "festivals",
    name: "Large Festivals & Citywide Anchors",
    description: "Layer founder-specific hospitality on top of major local events to build a sense of civic belonging.",
    icon: "🎫"
  },
  seasonal: {
    id: "seasonal",
    name: "Seasonal & Custom Bespoke Events",
    description: "Establish traditions across the seasons to help founders imagine a long-term life here.",
    icon: "🍂"
  }
};

window.EVENTS_DATA = [
  // 12 Top-Tier Prioritized Events first
  {
    id: "angel-island",
    name: "Angel Island Ferry + Mt. Livermore Summit Picnic",
    theme: "nature",
    category: "Nature, Water, Reflection",
    scale: "Medium",
    retention: "Extremely High",
    isTopTier: true,
    why: "This is one of the strongest 'I can't believe this is so close' experiences. Hiking to the summit and picnicking with 360-degree views of SF, Marin, Alcatraz, and the bridges builds instant awe and emotional attachment.",
    details: "Take the ferry from the historic SF Ferry Building, hike up Mt. Livermore, and share a summit picnic looking over the entire Bay Area.",
    link: "https://www.parks.ca.gov/?page_id=468",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Angel_Island_(California).jpg",
    partner: "Angel Island Ferry Services, Golden Gate National Parks Conservancy"
  },
  {
    id: "founders-stayed",
    name: "\"Founders Who Stayed\" Dinner Series",
    theme: "network",
    category: "Network, Belonging, Alumni",
    scale: "Small",
    retention: "Extremely High",
    isTopTier: true,
    why: "Directly addresses the retention question. Small dinners bypass generic startup advice and focus on the lived value of staying. Prompt: 'At what point could you have left the Bay Area, and why didn't you?'",
    details: "Small, intimate dinners mixing current batch founders with successful YC alumni who explicitly chose to make San Francisco their permanent home.",
    link: "https://www.ycombinator.com",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    partner: "Local culinary chefs, private speakeasy venues"
  },
  {
    id: "treasure-island-sailing",
    name: "Treasure Island Sailing Regatta + Urban Winery",
    theme: "water",
    category: "Water, Teamwork, Premium",
    scale: "Small-to-medium",
    retention: "Very High",
    isTopTier: true,
    why: "Combines active teamwork, friendly competition, water, skyline views, and a premium social winery setting. Highly memorable and difficult to replicate in any other global startup hub.",
    details: "Charter small sailboats for a guided, friendly regatta around Treasure Island, then dock for a private tasting session at a local urban winery with views of the Bay Bridge.",
    link: "https://www.treasureislandwinery.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sailboat_in_San_Francisco_Bay.jpg",
    partner: "SF Bay Sailing Charters, Treasure Island Wines"
  },
  {
    id: "mission-murals-food",
    name: "Mission Murals + Burrito / Quesabirria Food Tour",
    theme: "food",
    category: "Culture, Food, Neighborhood",
    scale: "Medium",
    retention: "Very High",
    isTopTier: true,
    why: "Combines art, politics, local food, neighborhood texture, and SF identity. Shows founders the multicultural, artistic, walkable side of the city that exists away from screens.",
    details: "A guided walking tour of Clarion Alley and Mission murals led by local community artists, followed by a street food crawl for tacos, burritos, and quesabirria.",
    link: "https://www.precitaeyes.org",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Clarion_alley_sf.jpg",
    partner: "Precita Eyes Muralists, La Taqueria, local food guides"
  },
  {
    id: "ggp-picnic",
    name: "Golden Gate Park Founder & Alumni Picnic",
    theme: "network",
    category: "Community, Nature, Alumni",
    scale: "Large",
    retention: "Very High",
    isTopTier: true,
    why: "Creates a low-pressure, welcoming environment where founders can see that San Francisco is not just an accelerator location, but an active, ongoing, multigenerational community. Scalable and tradition-friendly.",
    details: "A large, casual, catered afternoon picnic in Golden Gate Park (near Hellman Hollow or Lindley Meadow) with current YC batches, alumni, investors, and local builders.",
    link: "https://sfrecpark.org/734/Golden-Gate-Park",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Gate_Park.jpg",
    partner: "Bi-Rite Catering, SF Rec & Parks"
  },
  {
    id: "south-bay-systems",
    name: "South Bay Systems Trek & Tech History Tour",
    theme: "heritage",
    category: "Tech History, Silicon Valley Heritage",
    scale: "Small-to-medium",
    retention: "High",
    isTopTier: true,
    why: "Connects founders to the region's lineage. It links historical computing breakthroughs with the everyday culture of Silicon Valley, giving founders a tangible sense of the physical evolution of modern software.",
    details: "A private curated tour of the Computer History Museum in Mountain View, focusing on early computing, mainframes, and semiconductors, followed by lunch at Zareen's in Palo Alto.",
    link: "https://computerhistory.org",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Computer_history_museum.jpg",
    partner: "Computer History Museum, Zareen's Restaurant"
  },
  {
    id: "ocean-beach-fire",
    name: "Ocean Beach Fire Pits + Outer Sunset Food",
    theme: "nature",
    category: "Nature, Food, Bonding",
    scale: "Medium-to-large",
    retention: "High",
    isTopTier: true,
    why: "Transforms standard professional networking into shared emotional memory. The combination of beach fog, roaring fire pits, s'mores, and local tacos fosters deep organic bonding.",
    details: "A beachside gathering at Ocean Beach fire pits with wood fires, blankets, and s'mores, preceded or followed by tacos and drinks in the Outer Sunset neighborhood.",
    link: "https://sfrecpark.org/1155/Ocean-Beach-Fire-Pits",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ocean_Beach,_San_Francisco.jpg",
    partner: "Hook Fish Co, Underdogs Too, SF Rec & Parks"
  },
  {
    id: "wave-organ-sunset",
    name: "Wave Organ + Marina / Crissy Field Sunset",
    theme: "gems",
    category: "Hidden Gem, Nature, Reflection",
    scale: "Small-to-medium",
    retention: "High",
    isTopTier: true,
    why: "Distinctively San Francisco, strange, beautiful, and highly meditative. Helps founders reflect on the larger scope of their lives outside of intense batch sprints.",
    details: "Gather at the Wave Organ acoustic stone sculpture at high tide to listen to the ocean interact with the sculpture, paired with sunset views of the Golden Gate and light drinks.",
    link: "https://www.exploratorium.edu/visit/wave-organ",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_Wave_Organ.jpg",
    partner: "Exploratorium staff"
  },
  {
    id: "hardly-strictly-picnic",
    name: "Hardly Strictly Bluegrass YC Founder Picnic",
    theme: "festivals",
    category: "Festival, Community, Music",
    scale: "Large",
    retention: "High",
    isTopTier: true,
    why: "Demonstrates the city's generous, civic-minded public culture. By layering YC-specific hospitality (a reserved picnic area and meeting point), founders feel integrated into the broader city.",
    details: "Gather for a catered premium picnic on the perimeter of the massive, free Hardly Strictly Bluegrass music festival in Golden Gate Park.",
    link: "https://www.hardlystrictlybluegrass.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fantastic_Negrito_at_Hardly_Strictly_Bluegrass.jpg",
    partner: "Hardly Strictly Festival Organizers, local caterers"
  },
  {
    id: "presidio-forest-bathing",
    name: "Presidio Forest Bathing + High-End Picnic",
    theme: "nature",
    category: "Nature, Wellness, Food",
    scale: "Medium",
    retention: "High",
    isTopTier: true,
    why: "Presents San Francisco as restorative and physically grounding, counteracting startup intensity. Teaches founders that world-class nature walks exist right in their backyard.",
    details: "A guided, silent forest-bathing walk through the Presidio's towering eucalyptus and redwood groves, ending with a catered gourmet picnic on the Main Parade Ground.",
    link: "https://www.presidio.gov",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Spire_by_Andy_Goldsworthy_-_Presidio,_San_Francisco,_CA.jpg",
    partner: "Presidio Trust, Association of Nature and Forest Therapy Guides"
  },
  {
    id: "makerspace-arcade",
    name: "Makerspace Workshop & Vintage Arcade Night",
    theme: "heritage",
    category: "Building, Play, Tech Creativity",
    scale: "Medium",
    retention: "High",
    isTopTier: true,
    why: "Makes technical creativity feel playful and cooperative rather than work-like. Founders bond through active soldering and analog arcade gaming rather than pitching.",
    details: "A hands-on workshop in a SoMa maker space (e.g. soldering custom hardware badges) followed by free-play vintage pinball and arcade games at Musee Mecanique.",
    link: "https://museemecanique.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mus%C3%A9e_M%C3%A9canique_003.JPG",
    partner: "Noisebridge SoMa, Musee Mecanique"
  },
  {
    id: "chinatown-banquet",
    name: "Chinatown Night Market + Banquet Dinner",
    theme: "food",
    category: "Food, Culture, Community",
    scale: "Medium-to-large",
    retention: "High",
    isTopTier: true,
    why: "Especially welcoming for international founders. The street market exploration combined with a family-style banquet meal forces cross-table interactions and highlights historic civic texture.",
    details: "Explore Chinatown's historic alleys and neon lights at sunset, visit the Golden Gate Fortune Cookie Factory, then gather for a multi-course banquet feast on lazy Susans.",
    link: "https://www.sfchinatown.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SF_Chinatown_CA.jpg",
    partner: "Golden Gate Fortune Cookie Co, Far East Cafe / China Live"
  },

  // Supporting Theme-based events
  {
    id: "stanford-berkeley-spaces",
    name: "Stanford & Berkeley Innovation Spaces Tour",
    theme: "heritage",
    category: "Research, Academia, Tech Lineage",
    scale: "Medium",
    retention: "High",
    why: "Reinforces the Bay Area as an unmatched research-to-company pipeline, showing founders how academic labs, deep tech, and funding networks overlap.",
    details: "Curated visits to university research labs and student makerspaces, meeting with academic builders working on frontier AI and robotics.",
    link: "https://www.stanford.edu",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanford_University_campus_from_above.jpg"
  },
  {
    id: "soma-prototyping-feast",
    name: "SOMA Prototyping Lab & Yemeni Feast",
    theme: "heritage",
    category: "Hardware, Food, Communal",
    scale: "Medium",
    retention: "High",
    why: "Pairs the raw, hands-on physical act of building with a highly communal, shared-platter Yemeni dinner. Breaks down formal networking barriers.",
    details: "Tour an active hardware prototyping laboratory in SoMa, followed by a shared communal feast at a local Yemeni restaurant like Mandi House.",
    link: "https://www.mandihousesf.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yemeni_food_-_Mandi_-_2011.jpg",
    partner: "Soma Prototyping Labs, Mandi House"
  },
  {
    id: "pier70-industrial-walk",
    name: "Pier 70 Industrial Walk & Dogpatch Brewing",
    theme: "heritage",
    category: "History, Logistics, Social",
    scale: "Medium",
    retention: "Medium",
    why: "Highlights the historic maritime and industrial roots of SF and how logistics, robotics, and creative reuse coexist in modern waterfront developments.",
    details: "Explore the shipyard redevelopment at Pier 70, then gather at a Dogpatch brewery with outdoor fire pits and local food trucks.",
    link: "https://www.pier70sf.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Building_101_side_view,_September_2018.JPG"
  },
  {
    id: "exploratorium-adult-night",
    name: "Exploratorium After Dark (Adults Night)",
    theme: "heritage",
    category: "Science, Play, Social",
    scale: "Large",
    retention: "Medium",
    why: "Channels curiosity, science, and sensory play—three qualities that resonate strongly with tech founders. Provides a fun, non-standard night out.",
    details: "A group outing to the Exploratorium science museum on Thursday night, featuring drinks, DJ sets, and hands-on physics and perception exhibits.",
    link: "https://www.exploratorium.edu/visit/calendar/after-dark",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_Exploratorium.jpg"
  },
  {
    id: "smart-people-salon",
    name: "\"100 Smart People\" Salon",
    theme: "network",
    category: "Intellectual, Sharing, Network",
    scale: "Medium-to-large",
    retention: "Very High",
    why: "Demonstrates the intellectual density of the region without requiring pitches, panels, or investor theater. Guests share raw, interesting ideas directly.",
    details: "A curated evening salon where each guest has 3 minutes to share one deeply interesting thing they learned or built in the last six months.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Team_Work_Seminar.jpg"
  },
  {
    id: "random-walk-dinners",
    name: "Random Walk Dinners with SF Locals",
    theme: "network",
    category: "Serendipity, Interdisciplinary, Dinners",
    scale: "Small",
    retention: "High",
    why: "Many people fall in love with SF due to unexpected interdisciplinary conversations. This format manufactures high-quality serendipity outside the tech bubble.",
    details: "Small-group dinners matching YC founders with local SF scientists, designers, writers, artists, chefs, and product creators based on shared interests.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rooftop_dinner_restaurant_(21112126732).jpg"
  },
  {
    id: "lands-end-hike",
    name: "Land's End Coastal Hike & Sunset Picnic",
    theme: "nature",
    category: "Hike, Views, Picnic",
    scale: "Medium",
    retention: "High",
    why: "Shows founders that rugged, world-class coastal nature, dramatic cliffs, and Golden Gate vistas exist directly inside city limits.",
    details: "Walk the coastal trail from Sutro Baths, winding through the cypress trees and ocean cliffs, ending with a panoramic sunset picnic.",
    link: "https://www.nps.gov/goga/planyourvisit/landsend.htm",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins_of_Sutro_Baths,_San_Francisco_(5814640116).jpg"
  },
  {
    id: "marin-headlands-seafood",
    name: "Marin Headlands Hike & Sausalito Seafood",
    theme: "nature",
    category: "Hike, Nature, Food",
    scale: "Medium",
    retention: "High",
    why: "Combines physical exercise, military history (exploring old batteries), panoramic skyline views, and high-quality local seafood.",
    details: "Cross the Golden Gate to hike the Marin Headlands ridges, exploring old coastal bunkers, followed by fresh oysters and seafood in Sausalito.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Gate_Bridge_from_Battery_Spencer.jpg"
  },
  {
    id: "twin-peaks-sunrise",
    name: "Twin Peaks Sunrise or Sunset Gathering",
    theme: "nature",
    category: "Views, Reflection, Social",
    scale: "Small-to-medium",
    retention: "Medium",
    why: "Logistically simple but emotionally powerful. Seeing the entire grid of the city light up or fade at dawn/dusk creates shared quiet reflection.",
    details: "A quick group drive or climb to the summit of Twin Peaks for coffee, pastries, and a panoramic reflection circle overlooking the city.",
    link: "https://sfrecpark.org/1218/Twin-Peaks",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Twin_Peaks-San_Francisco.jpg"
  },
  {
    id: "mount-sutro-hidden-hike",
    name: "Mount Sutro Forest Hidden Urban Hike",
    theme: "nature",
    category: "Hike, Cloud Forest, Gems",
    scale: "Small-to-medium",
    retention: "Medium",
    why: "Gives founders the magical feeling of discovering a secret SF. A dense, misty eucalyptus forest hidden directly in the center of the city.",
    details: "Hike the historic interior trails of Mount Sutro, exploring the cloud forest and foggy peaks, feeling miles away from any urban core.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Sutro_Summit.JPG"
  },
  {
    id: "sunset-bay-sail",
    name: "Sunset or Full-Moon Bay Sail",
    theme: "water",
    category: "Sailing, Views, Premium",
    scale: "Small",
    retention: "High",
    why: "Premium, intimate, and uniquely local. Navigating the Bay under sails with views of Alcatraz and the Golden Gate at dusk is unforgettable.",
    details: "Charter a premium catamaran or sailboat for a sunset cruise on the SF Bay, complete with wine, local cheese, and city lights.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Glorious_Sunset_over_the_Golden_Gate_Bridge_with_Alcatraz_Island_in_Shadow.jpg"
  },
  {
    id: "gg-bridge-bike-ride",
    name: "Golden Gate Bridge Bike Ride + Sausalito Ferry",
    theme: "water",
    category: "Active, Iconic, Views",
    scale: "Medium",
    retention: "High",
    why: "Active and iconic. Navigating the bridge on bikes, exploring Sausalito, and returning via public ferry reframes public transit as an adventure.",
    details: "Rent bikes in the Marina, cycle across the Golden Gate Bridge to Sausalito, explore the houseboats, and return via the Sausalito Ferry.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_gate_bridge.jpg"
  },
  {
    id: "kayak-richardson-bay",
    name: "Kayak or SUP in Richardson Bay",
    theme: "water",
    category: "Active, Water, Wildlife",
    scale: "Small-to-medium",
    retention: "Medium",
    why: "An active, physical outdoor break from screens. Kayaking past houseboats and seals with city and bridge views provides high mental restoration.",
    details: "A guided paddleboarding and kayaking session in Richardson Bay, Sausalito, with close-up views of the waterfront and Mt. Tamalpais.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Richardson_Bay_as_seen_from_Ring_Mountain.jpg"
  },
  {
    id: "japantown-food-immersion",
    name: "Japantown Food & Cultural Immersion",
    theme: "food",
    category: "Food, Culture, Neighborhood",
    scale: "Small-to-medium",
    retention: "High",
    why: "Intimate, distinctive, and highly welcoming for international founders. Focuses on personal stories, sweet shops, ramen, and origami.",
    details: "A walking tour of historic Japantown, tasting authentic mochi, takoyaki, and ramen, combined with cultural stops and local craft shops.",
    link: "https://sfjapantown.org",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Japantown_San_Francisco_Webster_and_Post.jpg"
  },
  {
    id: "spark-social-golf",
    name: "Spark Social Food Trucks & Fire Pits",
    theme: "food",
    category: "Food, Large Groups, Play",
    scale: "Large",
    retention: "Medium",
    why: "Inclusive and highly convenient for large groups. Offers diverse food options, outdoor games, and fire pits that accommodate all dietary needs.",
    details: "Gather in Mission Bay for local food trucks, lawn games, mini-golf, and beers around reserved fire pits.",
    link: "https://sparksocialsf.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miniature_golf_01,_Fun_Park.JPG"
  },
  {
    id: "prov-workshop-chaat",
    name: "Private Improv Workshop + Late-Night Chaat",
    theme: "arts",
    category: "Comedy, Bonding, Food",
    scale: "Small-to-medium",
    retention: "High",
    why: "Gets founders completely out of pitch mode and into playful, unscripted collaboration, followed by casual spicy late-night Indian street food.",
    details: "A private improv comedy workshop at a local theater, focusing on active listening, followed by late-night street food at a beloved chaat spot.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Papri_Chaat.jpg"
  },
  {
    id: "castro-theatre-tapas",
    name: "Castro Theatre Screening + Tapas Crawl",
    theme: "arts",
    category: "Cinema, LGBTQ+ History, Neighborhood",
    scale: "Medium",
    retention: "High",
    why: "Blends neighborhood architectural history, cinema culture, LGBTQ+ heritage, and small-plate dining around a shared table.",
    details: "A private architectural tour or classic film screening at the historic Castro Theatre, followed by shared tapas at neighborhood venues.",
    link: "https://www.castrotheatre.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Castro_Theatre,_San_Francisco.jpg"
  },
  {
    id: "haight-ashbury-walk",
    name: "Haight-Ashbury Counterculture Walk",
    theme: "arts",
    category: "History, Music, Neighborhood",
    scale: "Medium",
    retention: "Medium",
    why: "Shows that San Francisco has long been a global magnet for creatives, weirdos, and people experimenting with radical new ways to live and work.",
    details: "A historical walking tour exploring the 1960s musical, artistic, and countercultural legacy of the Haight-Ashbury neighborhood.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Junction_of_Haight_and_Ashbury.jpg"
  },
  {
    id: "seward-street-slides",
    name: "Seward Street Slides Challenge",
    theme: "gems",
    category: "Play, Childlike Joy, Hidden Gem",
    scale: "Small-to-medium",
    retention: "High",
    why: "Creates pure childlike joy and a highly memorable decompression moment. Sliding down steep concrete shoots on cardboard is uniquely SF.",
    details: "Grab a sheet of cardboard and join other founders to slide down the steep, historic concrete slides tucked away in a neighborhood pocket park.",
    link: "https://sfrecpark.org/destination/seward-street-slides/",
    image: "https://foundsf.org/images/1/1b/Seward-slides-early.jpg"
  },
  {
    id: "secret-tiled-staircase",
    name: "Secret Tiled Staircase & Viewpoint Walk",
    theme: "gems",
    category: "Exploration, Art, Views",
    scale: "Small-to-medium",
    retention: "High",
    why: "Reveals the city's hidden geometry and artistic community spirit through exploration, climbing colorful neighborhood mosaic steps to 360-degree views.",
    details: "Discover hidden tiled staircases (like 16th Avenue or Moraga) winding through gardens to panoramic city overlooks like Grandview Park.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/16th_Avenue_Tiled_Steps.jpg"
  },
  {
    id: "yoda-fountain-presidio",
    name: "Yoda Fountain & Lucasfilm Presidio Walk",
    theme: "gems",
    category: "Pop Culture, Tech History, Walk",
    scale: "Small-to-medium",
    retention: "Medium",
    why: "Blends pop culture, CGI technical craft, storytelling, and Presidio's calming environment. Appeals to the geeky roots of technical builders.",
    details: "Visit the iconic bronze Yoda Fountain outside Lucasfilm headquarters in the Presidio, walking the redwood paths and visual effects campus.",
    link: "https://www.lucasfilm.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Letterman_Digital_Arts_Center,_Building_B.jpg"
  },
  {
    id: "founder-wellness-day",
    name: "Founder Wellness Day (Yoga & Brunch)",
    theme: "wellness",
    category: "Health, Yoga, Recovery",
    scale: "Medium",
    retention: "High",
    why: "Counters intense batch burnout and frames San Francisco as a city where founders can build healthy, sustainable physical routines over the long run.",
    details: "Outdoor group yoga on the grass overlooking the bay, followed by guided meditation, breathing workshops, and a healthy organic brunch.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Outdoor_Yoga_At_the_Park.jpg"
  },
  {
    id: "spa-hot-springs-day",
    name: "Spa / Hot Springs & Recovery Session",
    theme: "wellness",
    category: "Decompression, Recovery, Luxury",
    scale: "Small",
    retention: "High",
    why: "A premium decompression outing. Uniquely useful after Demo Day or major milestones, showing SF supports high-performance recovery.",
    details: "A private booking at a local bathhouse, sauna, or hot springs facility for massage, hot baths, and cold plunges to reset body and mind.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tamminiemi_sauna_interior.jpg"
  },
  {
    id: "amoeba-records-ramble",
    name: "Amoeba Records & Coffee Ramble",
    theme: "wellness",
    category: "Music, Analog, Coffee",
    scale: "Small-to-medium",
    retention: "Medium",
    why: "A creative, analog break from tech. Browsing the world's largest independent record store reminds founders of SF's non-digital, tactile culture.",
    details: "A casual afternoon walk through Haight-Ashbury, digging through vinyl crates at Amoeba Music, ending with pour-over coffee at a local cafe.",
    link: "https://www.amoeba.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Amoeba_Music_San_Francisco_Facade.jpg",
    partner: "Amoeba Music Haight"
  },
  {
    id: "outside-lands",
    name: "Outside Lands Music Festival",
    theme: "festivals",
    category: "Music, Festival, Major Anchor",
    scale: "Large",
    retention: "Very High",
    isTopTier: false,
    why: "One of the country's premiere music festivals, held directly in Golden Gate Park. Layering a YC VIP cabana or meetup makes founders feel like VIP citizens.",
    details: "A major three-day music festival in Golden Gate Park. YC anchors this with dedicated meetup zones, VIP access passes, and post-show networking dinners.",
    link: "https://www.sfoutsidelands.com",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Outside_Lands_festival_crowd.jpg",
    activation: "YC activation idea: Secure VIP passes, a central cabana, or a dedicated founder meetup zone on the park edge."
  },
  {
    id: "dreamforce-side-dinners",
    name: "Dreamforce & Downtown Activations",
    theme: "festivals",
    category: "Tech, Enterprise, Networking",
    scale: "Large",
    retention: "Medium",
    why: "Demonstrates enterprise scale, customer access, and downtown business density. YC hosts side-dinners to show founders how to harness SF's corporate hub.",
    details: "The world's largest enterprise software conference takes over Moscone Center. YC hosts exclusive founder side-dinners and after-parties.",
    link: "https://www.salesforce.com/dreamforce/",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moscone_Center,_San_Francisco.jpg",
    activation: "YC activation: Host VIP side-dinners mixing founders with enterprise sales executives and early SaaS alumni."
  },
  {
    id: "giants-game-oracle",
    name: "SF Giants Game at Oracle Park",
    theme: "festivals",
    category: "Sports, Waterfront, Social",
    scale: "Large",
    retention: "High",
    why: "A classic, low-stress Bay Area stadium experience with beautiful waterfront views of McCovey Cove. Fosters casual team and founder-alumni bonding.",
    details: "Watch a live baseball game at Oracle Park, booking a group section or suite, paired with ballpark snacks, craft beers, and waterfront views.",
    link: "https://www.mlb.com/giants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oracle_Park_2021.jpg",
    activation: "YC activation: Reserve a group section or suite, and coordinate pre-game networking at local Mission Rock breweries."
  },
  {
    id: "design-ideal-sf-life",
    name: "\"Design Your Ideal SF Life\" Half-Day",
    theme: "seasonal",
    category: "Reflection, Cohort, Lifestyle Design",
    scale: "Small",
    retention: "Extremely High",
    why: "A powerful capstone experience because it directly connects personal lifestyle design, housing choices, routines, and community with the decision to stay.",
    details: "A structured, small-group workshop where founders choose from nature, food, neighborhoods, and wellness options to map out their future life in the Bay Area.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maker_Workshop.jpg"
  },
  {
    id: "bay-area-passport",
    name: "Bay Area Passport Program",
    theme: "seasonal",
    category: "Gamification, Exploration, Challenge",
    scale: "Large",
    retention: "Very High",
    why: "Turns regional discovery and retention into an ongoing adventure, giving founders points and physical stamps for exploring parks, museums, and food scenes.",
    details: "A structured, batch-long physical passport. Complete items (like a redwoods hike, CHM visit, sailing, and a food crawl) to unlock a post-batch dinner.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Us-passport.jpg"
  }
];

window.WEEKLY_PROGRAM = [
  {
    week: "Weeks 1-2",
    title: "Welcome Picnic",
    eventId: "ggp-picnic",
    focus: "Cohort bonding & Alumni welcoming",
    description: "Start the batch with a low-pressure outdoor afternoon. Meet local operators and YC alumni."
  },
  {
    week: "Weeks 2-3",
    title: "Mission Murals & Food Tour",
    eventId: "mission-murals-food",
    focus: "Neighborhood walk & Local dining",
    description: "Walk the Mission murals and sample the best taquerias, showcasing SF's walkable culture."
  },
  {
    week: "Weeks 3-4",
    title: "Founder Alumni Dinner",
    eventId: "founders-stayed",
    focus: "Intimate network connections",
    description: "Join small dinner circles with successful founders who decided to build their lives in SF."
  },
  {
    week: "Weeks 4-5",
    title: "Angel Island Escape",
    eventId: "angel-island",
    focus: "Nature & scenic immersion",
    description: "Take the ferry, hike to the summit of Mt. Livermore, and view SF from a fresh angle."
  },
  {
    week: "Weeks 5-6",
    title: "Makerspace & Arcade Night",
    eventId: "makerspace-arcade",
    focus: "Playful making & vintage gaming",
    description: "Get hands-on in a local makerspace soldering custom badges, followed by classic pinball."
  },
  {
    week: "Weeks 6-7",
    title: "Chinatown Neon Walk",
    eventId: "chinatown-banquet",
    focus: "Cultural history & banquet feast",
    description: "Explore neon-lit alleys, learn fortune cookie history, and eat at a family-style banquet."
  },
  {
    week: "Weeks 7-8",
    title: "Treasure Island Sail",
    eventId: "treasure-island-sailing",
    focus: "Teamwork sailing & winery tasting",
    description: "Race sailboats in the Bay, then dock at an urban winery to celebrate the end of the batch."
  },
  {
    week: "Demo Day Period",
    title: "\"Why We Stayed\" Dinner & Celebration",
    eventId: "design-ideal-sf-life",
    focus: "Retention reflection & future design",
    description: "Reflect on how to design a sustainable, rich life in the Bay Area as you prepare to scale."
  }
];

window.PRINCIPLES = [
  {
    title: "Pair Activity with Food",
    summary: "The strongest report ideas combine a memorable activity with a relaxed, informal meal.",
    rationale: "The physical activity creates a shared context and breaks the ice; the subsequent relaxed dining creates deep, organic relationships.",
    examples: "SOMA prototyping + Yemeni feast, Mission murals + burritos, Marin Headlands hike + oysters."
  },
  {
    title: "Make Events Feel Native, Not Corporate",
    summary: "Founders should feel like they are discovering the real city, not attending a corporate HR offsite.",
    rationale: "Avoid over-branded, over-produced events. Leverage public ferries, neighborhood walks, local food trucks, public parks, and artist studios.",
    examples: "Exploring Neon Alleys, gathering around Ocean Beach fire pits, riding public ferries."
  },
  {
    title: "Use Small Groups for Deep Connection",
    summary: "Intimate events of 4-20 founders are highly effective for building trusted relationships.",
    rationale: "Small groups allow for deep conversation, vulnerable sharing, and breaking past the initial corporate pitching layers.",
    examples: "Small-group chef's tables, speakeasy history walks, private record store rambles."
  },
  {
    title: "Use Large Events for Belonging",
    summary: "Scale up to large community events when you want to establish a sense of citywide integration.",
    rationale: "Large picnics, music festivals, and sports games help founders feel like they are part of a larger, vibrant civic ecosystem.",
    examples: "Golden Gate Park picnics, Outside Lands cabanas, Giants baseball games."
  },
  {
    title: "Serve International Founders Intentionally",
    summary: "Ensure events make the city legible, welcoming, and easy to navigate for newcomers.",
    rationale: "International founders often don't know how accessible nature is, how diverse the food scene is, or how to use public transit/ferries.",
    examples: "Ferry-hopping guides, Chinatown banquet dinners, neighborhood walk challenges."
  },
  {
    title: "Build Rituals, Not One-Offs",
    summary: "Focus on creating routines and traditions that founders can easily continue after the batch.",
    rationale: "Durable retention comes from friendships, weekly routines, and community habits, rather than single expensive outings.",
    examples: "Weekly sunset gatherings, monthly alumni dinners, run/cycle interest groups."
  }
];

window.IMPLEMENTATION_NOTES = {
  accessibility: [
    "Provide alternative paths for physically demanding hikes (e.g. scenic driving or shuttle options for Twin Peaks).",
    "Ensure catering options are inclusive of all dietary restrictions (vegetarian, halal, gluten-free).",
    "Design inclusive spaces for introverts (quiet corners, structured activities) and non-drinkers (mocktails, coffee rambles)."
  ],
  transportation: [
    "Do not assume all founders have cars or want to drive. Prefer walking, public transit, and bikes.",
    "Utilize public ferry systems (Sausalito, Angel Island, Tiburon) as a scenic travel adventure.",
    "Provide central shuttle pickup spots in Hayes Valley or SoMa for South Bay systems treks."
  ],
  cost: [
    "Incorporate low-cost city activities: public parks, coastal hikes, street food walks, and free public concerts.",
    "Layer premium upgrades selectively: private tour guides, catered gourmet picnics, or boat/yacht charters.",
    "Focus budget on high-retention activities like intimate founder-alumni dinners."
  ],
  measurement: [
    "Track active attendance and repeat participation across recurring rituals.",
    "Conduct brief, low-friction surveys measuring founder satisfaction and qualitative sense of belonging.",
    "Monitor the long-term post-batch SF stay rate to evaluate program efficacy."
  ]
};
