const FALLBACK_IMAGE = "./hero_banner.jpg";

const EVENT_CATALOG = [
  {
    id: "founders-stayed",
    name: "Founders Who Stayed Dinner",
    category: "YC Access",
    attendees: "10-20",
    attendeeMin: 10,
    cost: "$$$",
    costRank: 3,
    time: "2.5-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 1,
    ycOnly: true,
    image: "./SF-founder-event-images/founders-stayed/02-Small-group-toast-around-a-shared-table.jpg",
    org: "Y Combinator",
    url: "https://www.ycombinator.com/",
    partnerPath: "YC alumni curation, private dining room, strong moderator",
    assessment: "Highest strategic fit. Directly answers why founders should stay in SF with lived credibility.",
    bestFor: "Retention message, trust-building, alumni density"
  },
  {
    id: "ggp-picnic",
    name: "Golden Gate Park Founder Picnic",
    category: "Community",
    attendees: "75-250",
    attendeeMin: 75,
    cost: "$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 2,
    ycOnly: false,
    image: "./SF-founder-event-images/ggp-picnic/01-Picnic-circle-on-the-Conservatory-of-Flowers-lawn.jpg",
    org: "SF Rec & Park",
    url: "https://sfrecpark.org/734/Golden-Gate-Park",
    partnerPath: "Park permit, catered picnic, alumni hosts, light games",
    assessment: "Best scalable tradition. Low pressure, family-friendly, repeatable, and brand-safe.",
    bestFor: "Batch kickoff, quarterly alumni ritual"
  },
  {
    id: "angel-island",
    name: "Angel Island Ferry + Summit Picnic",
    category: "Nature",
    attendees: "25-60",
    attendeeMin: 25,
    cost: "$$",
    costRank: 2,
    time: "5-7 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 3,
    ycOnly: false,
    image: "./SF-founder-event-images/angel-island/01-Picnic-table-on-the-ferry-with-Angel-Island-and-Bay-views.jpg",
    org: "Angel Island State Park",
    url: "https://www.parks.ca.gov/?page_id=468",
    partnerPath: "Ferry tickets, boxed lunch, optional guide, low-hike alternate plan",
    assessment: "Very high emotional impact. The clearest nearby-nature proof point, but weather and mobility matter.",
    bestFor: "Awe, reflection, international-founder orientation"
  },
  {
    id: "mission-murals",
    name: "Mission Murals + Food Tour",
    category: "Culture",
    attendees: "20-50",
    attendeeMin: 20,
    cost: "$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 4,
    ycOnly: false,
    image: "./SF-founder-event-images/mission-murals/01-Clarion-Alley-mural-corridor-in-the-Mission-District.jpg",
    org: "Precita Eyes Muralists",
    url: "https://www.precitaeyes.org/",
    partnerPath: "Local artist guide, taqueria crawl, pod-based route",
    assessment: "Excellent for making SF feel multicultural, walkable, and alive beyond tech offices.",
    bestFor: "International founders, neighborhood belonging"
  },
  {
    id: "chinatown-banquet",
    name: "Chinatown Night Walk + Banquet",
    category: "Dinner",
    attendees: "30-80",
    attendeeMin: 30,
    cost: "$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 5,
    ycOnly: false,
    image: "./SF-founder-event-images/chinatown-banquet/01-Grant-Avenue-lanterns-glowing-at-night.jpg",
    org: "SF Chinatown",
    url: "https://www.sfchinatown.com/",
    partnerPath: "Walking route, fortune cookie stop, banquet room",
    assessment: "Strong group bonding and especially welcoming for international founders.",
    bestFor: "Late-batch social, cross-cohort mixing"
  },
  {
    id: "wave-organ",
    name: "Wave Organ + Crissy Sunset",
    category: "Nature",
    attendees: "12-40",
    attendeeMin: 12,
    cost: "$-$$",
    costRank: 1,
    time: "1.5-2.5 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 6,
    ycOnly: false,
    image: "./SF-founder-event-images/wave-organ/01-People-at-the-Wave-Organ-with-bikes-Bay-water-and-bridge-views.jpg",
    org: "Exploratorium",
    url: "https://www.exploratorium.edu/visit/wave-organ",
    partnerPath: "Snack/drink hospitality, tide timing, optional dinner after",
    assessment: "Distinctive, low-cost, and meditative. Best as a recurring ritual, not a flagship.",
    bestFor: "Quiet reflection, low-lift weekday event"
  },
  {
    id: "stern-grove",
    name: "Stern Grove Reserved Table Day",
    category: "Sponsor",
    attendees: "10-40 hosted",
    attendeeMin: 10,
    cost: "$$$",
    costRank: 3,
    time: "4-6 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 7,
    ycOnly: false,
    image: "./SF-founder-event-images/stern-grove/01-Reserved-table-seating-with-a-direct-view-of-the-Stern-Grove-stage.jpg",
    org: "Stern Grove Festival",
    url: "https://www.sterngrove.org/2026tables",
    partnerPath: "Reserved table or lounge donation, founder picnic, alumni hosts",
    assessment: "Excellent special-access layer for a free civic institution. Book early.",
    bestFor: "Summer culture, nonprofit support, special access"
  },
  {
    id: "hardly-strictly",
    name: "Hardly Strictly Founder Picnic",
    category: "Sponsor",
    attendees: "50-200 hosted",
    attendeeMin: 50,
    cost: "$$",
    costRank: 2,
    time: "4-8 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 8,
    ycOnly: false,
    image: "./SF-founder-event-images/hardly-strictly/01-Official-Hardly-Strictly-stage-and-audience-view.jpg",
    org: "Hardly Strictly Bluegrass",
    url: "https://hardlystrictlybluegrass.com/",
    partnerPath: "Adjacent picnic, meetup point, alumni hosts, transit plan",
    assessment: "Big civic magic, but avoid direct visible sponsorship because the festival is intentionally noncommercial.",
    bestFor: "Annual fall tradition"
  },
  {
    id: "makerspace-arcade",
    name: "Makerspace + Arcade Night",
    category: "Builder",
    attendees: "20-60",
    attendeeMin: 20,
    cost: "$$-$$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 9,
    ycOnly: false,
    image: "./SF-founder-event-images/makerspace-arcade/01-Official-Musee-Mecanique-gallery-view-of-the-arcade-floor.jpg",
    org: "Musee Mecanique",
    url: "https://museemecanique.com/",
    partnerPath: "Workshop buyout, arcade free-play, food trucks",
    assessment: "Strong Supabase fit: technical creativity without making the event feel like work.",
    bestFor: "Builder identity, playful technical bonding"
  },
  {
    id: "fleet-week",
    name: "Fleet Week Bay Viewing Party",
    category: "Sponsor",
    attendees: "30-100",
    attendeeMin: 30,
    cost: "$$$$",
    costRank: 4,
    time: "4-6 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 10,
    ycOnly: false,
    image: "./SF-founder-event-images/fleet-week/01-Blue-Angels-over-the-Golden-Gate-Bridge-from-the-official-Fleet-Week-site.jpg",
    org: "San Francisco Fleet Week",
    url: "https://fleetweeksf.org/air-show/",
    partnerPath: "Boat charter or waterfront venue, food, founder stories",
    assessment: "High wow factor, high cost. Use as a premium alumni/customer moment.",
    bestFor: "Special access, skyline spectacle"
  },
  {
    id: "litquake",
    name: "Litquake Founder Storytelling Salon",
    category: "Culture",
    attendees: "20-75",
    attendeeMin: 20,
    cost: "$-$$",
    costRank: 1,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 11,
    ycOnly: false,
    image: "./SF-founder-event-images/litquake/01-Litquake-reading-in-a-packed-neighborhood-venue.jpg",
    org: "Litquake",
    url: "https://www.litquake.org/sponsor",
    partnerPath: "Sponsor literary tech track, founder writing salon, afterparty",
    assessment: "Smart brand fit if framed around builder stories and lessons learned.",
    bestFor: "October culture, thoughtful founder narrative"
  },
  {
    id: "sketchfest",
    name: "Supabase x SF Sketchfest: Live Show + Talent Access",
    category: "Sponsor",
    attendees: "20-80",
    attendeeMin: 20,
    cost: "$$-$$$",
    costRank: 2,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 12,
    ycOnly: false,
    image: "./SF-founder-event-images/sketchfest/01-Packed-Sketchfest-theater-crowd-before-a-live-show.jpg",
    org: "SF Sketchfest",
    url: "https://sfsketchfest.com/get-involved/",
    partnerPath: "Sponsor a live show block, host a talent-access salon, and keep the night anchored in performances rather than branded mingling",
    assessment: "Best as a sponsor package with real stage time, not a flimsy mixer. The value is in live comedy plus proximity to talent.",
    bestFor: "Live comedy, talent access, sponsor hospitality"
  },
  {
    id: "south-bay-systems",
    name: "Computer History Museum + Prototype Lab Crawl",
    category: "Builder",
    attendees: "25-50",
    attendeeMin: 25,
    cost: "$$$",
    costRank: 3,
    time: "6-8 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 13,
    ycOnly: false,
    image: "./SF-founder-event-images/south-bay-systems/01-Hands-on-demo-lab-at-the-Computer-History-Museum.jpg",
    org: "Computer History Museum",
    url: "https://computerhistory.org/",
    partnerPath: "Private museum access, demo-lab stops, archive highlights, lunch near Mountain View or Palo Alto",
    assessment: "Best when it feels tactile and specific: demos, prototypes, and artifacts that spark founder conversation. Avoid turning it into a passive museum day.",
    bestFor: "Technical founders, product history, hands-on inspiration"
  },
  {
    id: "stanford-berkeley-labs",
    name: "Stanford / Berkeley Makerspace Crawl",
    category: "Builder",
    attendees: "15-35",
    attendeeMin: 15,
    cost: "$$-$$$",
    costRank: 2,
    time: "4-6 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 14,
    ycOnly: true,
    image: "./SF-founder-event-images/stanford-berkeley-labs/01-Stanford-AMPF-prototyping-floor-and-tools.png",
    org: "Stanford University",
    url: "https://www.stanford.edu/",
    partnerPath: "AMPF visit, Berkeley lab stop, maker-space hosts, prototypes and researcher conversations",
    assessment: "Best when it feels like actual making: tools, builds, and lab culture. The story is research moving into something people can touch.",
    bestFor: "Deep tech, AI, robotics, bio founders"
  },
  {
    id: "ai-frontier-visits",
    name: "AI Frontier Operator Visits",
    category: "YC Access",
    attendees: "10-20",
    attendeeMin: 10,
    cost: "$-$$",
    costRank: 1,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 15,
    ycOnly: true,
    image: "./SF-founder-event-images/ai-frontier-visits/03-Technical-founder-speaker-reference-for-an-intimate-Q-A.jpg",
    org: "Frontier AI companies",
    url: "https://www.ycombinator.com/companies",
    partnerPath: "Small-group operator host, no recruiting deck, off-record Q&A",
    assessment: "Potentially magical, but scarce. Keep groups small and the conversation candid.",
    bestFor: "AI founders, high-signal access moments"
  },
  {
    id: "random-walk-dinners",
    name: "Random Walk Dinners with SF Locals",
    category: "Dinner",
    attendees: "6-10 per table",
    attendeeMin: 6,
    cost: "$$",
    costRank: 2,
    time: "2.5 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 16,
    ycOnly: false,
    image: "./SF-founder-event-images/random-walk-dinners/01-San-Francisco-courtyard-party-with-long-tables-and-warm-evening-energy.jpg",
    org: "Local host network",
    url: "https://www.opentable.com/san-francisco-restaurants",
    partnerPath: "Curated tables mixing founders with artists, scientists, chefs, designers, operators",
    assessment: "Manufactures high-quality serendipity. Strong retention value without heavy production.",
    bestFor: "Deep conversation, cross-disciplinary city texture"
  },
  {
    id: "alamo-drafthouse-private-screening",
    name: "Alamo Drafthouse Private Screening + Bear vs Bull",
    category: "Culture",
    attendees: "40-120",
    attendeeMin: 40,
    cost: "$$$",
    costRank: 3,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 17,
    ycOnly: false,
    image: "./SF-founder-event-images/alamo-drafthouse-private-screening/01-New-Mission-auditorium-for-a-private-founder-screening.jpg",
    org: "Alamo Drafthouse New Mission",
    url: "https://drafthouse.com/sf/theater/new-mission",
    partnerPath: "Private auditorium buyout, founder-selected film, Bear vs Bull bar reception before or after",
    assessment: "High-control indoor social night with a real Mission venue identity. The bar reception makes it feel less like a corporate screening and more like a hosted SF night out.",
    bestFor: "Film, indoor premium social, partner-friendly evening"
  },
  {
    id: "charter-muni-train-night-cruise",
    name: "Charter Muni Train Night Cruise",
    category: "Transit",
    attendees: "30-40",
    attendeeMin: 30,
    cost: "$$-$$$",
    costRank: 2,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Medium",
    priority: 18,
    ycOnly: false,
    image: "./SF-founder-event-images/charter-muni-train-night-cruise/01-Historic-Muni-PCC-streetcar-lit-up-at-night.jpg",
    org: "SFMTA / Market Street Railway",
    url: "https://www.sfmta.com/charter-cable-car-or-streetcar",
    partnerPath: "Historic streetcar charter on the F Market route, simple pre/post drinks near Ferry Building or Castro",
    assessment: "A very SF-specific memory anchor. Strong concept, but capacity, route, lottery timing, and special-event blackout dates make it a plan-ahead activity.",
    bestFor: "Civic texture, transit nerds, memorable night out"
  },
  {
    id: "ocean-beach-fire",
    name: "Ocean Beach Fire Pits + Outer Sunset Food",
    category: "Nature",
    attendees: "30-100",
    attendeeMin: 30,
    cost: "$-$$",
    costRank: 1,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 19,
    ycOnly: false,
    image: "./SF-founder-event-images/ocean-beach-fire/02-Ocean-Beach-fire-pits-at-sunset.webp",
    org: "Golden Gate National Recreation Area",
    url: "https://www.nps.gov/goga/planyourvisit/ocean-beach.htm",
    partnerPath: "Fire pit rules, blankets, s'mores, Outer Sunset food partner",
    assessment: "High emotional atmosphere and easy bonding, but wind/fog logistics need care.",
    bestFor: "Casual bonding, post-Demo Day decompression"
  },
  {
    id: "lands-end",
    name: "Land's End Coastal Hike + Picnic",
    category: "Nature",
    attendees: "20-60",
    attendeeMin: 20,
    cost: "$-$$",
    costRank: 1,
    time: "2.5-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 20,
    ycOnly: false,
    image: "./SF-founder-event-images/lands-end/01-Land-s-End-labyrinth-at-sunset.png",
    org: "Golden Gate National Recreation Area",
    url: "https://www.nps.gov/goga/planyourvisit/landsend.htm",
    partnerPath: "Trail guide, boxed picnic, accessible alternate at Sutro Baths overlook",
    assessment: "Classic SF coastal drama inside city limits. Good value, strong place attachment.",
    bestFor: "Nature proof point, reflective walks"
  },
  {
    id: "presidio-forest",
    name: "Presidio Forest Bathing + High-End Picnic",
    category: "Wellness",
    attendees: "20-50",
    attendeeMin: 20,
    cost: "$$-$$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 21,
    ycOnly: false,
    image: "./SF-founder-event-images/presidio-forest/03-Presidio-Tunnel-Tops-landscape-for-a-polished-picnic-stop.jpg",
    org: "Presidio Trust",
    url: "https://presidio.gov/",
    partnerPath: "Guide, quiet walking route, catered picnic on the Main Parade Ground",
    assessment: "Restorative and premium without being flashy. Good antidote to batch intensity.",
    bestFor: "Wellness, sustainable founder life"
  },
  {
    id: "marin-headlands",
    name: "Marin Headlands Hike + Sausalito Seafood",
    category: "Nature",
    attendees: "20-50",
    attendeeMin: 20,
    cost: "$$-$$$",
    costRank: 2,
    time: "5-7 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 22,
    ycOnly: false,
    image: "./SF-founder-event-images/marin-headlands/marin-headlands.jpeg",
    org: "Golden Gate National Recreation Area",
    url: "https://www.nps.gov/goga/marin-headlands.htm",
    partnerPath: "Shuttle, route guide, seafood lunch reservation, low-hike view stop",
    assessment: "Beautiful and memorable, but transportation and fitness-level planning are essential.",
    bestFor: "Active founders, nature plus food"
  },
  {
    id: "gg-bridge-bike",
    name: "Golden Gate Bridge Bike + Sausalito Ferry",
    category: "Water",
    attendees: "20-50",
    attendeeMin: 20,
    cost: "$$",
    costRank: 2,
    time: "4-6 hrs",
    timeRank: 3,
    commitment: "High",
    priority: 23,
    ycOnly: false,
    image: "./SF-founder-event-images/gg-bridge-bike/01-Riders-crossing-the-Golden-Gate-Bridge-on-the-bike-route.jpg",
    org: "Golden Gate Ferry",
    url: "https://www.goldengate.org/ferry/",
    partnerPath: "Bike rentals, safety briefing, ferry return, Sausalito stop",
    assessment: "Iconic and active. Requires clear safety and alternate transit options.",
    bestFor: "Active social bonding, public-transit adventure"
  },
  {
    id: "bay-sail",
    name: "Sunset Bay Sail",
    category: "Water",
    attendees: "12-40",
    attendeeMin: 12,
    cost: "$$$$",
    costRank: 4,
    time: "2.5-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 24,
    ycOnly: false,
    image: "./SF-founder-event-images/bay-sail/01-Sailboat-on-San-Francisco-Bay-with-Golden-Gate-views.jpg",
    org: "San Francisco Bay sailing charters",
    url: "https://www.adventurecat.com/",
    partnerPath: "Private catamaran or sailboat, food/drinks, alumni story prompt",
    assessment: "Premium and memorable. Use selectively where the guest list justifies the spend.",
    bestFor: "High-touch alumni, customer or VIP event"
  },
  {
    id: "kayak-sup",
    name: "Kayak or SUP in Richardson Bay",
    category: "Water",
    attendees: "10-30",
    attendeeMin: 10,
    cost: "$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 25,
    ycOnly: false,
    image: "./SF-founder-event-images/kayak-sup/01-Kayakers-on-Richardson-Bay-near-Sausalito.jpg",
    org: "Sea Trek",
    url: "https://www.seatrek.com/",
    partnerPath: "Guided paddle, wetsuit/gear, shuttle, easy lunch after",
    assessment: "Great active reset for smaller groups. Weather and comfort with water limit scale.",
    bestFor: "Wellness, small team bonding"
  },
  {
    id: "exploratorium-after-dark",
    name: "Exploratorium After Dark",
    category: "Builder",
    attendees: "30-100",
    attendeeMin: 30,
    cost: "$$",
    costRank: 2,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 26,
    ycOnly: false,
    image: "./SF-founder-event-images/exploratorium-after-dark/01-Exploratorium-After-Dark-hands-on-science-event.jpg",
    org: "Exploratorium",
    url: "https://www.exploratorium.edu/visit/calendar/after-dark",
    partnerPath: "Group tickets, meet-up point, pre/post drinks, curated exhibit prompts",
    assessment: "Curiosity-driven and easy to run. Add a small founder layer so it does not feel like generic admission.",
    bestFor: "Science, play, technical curiosity"
  },
  {
    id: "palace-games-attraction",
    name: "Palace Games: The Attraction",
    category: "Builder",
    attendees: "4-8",
    attendeeMin: 4,
    cost: "$425 / private room",
    costRank: 4,
    time: "120 mins",
    timeRank: 2,
    commitment: "Medium",
    priority: 26.5,
    ycOnly: false,
    image: "./SF-founder-event-images/palace-games-attraction/01-The-Attraction-room-environment-from-Palace-Games.jpg",
    org: "Palace Games",
    url: "https://palace-games.com/the-attraction/",
    partnerPath: "Private room, 4-8 players, Palace of Fine Arts, 120-minute mystery run",
    assessment: "Immersive, collaborative, and location-rich. The official FAQ says all escape rooms are 16+ and The Attraction is private room only.",
    bestFor: "Small high-trust teams, puzzle lovers, hands-on collaboration"
  },
  {
    id: "long-now",
    name: "Long Now Future-Thinking Salon",
    category: "Culture",
    attendees: "20-60",
    attendeeMin: 20,
    cost: "$$",
    costRank: 2,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 27,
    ycOnly: false,
    image: "./SF-founder-event-images/long-now/01-Long-Now-salon-event-at-The-Interval.jpg",
    org: "Long Now Foundation",
    url: "https://longnow.org/",
    partnerPath: "Private discussion, long-term prompt, drinks or dinner nearby",
    assessment: "Intellectually distinctive. Best for founders who enjoy philosophical depth.",
    bestFor: "Long-term company building, reflective founders"
  },
  {
    id: "artist-studio-hop",
    name: "Artist Studio + Gallery Hop",
    category: "Culture",
    attendees: "12-30",
    attendeeMin: 12,
    cost: "$$-$$$",
    costRank: 2,
    time: "2.5-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 28,
    ycOnly: false,
    image: "./SF-founder-event-images/artist-studio-hop/minnesota-street-project-atrium-san-francisco.jpg",
    org: "Minnesota Street Project",
    url: "https://minnesotastreetproject.com/",
    partnerPath: "Gallery/studio host, artist talk, wine/NA drinks, dinner nearby",
    assessment: "Broadens founders' social world beyond tech. Small groups work best.",
    bestFor: "Creative inspiration, non-tech community"
  },
  {
    id: "haight-ramble",
    name: "Haight-Ashbury Counterculture Ramble",
    category: "Culture",
    attendees: "15-40",
    attendeeMin: 15,
    cost: "$-$$",
    costRank: 1,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 30,
    ycOnly: false,
    image: "./SF-founder-event-images/haight-ramble/01-Amoeba-Music-on-Haight-Street.jpg",
    org: "Haight Ashbury tour operators",
    url: "https://www.sftourismtips.com/haight-ashbury.html",
    partnerPath: "Local guide, Amoeba stop, coffee or casual dinner",
    assessment: "Good light-touch culture. Better as a passport item or optional small outing.",
    bestFor: "Music history, analog decompression"
  },
  {
    id: "seward-slides",
    name: "Seward Street Slides Challenge",
    category: "Play",
    attendees: "10-35",
    attendeeMin: 10,
    cost: "$",
    costRank: 1,
    time: "1-2 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 31,
    ycOnly: false,
    image: "./SF-founder-event-images/seward-slides/01-Looking-down-the-steep-Seward-Street-concrete-slides.jpg",
    org: "SF Rec & Park",
    url: "https://sfrecpark.org/destination/seward-street-slides/",
    partnerPath: "Cardboard, safety note, nearby coffee or dinner",
    assessment: "Pure joy and very SF. Too small for a flagship, great for playful pods.",
    bestFor: "Decompression, quirky hidden gems"
  },
  {
    id: "tiled-stairs",
    name: "Secret Tiled Staircase View Walk",
    category: "Nature",
    attendees: "10-30",
    attendeeMin: 10,
    cost: "$",
    costRank: 1,
    time: "1.5-2.5 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 32,
    ycOnly: false,
    image: "./SF-founder-event-images/tiled-stairs/01-16th-Avenue-Tiled-Steps-mosaic-stairway.jpg",
    org: "16th Avenue Tiled Steps",
    url: "https://www.16thavenuetiledsteps.com/",
    partnerPath: "Self-guided route, viewpoint stop, neighborhood cafe",
    assessment: "Low-cost and beautiful. Best as a passport item or small recurring walk.",
    bestFor: "City discovery, light exercise"
  },
  {
    id: "spark-social",
    name: "Spark Social Food Trucks + Mini-Golf",
    category: "Food",
    attendees: "50-150",
    attendeeMin: 50,
    cost: "$$",
    costRank: 2,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 33,
    ycOnly: false,
    image: "./SF-founder-event-images/spark-social/01-Spark-Social-SF-food-truck-park-in-Mission-Bay.jpg",
    org: "Spark Social SF",
    url: "https://sparksocialsf.com/",
    partnerPath: "Reserved fire pits/tables, food truck vouchers, mini-golf blocks",
    assessment: "Operationally easy and inclusive. Less unique, but reliable for big groups.",
    bestFor: "Large casual mixer, dietary diversity"
  },
  {
    id: "ferry-building-market",
    name: "Ferry Building Farmers Market Picnic",
    category: "Food",
    attendees: "20-80",
    attendeeMin: 20,
    cost: "$-$$",
    costRank: 1,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 34,
    ycOnly: false,
    image: "./SF-founder-event-images/ferry-building-market/01-Ferry-Plaza-Farmers-Market-tents-and-crowds-outside-the-Ferry-Building.jpg",
    org: "Foodwise Ferry Plaza Farmers Market",
    url: "https://foodwise.org/markets/ferry-plaza-farmers-market/",
    partnerPath: "Market tokens, guided vendor route, waterfront picnic",
    assessment: "Accessible and local. Works well for a Saturday morning ritual.",
    bestFor: "Food culture, low-pressure social"
  },
  {
    id: "japantown-food",
    name: "Japantown Food + Cultural Immersion",
    category: "Food",
    attendees: "15-40",
    attendeeMin: 15,
    cost: "$$",
    costRank: 2,
    time: "2.5-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 35,
    ycOnly: false,
    image: "./SF-founder-event-images/japantown-food/01-Japantown-Peace-Plaza-and-neighborhood-arrival-moment.jpg",
    org: "SF Japantown",
    url: "https://sfjapantown.org/",
    partnerPath: "Food crawl, cultural guide, tea/mochi/ramen stops",
    assessment: "Welcoming and intimate. Strong for international founders and small groups.",
    bestFor: "Cultural discovery, food bonding"
  },
  {
    id: "north-beach-chinatown",
    name: "North Beach + Chinatown Food Walk",
    category: "Food",
    attendees: "20-60",
    attendeeMin: 20,
    cost: "$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 36,
    ycOnly: false,
    image: "./SF-founder-event-images/north-beach-chinatown/01-North-Beach-deli-tasting-stop-with-a-guide-and-small-group.jpg",
    org: "Edible Excursions",
    url: "https://edibleexcursions.net/",
    partnerPath: "Food tour partner, small groups, optional banquet close",
    assessment: "High success probability. Shows walkability and layered neighborhood history.",
    bestFor: "Food, history, newcomer orientation"
  },
  {
    id: "giants-game",
    name: "Giants Game Group Section",
    category: "Sports",
    attendees: "15-80",
    attendeeMin: 15,
    cost: "$$-$$$$",
    costRank: 2,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 37,
    ycOnly: false,
    image: "./SF-founder-event-images/giants-game/01-Sunny-Oracle-Park-game-with-a-full-crowd-and-bay-views.jpg",
    org: "San Francisco Giants",
    url: "https://www.mlb.com/giants/tickets/groups-and-hospitality",
    partnerPath: "Group section or suite, Mission Rock pregame mixer",
    assessment: "Reliable and easy. Less unique than nature/culture but strong for casual bonding.",
    bestFor: "Sports, partner/family-friendly social"
  },
  {
    id: "warriors-game",
    name: "Warriors / Chase Center Night",
    category: "Sports",
    attendees: "12-50",
    attendeeMin: 12,
    cost: "$$$-$$$$",
    costRank: 3,
    time: "3-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 38,
    ycOnly: false,
    image: "./SF-founder-event-images/warriors-game/01-Warriors-home-game-inside-Chase-Center-with-the-court-and-crowd-visible.jpg",
    org: "Chase Center",
    url: "https://www.chasecenter.com/",
    partnerPath: "Suite or group tickets, pregame dinner in Mission Bay",
    assessment: "High energy and easy to understand. Cost can climb quickly.",
    bestFor: "Sports fans, premium casual night"
  },
  {
    id: "founder-run-club",
    name: "Founder Run Club + Coffee",
    category: "Wellness",
    attendees: "10-60",
    attendeeMin: 10,
    cost: "$",
    costRank: 1,
    time: "1-2 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 39,
    ycOnly: false,
    image: "./SF-founder-event-images/founder-run-club/01-Golden-Gate-Running-Club-group-run-with-a-friendly-social-feel.jpg",
    org: "Golden Gate Running Club",
    url: "https://www.goldengaterunningclub.org/weekly-runs",
    partnerPath: "Weekly route, pace groups, coffee sponsor, non-runner walking option",
    assessment: "Cheap, repeatable, and habit-forming. Excellent retention mechanics.",
    bestFor: "Recurring ritual, health, friend formation"
  },
  {
    id: "climbing-night",
    name: "Founder Climbing Night",
    category: "Wellness",
    attendees: "15-50",
    attendeeMin: 15,
    cost: "$$",
    costRank: 2,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 40,
    ycOnly: false,
    image: "./SF-founder-event-images/climbing-night/01-Movement-San-Francisco-rope-walls-and-climbing-terrain.jpg",
    org: "Movement San Francisco",
    url: "https://movementgyms.com/san-francisco/",
    partnerPath: "Gym group rate, intro class, post-climb food",
    assessment: "Good for interest-group matching and recurring friendships.",
    bestFor: "Community matching, active founders"
  },
  {
    id: "yoga-brunch",
    name: "Sunrise Yoga + Brunch with Views",
    category: "Wellness",
    attendees: "20-80",
    attendeeMin: 20,
    cost: "$$",
    costRank: 2,
    time: "2-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 41,
    ycOnly: false,
    image: "./SF-founder-event-images/yoga-brunch/01-Outdoor-Yoga-SF-beach-class-with-the-Golden-Gate-Bridge-in-view.png",
    org: "Outdoor Yoga SF",
    url: "https://www.outdoor-yoga.org/schedule",
    partnerPath: "Instructor, park permit if needed, brunch/coffee, non-yoga option",
    assessment: "Inclusive if framed gently. Avoid making wellness feel mandatory or performative.",
    bestFor: "Recovery, partner-friendly morning"
  },
  {
    id: "coastal-cleanup",
    name: "Coastal Cleanup Founder Volunteer Day",
    category: "Civic",
    attendees: "30-150",
    attendeeMin: 30,
    cost: "$",
    costRank: 1,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 42,
    ycOnly: false,
    image: "./SF-founder-event-images/coastal-cleanup/01-Ocean-Beach-cleanup-volunteers-with-buckets.webp",
    org: "California Coastal Commission",
    url: "https://www.coastal.ca.gov/publiced/ccd/ccd.html",
    partnerPath: "Volunteer site coordination, gloves/bags, picnic or tacos after",
    assessment: "Adds civic belonging and purpose. Best when paired with food/social time.",
    bestFor: "Service, team values, civic integration"
  },
  {
    id: "sunday-streets-founder-ride",
    name: "Sunday Streets Founder Ride",
    category: "Civic",
    attendees: "30-120",
    attendeeMin: 30,
    cost: "$-$$",
    costRank: 1,
    time: "3-5 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 43,
    ycOnly: false,
    image: "./SF-founder-event-images/sunday-streets-founder-ride/01-Open-street-play-and-activity-zone-at-Sunday-Streets-SF.jpg",
    org: "Sunday Streets SF",
    url: "https://sundaystreetssf.com/sponsor/",
    partnerPath: "Sponsor route, bike/walk crew, local business crawl",
    assessment: "Good civic fit and accessible. Lower exclusivity, so add a founder-host layer.",
    bestFor: "Neighborhood integration, families, civic support"
  },
  {
    id: "downtown-first-thursdays",
    name: "Downtown First Thursdays Founder Crawl",
    category: "Civic",
    attendees: "30-150",
    attendeeMin: 30,
    cost: "$-$$",
    costRank: 1,
    time: "2-4 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 44,
    ycOnly: false,
    image: "./SF-founder-event-images/downtown-first-thursdays/01-Downtown-First-Thursdays-street-crowd-on-2nd-Street.jpg",
    org: "Downtown First Thursdays",
    url: "https://www.dftsf.com/",
    partnerPath: "Meetup point, food/drink vouchers, afterparty, alumni guides",
    assessment: "Easy recurring activation. Needs a hosted layer to feel premium.",
    bestFor: "Downtown energy, broad founder community"
  },
  {
    id: "yerba-buena-festival",
    name: "Yerba Buena Gardens Festival Outing",
    category: "Culture",
    attendees: "20-100",
    attendeeMin: 20,
    cost: "$",
    costRank: 1,
    time: "1.5-3 hrs",
    timeRank: 1,
    commitment: "Low",
    priority: 45,
    ycOnly: false,
    image: "./SF-founder-event-images/yerba-buena-festival/01-Outdoor-concert-crowd-at-Yerba-Buena-Gardens-Festival.jpg",
    org: "Yerba Buena Gardens Festival",
    url: "https://ybgfestival.org/",
    partnerPath: "Founder meetup, picnic or nearby lunch, optional downtown office visit",
    assessment: "Free and accessible. Useful for downtown daytime programming.",
    bestFor: "Arts, easy culture, low-cost filler"
  },
  {
    id: "sandcastle-classic",
    name: "Leap Sandcastle Classic Founder Builder Day",
    category: "Play",
    attendees: "30-120",
    attendeeMin: 30,
    cost: "$-$$",
    costRank: 1,
    time: "3-5 hrs",
    timeRank: 2,
    commitment: "Medium",
    priority: 46,
    ycOnly: false,
    image: "./SF-founder-event-images/sandcastle-classic/01-Leap-Sandcastle-Classic-team-build-on-Ocean-Beach.jpg",
    org: "Leap Arts in Education",
    url: "https://leapsandcastleclassic.org/",
    partnerPath: "Team participation or hosted beach area, design challenge, food after",
    assessment: "Great metaphor for building and design. Seasonal and weather-dependent.",
    bestFor: "Play, families/partners, engineering creativity"
  },
  {
    id: "bay-area-passport",
    name: "Bay Area Passport Program",
    category: "Passport",
    attendees: "100-300",
    attendeeMin: 100,
    cost: "$$",
    costRank: 2,
    time: "Ongoing",
    timeRank: 3,
    commitment: "High",
    priority: 47,
    ycOnly: false,
    image: "./SF-founder-event-images/bay-area-passport/01-YC-founder-group-gathering-as-the-anchor-for-passport-style-programming.png",
    org: "Supabase / YC",
    url: "https://supabase.com/",
    partnerPath: "Physical or digital passport, stamps, prizes, completion dinner",
    assessment: "Turns retention into an ongoing adventure. Strong umbrella for smaller ideas.",
    bestFor: "Batch-long engagement, self-directed discovery"
  }
];

const SPONSOR_TARGETS = [
  ["Stern Grove Festival", "June-August Sundays", "10k+ per show", "Reserved tables, sponsor giveaways, founder picnic", "https://www.sterngrove.org/"],
  ["Hardly Strictly Bluegrass", "Early October", "600k-750k+ weekend", "Adjacent founder picnic; avoid in-festival branding", "https://hardlystrictlybluegrass.com/"],
  ["Sundown Cinema", "June-October", "Hundreds to low thousands", "Picnic kits, blanket zone, post-film drinks", "https://sfstandard.com/sundown-cinema/"],
  ["Litquake / Lit Crawl", "October 24, 2026 Lit Crawl", "~5,000 Lit Crawl", "Founder storytelling salon or literary tech track", "https://www.litquake.org/litcrawl"],
  ["Downtown First Thursdays", "Monthly through 2026", "Large monthly crowd", "Founder meetup point, food vouchers, afterparty", "https://www.dftsf.com/"],
  ["Sunday Streets", "Season dependent", "Thousands per route", "Sponsor route, founder bike/walk crew", "https://sundaystreetssf.com/sponsor/"],
  ["Outside Lands", "Aug. 7-9, 2026", "Massive ticketed festival", "VIP/cabana for premium subgroup", "https://sfoutsidelands.com/"],
  ["Portola", "Sept. 26-27, 2026", "Large 21+ festival", "Dogpatch founder meetup before festival", "https://portolamusicfestival.com/"]
];

const YC_ACCESS = [
  ["Founders Who Stayed dinner", "10-20", "$$$", "YC alumni who chose SF long-term", "Directly answers retention with credibility."],
  ["10 Years Later salon", "40-80", "$$", "Alumni with families, communities, hobbies", "Reframes SF as a durable home."],
  ["Adopt-a-Founder matching", "1:1 pods", "$-$$", "Alumni/operators willing to host check-ins", "Converts events into relationship infrastructure."],
  ["Founder house crawl", "30-60", "$$", "Alumni homes across SF neighborhoods", "Shows startup life embedded in neighborhoods."],
  ["Early employee dinners", "12-24", "$$$", "Early Stripe, Airbnb, DoorDash, Rippling, etc.", "Turns density into concrete stories."],
  ["AI frontier operator visits", "10-20", "$-$$", "OpenAI, Anthropic, Databricks, Scale-type access", "Powerful but schedule-sensitive."],
  ["Passport completion dinner", "30-80", "$$$", "Alumni guests and closing venue", "Rewards exploration and gives a post-batch reason to stay."],
  ["100 Smart People salon", "80-150", "$$", "Alumni plus scientists, writers, builders", "Demonstrates intellectual density without pitches."]
];

const CALENDAR = [
  ["Week 1", "Golden Gate Park founder + alumni picnic", "100-200", "Easy, welcoming batch kickoff."],
  ["Week 2", "Mission murals + food tour", "30-50", "Split into pods with local guides."],
  ["Week 3", "Founders Who Stayed dinners", "10-20/table", "Multiple dinners by sector or life stage."],
  ["Week 4", "Wave Organ / Crissy sunset", "20-40", "Low-cost recurring ritual."],
  ["Week 5", "Angel Island ferry + picnic", "25-60", "Include a low-hike alternate plan."],
  ["Week 6", "Makerspace + arcade night", "30-60", "Supabase-coded builder signature."],
  ["Week 7", "Chinatown night walk + banquet", "40-80", "Strong decompression and cross-cohort mixing."],
  ["Demo Day", "Why We Stayed dinner", "40-80", "Alumni-heavy retention close, not investor-heavy."]
];

const CATEGORY_GALLERY_FALLBACKS = {
  "YC Access": [
    { url: "https://live.staticflickr.com/65535/53524858825_ce3ce3c1f1_b.jpg", caption: "Real founders' dinner room with candlelit tables", source: "Flickr / St Anne's College" },
    { url: "https://cdn.prod.website-files.com/5fc64ac4a881e95acd1055c0/687f77a2a7ea3affc0899147__DSC5442.jpg", caption: "Small group toast around a shared table", source: "Merlijn" },
    { url: "https://www.ycombinator.com/blog/content/images/2023/04/summerconf.png", caption: "YC founder event conversation format", source: "Y Combinator" }
  ],
  Community: [
    { url: "https://s.hdnux.com/photos/01/43/76/62/26209414/7/rawImage.jpg", caption: "Golden Gate Park picnic gathering", source: "San Francisco Chronicle" },
    { url: "https://live.staticflickr.com/7450/10011017905_4e583b0988_b.jpg", caption: "Bright San Francisco picnic spread with blankets", source: "Flickr / Markus Spiering" },
    { url: "https://live.staticflickr.com/1541/25888739384_26f5d1712a_b.jpg", caption: "Conservatory of Flowers in Golden Gate Park", source: "Openverse / Flickr" }
  ],
  Nature: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Angel_Island_%28California%29.jpg", caption: "Angel Island with Bay views", source: "Wikimedia Commons" },
    { url: "https://www.nps.gov/goga/learn/historyculture/images/Lands-End-Labyrinth.png", caption: "Land's End labyrinth at sunset", source: "National Park Service" },
    { url: "https://www.parksconservancy.org/sites/default/files/styles/card_2x/public/resource-gallery/OCBE_121021_FS_10_2x1_0.jpg.webp?itok=HeLYFz-q", caption: "Ocean Beach shoreline and surf", source: "Golden Gate National Parks Conservancy" }
  ],
  Culture: [
    { url: "https://live.staticflickr.com/8475/8366012364_6045b70f71_b.jpg", caption: "Clarion Alley mural corridor in the Mission District", source: "Flickr / sswj" },
    { url: "https://live.staticflickr.com/8733/28447344565_1d7e183d21_b.jpg", caption: "Minnesota Street Project gallery and studio hop", source: "Flickr" },
    { url: "https://static.wixstatic.com/media/07f840_f4fa7893be7e4d9d9ac2702aa8a7db38~mv2.jpg", caption: "Litquake reading in a packed venue", source: "Litquake" }
  ],
  Dinner: [
    { url: "https://cdn.prod.website-files.com/5fc64ac4a881e95acd1055c0/6874ef1fc4b182a4227fecb9__DSC7859.jpg", caption: "Family-style plates and wine in a cozy setting", source: "Merlijn" },
    { url: "https://live.staticflickr.com/65535/49716314866_19ef1d29a7_b.jpg", caption: "Moody Bay Area supper-club room", source: "Flickr / Thomas Hawk" },
    { url: "https://live.staticflickr.com/3895/14347291146_65e8e440f9_b.jpg", caption: "San Francisco courtyard party with long tables", source: "Flickr / SPUR" }
  ],
  Sponsor: [
    { url: "https://images.squarespace-cdn.com/content/v1/60412e150e5c1277769df1a8/c50386ae-461b-402e-a091-55990af3ab7a/Tegan+and+Sara+pkp-0346185+%286%29.jpg?format=1500w", caption: "Reserved table seating at Stern Grove Festival", source: "Stern Grove Festival" },
    { url: "https://hardlystrictlybluegrass.com/wp-content/uploads/2025/10/HSB25_Friday_Selects-9101.jpg", caption: "Hardly Strictly Bluegrass stage and crowd", source: "Hardly Strictly Bluegrass" },
    { url: "https://fleetweeksf.org/wp-content/uploads/2025/01/BA-Golden-Gate-Bridge.jpg", caption: "Blue Angels over the Golden Gate Bridge", source: "San Francisco Fleet Week" }
  ],
  Builder: [
    { url: "https://museemecanique.com/static/media/landing_0004_f.636cb665.jpg", caption: "Musée Mécanique vintage arcade floor", source: "Musée Mécanique" },
    { url: "https://computerhistory.org/wp-content/uploads/2021/06/DEC_PDP-1_Demo_Lab_at_Mountain_Views_Computer_History_Museum-540x406-c-default.jpg", caption: "Computer History Museum demo lab", source: "Computer History Museum" },
    { url: "https://ampf.stanford.edu/wp-content/uploads/2023/05/IMG_4716-2-1024x534.png", caption: "Stanford AMPF prototyping floor", source: "Stanford AMPF" }
  ],
  Water: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Glorious_Sunset_over_the_Golden_Gate_Bridge_with_Alcatraz_Island_in_Shadow.jpg", caption: "Sunset sail with Golden Gate Bridge", source: "Wikimedia Commons" },
    { url: "https://www.blazingsaddles.com/sites/default/files/styles/bike_category_banner/public/cover-images/2026-02/0128blazingsaddlesbridgeshoot-5_0.jpg?h=6c6dcce2&itok=svQEQUPk", caption: "Cycling the Golden Gate Bridge", source: "Blazing Saddles" },
    { url: "https://live.staticflickr.com/7395/12461616355_3f5f875b57_b.jpg", caption: "Kayaking in Richardson Bay", source: "Flickr" }
  ],
  Food: [
    { url: "https://offloadmedia.feverup.com/secretsanfrancisco.com/wp-content/uploads/2020/02/04092139/accionlatinasf--e1581687326796.jpg", caption: "Mission District murals and food tour", source: "Secret San Francisco" },
    { url: "https://live.staticflickr.com/65535/32930792147_df59434490_b.jpg", caption: "Chinatown Grant Avenue lanterns at night", source: "Flickr" },
    { url: "https://foodwise.org/wp-content/uploads/2026/01/Ferry_Plaza_FM_Photo_Logo_Foodwise.jpg", caption: "Ferry Building Farmers Market", source: "Foodwise" }
  ],
  Sports: [
    { url: "https://www.sftourismtips.com/images/giants-oracle-july.jpg", caption: "Oracle Park waterfront baseball", source: "SF Tourism Tips" },
    { url: "https://www.sftourismtips.com/images/warriors-march-sports.jpg", caption: "Warriors game at Chase Center", source: "SF Tourism Tips" },
    { url: "https://leapsandcastleclassic.org/wp-content/uploads/2016/05/22643441870_f1f416a4d0_o-1024x683.jpg", caption: "Leap Sandcastle Classic competition", source: "Leap Arts in Education" }
  ],
  Wellness: [
    { url: "https://images.squarespace-cdn.com/content/v1/6689abcbd4412e3dec1377be/2cf367ef-5d85-48ca-8299-1314ebc32f1d/IMG_5674.jpg", caption: "Golden Gate Running Club group run", source: "Golden Gate Running Club" },
    { url: "https://movementgyms.com/app/uploads/sites/30/2025/12/rope-climbing_SFO_MVMT_2025_039-1600x1067.jpg", caption: "Movement SF climbing gym", source: "Movement San Francisco" },
    { url: "https://wp.presidio.gov/wp-content/uploads/2025/07/Presidio_OM_Image-by-Hollero-1080px.jpg", caption: "Presidio meadow picnic with bridge views", source: "Presidio Trust" }
  ],
  Civic: [
    { url: "https://www.parksconservancy.org/sites/default/files/styles/card_2x/public/resource-gallery/OCBE_20190921_RCW_3_2x1.jpg.webp?itok=IjdKQQL5", caption: "Coastal cleanup volunteer day", source: "Golden Gate National Parks Conservancy" },
    { url: "https://sundaystreetssf.com/wp-content/uploads/2017/01/WEB_EX_GAMEROS_1057.jpg", caption: "Sunday Streets SF open-road activation", source: "Sunday Streets SF" },
    { url: "https://images.squarespace-cdn.com/content/v1/66035432ff74660bfd13c29e/056a8945-e4ce-420d-a106-dfab47da4dd2/CrowdShots_3.jpg", caption: "Downtown First Thursdays founder crawl", source: "Downtown First Thursdays" }
  ],
  Play: [
    { url: "https://www.inside-guide-to-san-francisco-tourism.com/images/seward-slides-top-view.jpg", caption: "Seward Street slides top view", source: "Inside Guide to SF" },
    { url: "https://museemecanique.com/static/media/landing_0002_f.307a75b7.jpg", caption: "Visitors playing vintage arcade machines", source: "Musée Mécanique" },
    { url: "https://palace-games.com/wp-content/uploads/2025/03/Attraction_Carousel_1.jpg", caption: "Palace Games immersive escape room", source: "Palace Games" }
  ],
  Passport: [
    { url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Angel_Island_%28California%29.jpg", caption: "Angel Island Bay Area discovery", source: "Wikimedia Commons" },
    { url: "https://live.staticflickr.com/3910/14594555866_a50b5f765d_b.jpg", caption: "16th Avenue Tiled Steps urban discovery", source: "Flickr" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Golden_Gate_Bridge_from_Battery_Spencer.jpg", caption: "Golden Gate Bridge from Battery Spencer", source: "Wikimedia Commons" }
  ]
};

function isSpecificImage(event, image) {
  const caption = (image.caption || "").toLowerCase();
  if (caption.includes("representative view")) return false;
  const stop = new Set(["founder", "founders", "san", "francisco", "event", "with", "night", "group", "table", "tour", "walk"]);
  const tokens = `${event.name} ${event.org} ${event.id}`
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(token => token.length > 4 && !stop.has(token));
  return tokens.some(token => caption.includes(token));
}

function addUniqueGalleryImage(output, seen, image) {
  if (!image || !image.url || seen.has(image.url)) return;
  seen.add(image.url);
  output.push(image);
}

function galleryFor(event) {
  const gallery = (window.EVENT_GALLERIES && window.EVENT_GALLERIES[event.id]) || [];
  return gallery.filter(item => item && item.url).slice(0, 4);
}

function descriptionFor(event) {
  const special = {
    "founders-stayed": "A private YC-alumni dinner in a quiet room or speakeasy, built around the question of when each guest could have left San Francisco and chose not to. The format is meant to surface concrete life decisions, not polished startup advice.",
    "palace-games-attraction": "A 120-minute private escape room for 4-8 players at Palace Games in the Palace of Fine Arts, where a restored 1915 World's Fair attraction turns into a high-collaboration puzzle run. It is private-room only, team-oriented, and built for founders who like dense problem solving.",
    "ggp-picnic": "A loose Golden Gate Park gathering with catering, alumni hosts, and open lawn time so founders can socialize without the event feeling overproduced. It is the easiest scalable tradition in the mix.",
    "angel-island": "A ferry ride out to Angel Island followed by a summit hike and picnic with skyline views of San Francisco, Marin, and the Bay. The payoff is the 'this is actually close' reaction.",
    "mission-murals": "A walking route through Mission District murals and taquerias, led by local guides so the neighborhood feels lived-in rather than curated for tourists. The mix of public art and food makes the city immediately legible.",
    "chinatown-banquet": "A Chinatown night walk that ends with a banquet room meal, lazy Susan style, so the group moves from street-level discovery into shared-table conversation. It is especially strong for international founders.",
    "stern-grove": "A reserved-table or founder-picnic setup around a free Stern Grove concert, using the park's amphitheater and summer programming as the backdrop. The value is the special access layer, not the ticket itself.",
    "hardly-strictly": "A founder picnic on the edge of Hardly Strictly Bluegrass, using the park and free festival energy to create a community ritual without forcing branding into the middle of it. It works best as a civic-adjacent host layer.",
    "exploratorium-after-dark": "A group night at the Exploratorium with drinks, wandering exhibits, and prompts that encourage people to talk about what surprised them. It is curiosity first, networking second."
  };
  if (special[event.id]) return special[event.id];

  const categoryTemplates = {
    "YC Access": `A small YC-alumni-driven event built around ${event.partnerPath.toLowerCase()}. It is meant to make the Bay Area feel personal and specific, not generic.`,
    "Community": `A community-facing gathering centered on ${event.partnerPath.toLowerCase()}. The shape is casual enough to feel native, but structured enough to be memorable.`,
    "Nature": `An outdoors-first outing that uses ${event.partnerPath.toLowerCase()} to show how quickly the Bay Area opens up once you leave the office. The event should end with food or a quiet pause.`,
    "Water": `A Bay-focused outing built around ${event.partnerPath.toLowerCase()}. The water setting is the point: it makes the region feel like a place people actually live, not just work.`,
    "Culture": `A culture-first event built around ${event.partnerPath.toLowerCase()}. It is designed to show that SF has depth beyond startup offices and customer meetings.`,
    "Dinner": `A shared-table event built around ${event.partnerPath.toLowerCase()}. The point is to slow people down long enough for real conversation.`,
    "Sponsor": `A special-access activation that layers founder hospitality on top of ${event.partnerPath.toLowerCase()}. It works best when Supabase is the host layer, not the headline.`,
    "Builder": `A builder-minded outing built around ${event.partnerPath.toLowerCase()}. It should feel hands-on, collaborative, and a little nerdy in the best way.`,
    "Sports": `A low-friction social event built around ${event.partnerPath.toLowerCase()}. The game or arena gives the group an easy shared reference point.`,
    "Wellness": `A recovery-oriented event built around ${event.partnerPath.toLowerCase()}. The goal is to make founder life feel sustainable, not just intense.`,
    "Civic": `A civic-facing event built around ${event.partnerPath.toLowerCase()}. It gives founders a reason to feel embedded in the city instead of only passing through it.`,
    "Play": `A playful event built around ${event.partnerPath.toLowerCase()}. It should be light, tactile, and easy to remember afterwards.`,
    "Passport": `A batch-long exploration program built around ${event.partnerPath.toLowerCase()}. It turns smaller outings into a larger retention ritual.`
  };

  const base = categoryTemplates[event.category] || `An event built around ${event.partnerPath.toLowerCase()}.`;
  const tail = event.bestFor ? `Best for ${event.bestFor.toLowerCase()}.` : "";
  return `${base} ${tail}`.replace(/\s+/g, " ").trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const state = {
    query: "",
    category: "All",
    cost: "All",
    time: "All",
    audience: "All",
    ycOnly: false,
    sort: "priority"
  };

  const categories = ["All", ...new Set(EVENT_CATALOG.map(event => event.category))];
  const costs = ["All", "$", "$$", "$$$", "$$$$"];
  const times = ["All", "Low", "Medium", "High"];
  const audiences = ["All", "Small", "Medium", "Large"];

  const byId = id => document.getElementById(id);
  const eventGrid = byId("event-grid");

  byId("total-events").textContent = EVENT_CATALOG.length;
  byId("sponsor-count").textContent = SPONSOR_TARGETS.length;
  byId("yc-count").textContent = YC_ACCESS.length;

  function makeSegments(containerId, values, stateKey) {
    const container = byId(containerId);
    container.innerHTML = values.map(value => `
      <button class="${state[stateKey] === value ? "active" : ""}" data-value="${value}" type="button">${value}</button>
    `).join("");
    container.addEventListener("click", event => {
      const button = event.target.closest("button");
      if (!button) return;
      state[stateKey] = button.dataset.value;
      render();
    });
  }

  makeSegments("category-filters", categories, "category");
  makeSegments("cost-filters", costs, "cost");
  makeSegments("time-filters", times, "time");
  makeSegments("audience-filters", audiences, "audience");

  const filtersToggle = byId("filters-toggle");
  const filterControls = byId("filter-controls");
  filtersToggle.addEventListener("click", () => {
    const willShow = filterControls.hidden;
    filterControls.hidden = !willShow;
    filtersToggle.setAttribute("aria-expanded", String(willShow));
    filtersToggle.textContent = willShow ? "Less" : "More";
  });

  byId("search-input").addEventListener("input", event => {
    state.query = event.target.value.toLowerCase().trim();
    render();
  });
  byId("yc-toggle").addEventListener("change", event => {
    state.ycOnly = event.target.checked;
    render();
  });
  byId("sort-select").addEventListener("change", event => {
    state.sort = event.target.value;
    render();
  });
  byId("clear-filters").addEventListener("click", () => {
    state.query = "";
    state.category = "All";
    state.cost = "All";
    state.time = "All";
    state.audience = "All";
    state.ycOnly = false;
    filterControls.hidden = true;
    filtersToggle.setAttribute("aria-expanded", "false");
    filtersToggle.textContent = "More";
    byId("search-input").value = "";
    byId("yc-toggle").checked = false;
    render();
  });

  function filteredEvents() {
    return EVENT_CATALOG
      .filter(event => {
        const haystack = `${event.name} ${event.category} ${event.org} ${event.partnerPath} ${event.assessment} ${event.bestFor}`.toLowerCase();
        const audienceMatch = state.audience === "All" ||
          (state.audience === "Small" && event.attendeeMin < 25) ||
          (state.audience === "Medium" && event.attendeeMin >= 25 && event.attendeeMin < 75) ||
          (state.audience === "Large" && event.attendeeMin >= 75);

        const costMatch = state.cost === "All" || event.costRank === state.cost.length;

        return (!state.query || haystack.includes(state.query)) &&
          (state.category === "All" || event.category === state.category) &&
          costMatch &&
          (state.time === "All" || event.commitment === state.time) &&
          audienceMatch &&
          (!state.ycOnly || event.ycOnly);
      })
      .sort((a, b) => {
        if (state.sort === "cost") return a.costRank - b.costRank || a.priority - b.priority;
        if (state.sort === "attendees") return b.attendeeMin - a.attendeeMin;
        if (state.sort === "time") return a.timeRank - b.timeRank || a.priority - b.priority;
        return a.priority - b.priority;
      });
  }

  function renderSegments() {
    [["category-filters", "category"], ["cost-filters", "cost"], ["time-filters", "time"], ["audience-filters", "audience"]].forEach(([id, key]) => {
      byId(id).querySelectorAll("button").forEach(button => {
        button.classList.toggle("active", button.dataset.value === state[key]);
      });
    });
  }

  function renderCards(events) {
    byId("result-count").textContent = `Showing ${events.length} of ${EVENT_CATALOG.length} events`;
    eventGrid.innerHTML = events.map(event => {
    const coverImage = event.image || FALLBACK_IMAGE;
      return `
        <article class="event-card">
          <div class="event-image">
            <img src="${coverImage}" alt="${event.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
            <span>${event.category}</span>
          </div>
          <div class="event-body">
            <div class="event-topline">
              <strong>${event.attendees}</strong>
              <strong>${event.cost}</strong>
              <strong>${event.time}</strong>
            </div>
            <h3>${event.name}</h3>
            <p>${descriptionFor(event)}</p>
            <dl>
              <div><dt>Partner path</dt><dd>${event.partnerPath}</dd></div>
              <div><dt>Best for</dt><dd>${event.bestFor}</dd></div>
            </dl>
            <div class="card-actions">
              <a class="primary-button link-button" href="${event.url}" target="_blank" rel="noopener noreferrer">Org info</a>
              <button class="secondary-button detail-button" data-id="${event.id}" type="button">Details</button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderSponsorTargets() {
    byId("sponsor-grid").innerHTML = SPONSOR_TARGETS.map(([name, timing, scale, angle, url]) => `
      <article class="opportunity-card">
        <h3>${name}</h3>
        <p>${angle}</p>
        <div class="mini-meta">
          <span>${timing}</span>
          <span>${scale}</span>
        </div>
        <a href="${url}" target="_blank" rel="noopener noreferrer">Event org info</a>
      </article>
    `).join("");
  }

  function openDialog(event) {
    const dialog = byId("event-dialog");
    const coverImage = event.image || FALLBACK_IMAGE;
    dialog.innerHTML = `
      <div class="dialog-media"><img src="${coverImage}" alt="${event.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"><button type="button" aria-label="Close">Close</button></div>
      <div class="dialog-content">
        <div class="event-topline"><strong>${event.attendees}</strong><strong>${event.cost}</strong><strong>${event.time}</strong><strong>${event.category}</strong></div>
        <h2>${event.name}</h2>
        <p>${descriptionFor(event)}</p>
        <div class="dialog-text-block">
          <h4>Strategic read</h4>
          <p>${event.assessment}</p>
        </div>
        <dl>
          <div><dt>Partner path</dt><dd>${event.partnerPath}</dd></div>
          <div><dt>Best for</dt><dd>${event.bestFor}</dd></div>
          <div><dt>YC-only access</dt><dd>${event.ycOnly ? "Yes - requires alumni/operator relationships" : "No - can be run with public partners"}</dd></div>
        </dl>
        <a class="primary-button" href="${event.url}" target="_blank" rel="noopener noreferrer">Open organization info</a>
      </div>
    `;
    dialog.querySelector("button").addEventListener("click", () => dialog.close());
    dialog.showModal();
  }

  document.addEventListener("click", event => {
    const detail = event.target.closest(".detail-button");

    if (detail) {
      openDialog(EVENT_CATALOG.find(item => item.id === detail.dataset.id));
    }
  });

  function render() {
    renderSegments();
    const events = filteredEvents();
    renderCards(events);
  }

  renderSponsorTargets();
  render();
});
