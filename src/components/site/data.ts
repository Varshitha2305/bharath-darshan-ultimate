import heroTemple from "@/assets/hero-temple.jpg";
import destKedarnath from "@/assets/dest-kedarnath.jpg";
import destKashi from "@/assets/dest-kashi.jpg";
import destTirupati from "@/assets/dest-tirupati.jpg";
import destRameswaram from "@/assets/dest-rameswaram.jpg";
import destAyodhya from "@/assets/dest-ayodhya.jpg";
import destBadrinath from "@/assets/dest-badrinath.jpg";
import destDwarka from "@/assets/dest-dwarka.jpg";
import destSomnath from "@/assets/dest-somnath.jpg";
import destMadurai from "@/assets/dest-madurai.jpg";
import destShirdi from "@/assets/dest-shirdi.jpg";
import destSabarimala from "@/assets/dest-sabarimala.jpg";
import galleryBus from "@/assets/gallery-bus.jpg";
import galleryHotel from "@/assets/gallery-hotel.jpg";
import galleryAarti from "@/assets/gallery-aarti.jpg";
import galleryOffering from "@/assets/gallery-offering.jpg";

export const IMAGES = {
  hero: heroTemple,
  kedarnath: destKedarnath,
  kashi: destKashi,
  tirupati: destTirupati,
  rameswaram: destRameswaram,
  ayodhya: destAyodhya,
  badrinath: destBadrinath,
  dwarka: destDwarka,
  somnath: destSomnath,
  madurai: destMadurai,
  shirdi: destShirdi,
  sabarimala: destSabarimala,
  bus: galleryBus,
  hotel: galleryHotel,
  aarti: galleryAarti,
  offering: galleryOffering,
};

export type Destination = {
  id: string;
  name: string;
  region: string;
  image: string;
  desc: string;
  highlights: string[];
};

export const DESTINATIONS: Destination[] = [
  { id: "tirupati", name: "Tirupati", region: "Andhra Pradesh", image: IMAGES.tirupati, desc: "Darshan of Lord Venkateswara at the sacred Tirumala hills — the world's most visited pilgrimage.", highlights: ["Special Darshan", "Laddu Prasadam", "Padmavathi Temple"] },
  { id: "kashi", name: "Kashi (Varanasi)", region: "Uttar Pradesh", image: IMAGES.kashi, desc: "The eternal city on the Ganges. Witness the Ganga Aarti and seek blessings at Kashi Vishwanath.", highlights: ["Ganga Aarti", "Vishwanath Darshan", "Boat Rides"] },
  { id: "ayodhya", name: "Ayodhya", region: "Uttar Pradesh", image: IMAGES.ayodhya, desc: "The birthplace of Lord Rama, now home to the majestic Ram Mandir and ghats of the Saryu.", highlights: ["Ram Mandir", "Hanuman Garhi", "Saryu Aarti"] },
  { id: "kedarnath", name: "Kedarnath", region: "Uttarakhand", image: IMAGES.kedarnath, desc: "A Jyotirlinga temple nestled in the Himalayas — one of the holiest Shiva shrines.", highlights: ["Jyotirlinga", "Himalayan Trek", "Helicopter Options"] },
  { id: "badrinath", name: "Badrinath", region: "Uttarakhand", image: IMAGES.badrinath, desc: "The abode of Lord Vishnu, framed by the Neelkanth peak and the roaring Alaknanda.", highlights: ["Char Dham", "Tapt Kund", "Mana Village"] },
  { id: "rameswaram", name: "Rameswaram", region: "Tamil Nadu", image: IMAGES.rameswaram, desc: "Walk the longest temple corridor in India and complete the sacred Chennai Dham.", highlights: ["Ramanathaswamy", "22 Sacred Wells", "Dhanushkodi"] },
  { id: "madurai", name: "Madurai", region: "Tamil Nadu", image: IMAGES.madurai, desc: "The temple city of Meenakshi Amman — a living masterpiece of Dravidian architecture.", highlights: ["Meenakshi Temple", "Night Aarti", "Heritage Walk"] },
  { id: "dwarka", name: "Dwarka", region: "Gujarat", image: IMAGES.dwarka, desc: "The kingdom of Lord Krishna by the Arabian Sea, one of the four Char Dham shrines.", highlights: ["Dwarkadhish", "Bet Dwarka", "Nageshwar Jyotirlinga"] },
  { id: "somnath", name: "Somnath", region: "Gujarat", image: IMAGES.somnath, desc: "The first among the twelve Jyotirlingas, standing timelessly by the roaring Arabian Sea.", highlights: ["First Jyotirlinga", "Light & Sound", "Beach Aarti"] },
  { id: "shirdi", name: "Shirdi", region: "Maharashtra", image: IMAGES.shirdi, desc: "Home of Sai Baba — a place of devotion, humility and boundless faith.", highlights: ["Samadhi Mandir", "Dwarkamai", "Chavadi"] },
  { id: "sabarimala", name: "Sabarimala", region: "Kerala", image: IMAGES.sabarimala, desc: "A forest hill shrine of Lord Ayyappa — a pilgrimage of vratham and inner discipline.", highlights: ["Ayyappa Darshan", "18 Steps", "Guided Vratham"] },
];

export type Package = {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  badge?: string;
  highlights: string[];
  facilities: string[];
  desc: string;
};

export const PACKAGES: Package[] = [
  { id: "tirupati-vip", name: "Tirupati Special Darshan", duration: "3 Days · 2 Nights", price: "₹18,900", image: IMAGES.tirupati, badge: "Signature", desc: "Curated VIP darshan of Sri Venkateswara with premium stay near Tirumala.", highlights: ["Sheeghra Darshan", "Padmavathi Temple", "Sri Kalahasti add-on"], facilities: ["4-Star Hotel", "AC Volvo", "Veg Meals", "Priest Assistance"] },
  { id: "south-temple", name: "South India Temple Tour", duration: "9 Days · 8 Nights", price: "₹54,500", image: IMAGES.madurai, badge: "Bestseller", desc: "A grand circuit of the five great Dravidian temples of South India.", highlights: ["Madurai", "Rameswaram", "Kanyakumari", "Trivandrum"], facilities: ["Heritage Stays", "Volvo AC Coach", "Guide", "All Meals"] },
  { id: "char-dham", name: "Char Dham Yatra", duration: "11 Days · 10 Nights", price: "₹79,900", image: IMAGES.badrinath, badge: "Himalayan", desc: "The holy circuit — Yamunotri, Gangotri, Kedarnath, Badrinath — with helicopter options.", highlights: ["4 Dhams", "Helicopter Add-ons", "Priest Assistance"], facilities: ["Premium Lodges", "Oxygen Support", "Sattvik Meals", "24×7 Assistance"] },
  { id: "kashi-journey", name: "Kashi Spiritual Journey", duration: "5 Days · 4 Nights", price: "₹28,600", image: IMAGES.kashi, desc: "Live the timeless rhythm of Varanasi with private Ganga Aarti seating and Ayodhya add-on.", highlights: ["Ganga Aarti", "Ayodhya Ram Mandir", "Prayagraj Sangam"], facilities: ["Riverside Stay", "AC Sedan", "Guide", "Aarti Priority"] },
  { id: "jyotirlinga", name: "Jyotirlinga Yatra", duration: "14 Days · 13 Nights", price: "₹98,400", image: IMAGES.somnath, badge: "Epic", desc: "A pan-India journey to all twelve Jyotirlingas with premium hospitality.", highlights: ["12 Jyotirlingas", "Cultural Nights", "Local Cuisines"], facilities: ["4-Star Hotels", "Flights + Coach", "Guide", "Sattvik Meals"] },
  { id: "rameswaram", name: "Rameswaram Pilgrimage", duration: "4 Days · 3 Nights", price: "₹22,300", image: IMAGES.rameswaram, desc: "Complete the sacred Ramanathaswamy rituals with expert priests and coastal stays.", highlights: ["22 Wells Ritual", "Dhanushkodi", "Pamban Bridge"], facilities: ["Beach Resort", "AC Cab", "Priest Support", "All Meals"] },
];

export const TESTIMONIALS = [
  { name: "Ramesh & Lakshmi Iyer", city: "Chennai", stars: 5, text: "Our Char Dham journey was seamless. The team looked after our every need — even at 12,000 feet. This is how a pilgrimage should feel." },
  { name: "Suresh Reddy", city: "Hyderabad", stars: 5, text: "The Tirupati VIP darshan arrangements were flawless. Not once did we feel rushed. Truly a premium spiritual experience." },
  { name: "Anjali Sharma", city: "Delhi", stars: 5, text: "From the Volvo coach to the riverside hotel in Kashi, everything was thoughtful. The Ganga Aarti seating alone was worth it." },
  { name: "Prakash Nair", city: "Bengaluru", stars: 5, text: "We travelled with our parents (age 74 and 79). The team's care, patience and warmth made this our most cherished trip." },
  { name: "Meera Deshmukh", city: "Pune", stars: 5, text: "The Jyotirlinga Yatra was extraordinary. Beautifully organised, spiritually rich, and never once felt like a rushed tour bus." },
  { name: "Vikram Menon", city: "Kochi", stars: 5, text: "The most professional pilgrimage operator I've travelled with. Elegant details, real devotion, zero compromises." },
];

export const FAQ_HOME = [
  { q: "What makes Bharath Darshan Ultimate a premium pilgrimage company?", a: "We combine hand-picked heritage stays, seasoned priests, curated darshan access and small-group travel — so every yatra feels dignified, restful and spiritually complete." },
  { q: "Do you arrange special or VIP darshan?", a: "Yes. For most major temples (Tirupati, Kashi Vishwanath, Somnath, Kedarnath and more) we arrange priority or protocol darshan wherever permissible, along with expert priests." },
  { q: "Are your tours suitable for senior citizens?", a: "Absolutely. A large share of our travellers are seniors. We provide oxygen support on Himalayan routes, wheelchair-friendly options, sattvik meals and slower-paced itineraries." },
  { q: "What is included in a typical package?", a: "Premium AC transportation, hand-picked hotels, sattvik meals, temple entry assistance, priest coordination, expert guides and 24×7 on-tour support." },
  { q: "Can you customise a private yatra for our family?", a: "Yes. Every package can be tailored — dates, dhams, hotel category, private vehicle, and add-ons like helicopter darshan. Share your wish list and we'll craft it." },
  { q: "How do I book and what are the payment terms?", a: "Reach us via the contact form, phone or WhatsApp. A 25% advance secures your dates, with the balance due 15 days prior to travel. Full refunds up to 30 days prior." },
];
