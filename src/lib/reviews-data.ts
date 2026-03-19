export type Review = {
  id: string;
  author: string;
  badge: string; // e.g. "Local Guide · 28 reviews · 149 photos"
  date: string;
  rating: number; // 1-5
  pricePerPerson?: string;
  body: string;
  details?: {
    food?: number;
    service?: number;
    atmosphere?: number;
    reservation?: string;
    waitTime?: string;
    seatingType?: string;
    parking?: string;
    parkingOptions?: string;
    noiseLevel?: string;
  };
};

export const reviews: Review[] = [
  {
    id: "mansoor-ahmad-samar",
    author: "Mansoor Ahmad Samar",
    badge: "Local Guide · 28 reviews · 149 photos",
    date: "3 months ago",
    rating: 5,
    pricePerPerson: "Rs 1,000–2,000",
    body: "Visited Ghani Shinwari Restaurant (DHA Phase 6) and had a great experience. We ordered chicken karahi, mutton karahi, and chapli kabab, and all the dishes were fresh, well-cooked, and full of authentic desi flavor.\n\nThe seating arrangement is comfortable and family-friendly, making it a good place to dine with family. The staff is polite, cooperative, and attentive, which adds to the overall pleasant experience.\n\nOverall, Ghani Shinwari is a very good option for a wide range of desi food, especially if you're looking for tasty karahi and kababs in a comfortable environment. Highly recommended!",
    details: {
      food: 5,
      service: 5,
      atmosphere: 5,
      reservation: "Not sure",
      waitTime: "No wait",
      seatingType: "Indoor dining area",
      parking: "Plenty of parking",
      parkingOptions: "Free parking lot, Valet",
    },
  },
  {
    id: "ali-ahmad",
    author: "Ali Ahmad",
    badge: "Local Guide · 109 reviews · 67 photos",
    date: "3 months ago",
    rating: 5,
    pricePerPerson: "Rs 10,000+",
    body: "Excellent service and friendly staff.\nThe Chapli kebabs were excellent and personally my favorite. The karahi was also very good, tender and well cooked. They serve a green chutney that is a must try, although it looks like regular green chutney, it isn't spicy. Instead, it has a unique green pickle style flavor with an amazing taste.\n\nOverall, the dining experience was very good, and I would recommend this place. Please note that it can be fairly busy on weekends.",
    details: {
      food: 5,
      service: 5,
      atmosphere: 5,
      waitTime: "30-60 min",
      noiseLevel: "Moderate noise",
      parking: "Plenty of parking",
    },
  },
  {
    id: "sara-khan",
    author: "Sara Khan",
    badge: "Local Guide · 45 reviews · 32 photos",
    date: "2 months ago",
    rating: 5,
    pricePerPerson: "Rs 2,000–3,000",
    body: "Came here with family for dinner. The Shinwari Karahi was outstanding — tender meat and perfect spice level. We also had the Dumba Kabli Pulao which was fragrant and delicious.\n\nThe ambiance is simple and clean, and the staff made us feel welcome. Portions are generous so sharing is easy. Will definitely be back for the rosh and tikka.",
    details: {
      food: 5,
      service: 5,
      atmosphere: 5,
      waitTime: "15-20 min",
      seatingType: "Indoor dining",
      parking: "Street parking",
      reservation: "Walk-in",
    },
  },
  {
    id: "umer-hassan",
    author: "Umer Hassan",
    badge: "Local Guide · 12 reviews",
    date: "1 month ago",
    rating: 5,
    pricePerPerson: "Rs 1,500–2,500",
    body: "Best chapli kabab in Lahore. Tried the beef chapli and namkeen tikka — both were fresh off the grill and full of flavor. The green chutney they give on the side is addictive.\n\nService was quick even on a busy Friday. Parking was easy at the Truck Adda branch. Highly recommend for anyone craving authentic Shinwari food.",
    details: {
      food: 5,
      service: 5,
      atmosphere: 5,
      waitTime: "20 min",
      parking: "Plenty of parking",
      noiseLevel: "Moderate noise",
    },
  },
];
