export interface Journey {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  isPremium?: boolean;
}

export const spiritual: Journey[] = [
  { 
    title: "Kailash Mansarovar", 
    subtitle: "The ultimate pilgrimage to the sacred Mount Kailash and Lake Mansarovar.", 
    duration: "14 Days", 
    price: "₹1,85,000+", 
    image: "/journeys/kailash_mansarovar.png", 
    isPremium: true 
  },
  { 
    title: "Char Dham Yatra", 
    subtitle: "A divine circuit of Kedarnath, Badrinath, Gangotri, and Yamunotri.", 
    duration: "12 Days", 
    price: "₹65,000+", 
    image: "/journeys/chardham.png" 
  },
  { 
    title: "Adi Kailash", 
    subtitle: "Witness the mystical Om Parvat, the natural manifestation of the sacred Om.", 
    duration: "9 Days", 
    price: "₹45,000+", 
    image: "/journeys/adi_kailash.png" 
  },
  { 
    title: "Dharamshala", 
    subtitle: "Explore the serene monasteries and Tibetan culture in the Kangra Valley.", 
    duration: "4 Days", 
    price: "₹14,000+", 
    image: "/journeys/dharmashala.png" 
  },
];

export const adventure: Journey[] = [
  { 
    title: "Lahaul & Spiti", 
    subtitle: "Cross high mountain passes to discover ancient monasteries in a cold desert.", 
    duration: "8 Days", 
    price: "₹35,000+", 
    image: "/journeys/lahaul_spiti.png" 
  },
  { 
    title: "Ladakh", 
    subtitle: "The Land of High Passes, featuring turquoise lakes and rugged mountain terrain.", 
    duration: "10 Days", 
    price: "₹45,000+", 
    image: "/journeys/ladakh.png" 
  },
  { 
    title: "Manali", 
    subtitle: "Adventure sports and snow-capped peaks in the heart of the Beas Valley.", 
    duration: "5 Days", 
    price: "₹18,000+", 
    image: "/journeys/manali.png" 
  },
];

export const leisure: Journey[] = [
  { 
    title: "Kerala", 
    subtitle: "Relax on traditional houseboats in the emerald backwaters of South India.", 
    duration: "7 Days", 
    price: "₹28,000+", 
    image: "/journeys/kerala.png" 
  },
  { 
    title: "Shimla", 
    subtitle: "Walk through colonial history and pine forests in the Queen of Hills.", 
    duration: "4 Days", 
    price: "₹15,000+", 
    image: "/journeys/shimla.png" 
  },
  { 
    title: "Goa", 
    subtitle: "Enjoy the perfect blend of sun-kissed beaches and vibrant Portuguese heritage.", 
    duration: "5 Days", 
    price: "₹25,000+", 
    image: "/journeys/goa.png" 
  },
  { 
    title: "Andamans", 
    subtitle: "Discover coral reefs and crystal clear waters in this tropical paradise.", 
    duration: "6 Days", 
    price: "₹40,000+", 
    image: "/journeys/andaman.png" 
  },
  { 
    title: "Dalhousie", 
    subtitle: "Serene mountain views and Victorian architecture in a quiet hill station.", 
    duration: "4 Days", 
    price: "₹16,000+", 
    image: "/journeys/dalhousie.png" 
  },
  { 
    title: "Nainital", 
    subtitle: "The Lake District of India, surrounded by seven hills and dotted with beautiful lakes.", 
    duration: "3 Days", 
    price: "₹12,000+", 
    image: "/journeys/nainital.png" 
  },
];

export const allTrips = [...spiritual, ...adventure, ...leisure];
