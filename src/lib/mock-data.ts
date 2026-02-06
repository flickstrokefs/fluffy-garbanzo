export const messMenu = {
  breakfast: "Poha, Jalebi, Tea, Coffee",
  lunch: "Roti, Rice, Dal Makhani, Mix Veg, Salad",
  dinner: "Paneer Butter Masala, Roti, Rice, Dal Fry, Gulab Jamun",
};

export const mails = [
  {
    id: 1,
    sender: "Dean Academics",
    subject: "Regarding mid-term examinations",
    summary: "The mid-term examinations are scheduled to start from next month. The detailed schedule will be shared soon.",
  },
  {
    id: 2,
    sender: "Placement Cell",
    subject: "Internship opportunities at XYZ Corp",
    summary: "XYZ Corp is hiring for summer interns. Interested students can apply through the portal.",
  },
];

export const announcements = [
  {
    id: 1,
    title: "Annual Tech Fest 'Innovate 2024'",
    summary: "Get ready for the biggest tech fest of the year. Registrations are now open for all events.",
    category: "Events",
  },
  {
    id: 2,
    title: "Library Closure",
    summary: "The central library will be closed this weekend for maintenance work.",
    category: "General",
  },
  {
    id: 3,
    title: "Mid-term Examination Schedule",
    summary: "The mid-term examination schedule for all branches has been released on the university website.",
    category: "Academic",
  }
];

export const lostAndFoundItems = [
  { id: 1, name: "iPhone 13", description: "Found near the cafeteria. Blue color, in a black case.", status: "found" },
  { id: 2, name: "College ID Card", description: "Lost my ID card, Name: Alex Doe. Please return if found.", status: "lost" },
];

export const marketplaceItems = [
  { id: 1, name: "Used Bicycle", description: "In good condition, selling because I'm graduating.", price: 2500, imageId: "marketplace-item-1" },
  { id: 2, name: "Textbooks (CSE)", description: "Complete set of first-year computer science engineering textbooks.", price: 1500, imageId: "marketplace-item-2" },
  { id: 3, name: "Mini Fridge", description: "Almost new mini-fridge, perfect for a dorm room.", price: 4000, imageId: "marketplace-item-3" },
];

export const rideShares = [
  { id: 1, from: "Campus", to: "Railway Station", date: "2024-10-28", time: "17:00", seats: 2 },
  { id: 2, from: "Airport", to: "Campus", date: "2024-10-29", time: "11:00", seats: 1 },
];

export const communityPosts = [
  { id: 1, author: "Jane Doe", content: "Looking for a study partner for the upcoming data structures exam. Anyone interested?" },
  { id: 2, author: "John Smith", content: "The drama club is organizing auditions for the annual play. Come and showcase your talent!" },
];

export const nearbyPlaces = [
  { id: 1, name: "The Daily Grind Cafe", category: "Coffee Shop", distance: "500m", imageId: "nearby-place-1" },
  { id: 2, name: "City Central Library", category: "Library", distance: "1.2km", imageId: "nearby-place-2" },
];

export const timetable: { [key: string]: { time: string; course: string; location: string }[] } = {
  monday: [
    { time: "09:00 - 10:00", course: "Data Structures", location: "Room 101" },
    { time: "10:00 - 11:00", course: "Algorithms", location: "Room 102" },
  ],
  tuesday: [
    { time: "11:00 - 12:00", course: "Database Systems", location: "Lab 3" },
  ],
  wednesday: [],
  thursday: [
    { time: "09:00 - 10:00", course: "Data Structures", location: "Room 101" },
  ],
  friday: [
     { time: "11:00 - 12:00", course: "Database Systems", location: "Lab 3" },
  ],
  saturday: [],
  sunday: [],
};

export const courses = [
  { id: "CS101", name: "Data Structures", instructor: "Dr. Smith", progress: 75 },
  { id: "MA203", name: "Linear Algebra", instructor: "Dr. Jones", progress: 60 },
];

export const assignments = [
  { id: 1, course: "Data Structures", title: "Implement a Red-Black Tree", dueDate: "2024-11-15", details: "Implement insertion, deletion, and search operations for a Red-Black Tree in C++ or Java. The implementation should be well-documented and tested. Submission should be a zip file containing the source code and a report." },
  { id: 2, course: "Linear Algebra", title: "Problem Set 5", dueDate: "2024-11-10", details: "Solve the problems from Chapter 5 of the textbook. The problems focus on eigenvalues and eigenvectors. Show all steps clearly. Submit a scanned PDF of your handwritten solutions." },
];
