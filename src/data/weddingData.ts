// Single source of truth for the invitation content.
// Coordinates: 17.950129, 79.478486 (Susheela A/c. Convention Hall, Madikonda).

const LAT = 17.950129;
const LNG = 79.478486;

export const wedding = {
  couple: "Manideep & Meghana",
  groomFirst: "Manideep",
  brideFirst: "Meghana",
  date: "July 03, 2026",
  dateLong: "Friday, July 03, 2026",
  day: "Friday",
  muhurthamTime: "7:02 AM",
  // ISO with IST offset so the countdown is correct everywhere.
  targetDate: "2026-07-03T07:02:00+05:30",
  nakshatram: "Shravana Nakshatram, Karkataka Lagnam",
  venue: "Susheela A/c. Convention Hall",
  venueAddress: [
    "Near Bharath Petrol Pump,",
    "Hyderabad High-way Road,",
    "Madikonda, Hanamkonda."
  ],
  city: "Madikonda, Hanamkonda",
  phone: "+919949219157",
  mapEmbed: `https://www.google.com/maps?q=${LAT},${LNG}&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`
} as const;

// Formal invitation copy — mirrors the printed card.
export const invitation = {
  blessings: ["Srirasthu !", "Shubhamasthu !!", "Avignamasthu !!!"],
  divineLead: "Divine Blessings from",
  divineFrom: "Late Potlabathini (Rajiramma – Rajaiah)",
  title: "Wedding Invitation",
  solicit:
    "We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of",
  brideIntro: "My Sister Potlabathini Latha – (Late Ramesh)'s Youngest Daughter",
  bridePrefix: "Chi. La. Sow.",
  brideName: "Meghana",
  brideAlias: "(Deepika)",
  groomPrefix: "Chi.",
  groomName: "Manideep",
  groomParents: "Youngest Son of Sri Gunda Prasad – Smt. Ramyasree",
  groomResidence: "R/o. O' City Stadium, Laxmipuram, Gandhi Nagar, Warangal.",
  lunch: "Lunch Follows…",
  invitedByLead: "Invited by",
  invitedBy: "Sandupatla Surender – Praneetha",
  inviterName: "Sai Aravind Potlabathini",
  inviterNote: "Inviting you, with all my heart, to my sister's marriage.",
  compliments: "With Best Compliments from : Near & Dear"
} as const;

export type TimelineItem = {
  time: string;
  title: string;
  detail: string;
};

export const ceremonyTimeline: TimelineItem[] = [
  {
    time: "7:02 AM",
    title: "Sumuhurtham",
    detail: "Shravana Nakshatram, Karkataka Lagnam — the sacred muhurtham."
  },
  {
    time: "Onwards",
    title: "Blessings & Greetings",
    detail: "Shower the couple with your love and warm blessings."
  },
  {
    time: "Afterwards",
    title: "Lunch Follows",
    detail: "Stay and dine with us at Susheela A/c. Convention Hall."
  }
];
