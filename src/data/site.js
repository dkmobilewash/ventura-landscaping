// Global business information and navigation structure.
// NOTE: The brand phone number used across every CTA, meta description and the
// build checklist is (805) 608-2641 -> tel:8056082641. We use it consistently.

export const business = {
  name: 'Landscaping Pros Of Ventura',
  phoneDisplay: '(805) 608-2641',
  phoneHref: 'tel:8056082641',
  email: 'info@landscapingprosofventura.com',
  street: 'Eastman Ave',
  city: 'Ventura',
  state: 'CA',
  zip: '93003',
  region: 'Ventura County',
  url: 'https://venturalandscapeanddesign.com',
  geo: { lat: 34.2746, lng: -119.2290 },
  hours: 'Mon–Sat 7:00am–6:00pm',
  founded: 2009,
};

// The six cities we serve (used for areaServed, footers, location links).
export const cities = [
  { slug: '/ventura', name: 'Ventura' },
  { slug: '/oxnard', name: 'Oxnard' },
  { slug: '/channel-islands', name: 'Channel Islands' },
  { slug: '/camarillo', name: 'Camarillo' },
  { slug: '/saticoy', name: 'Saticoy' },
  { slug: '/santa-paula', name: 'Santa Paula' },
];

// Navigation dropdown structure used by Header and Footer.
export const nav = [
  {
    label: 'Yard Care & Maintenance',
    items: [
      { label: 'Yard Care & Lawn Maintenance', to: '/yard-care-and-lawn-maintenance' },
      { label: 'Tree Removal & Installation', to: '/tree-removal-and-installation' },
      { label: 'Tree Trimming & Pruning', to: '/tree-trimming-and-pruning' },
      { label: 'Monthly Landscaping Calendar', to: '/monthly-landscaping-to-do-calendar' },
      { label: 'Additional Landscape Services', to: '/additional-landscape-services' },
      { label: 'Critters We Encounter', to: '/critters-we-encounter' },
      { label: 'Disease & Pest Prevention', to: '/disease-environmental-pest-animal-damage-prevention' },
    ],
  },
  {
    label: 'Landscape Design & Installation',
    items: [
      { label: 'HOA Landscape Services', to: '/hoa-landscape-services' },
      { label: 'Landscape Design & Installation', to: '/landscape-design-and-installation' },
      { label: 'Artificial Turf & Putting Greens', to: '/artificial-turf-and-putting-greens' },
      { label: 'Barbeques & Outdoor Kitchens', to: '/barbeques-and-outdoor-kitchens' },
      { label: 'Fireplaces & Firepits', to: '/fireplaces-and-firepits' },
      { label: 'Outdoor Lighting', to: '/outdoor-lighting' },
      { label: 'Boulders & Rock', to: '/boulders-and-rock' },
      { label: 'Pots & Flower Beds', to: '/pots-and-flower-beds' },
      { label: 'More Hardscape Elements', to: '/more-hardscape-elements' },
      { label: 'Mature Landscapes', to: '/mature-landscapes' },
    ],
  },
  {
    label: 'Irrigation & Lighting',
    items: [
      { label: 'Irrigation Services', to: '/irrigation-services' },
      { label: 'Lighting Services', to: '/lighting-services' },
    ],
  },
  {
    label: 'Locations',
    items: [
      { label: 'Ventura', to: '/ventura' },
      { label: 'Oxnard', to: '/oxnard' },
      { label: 'Channel Islands', to: '/channel-islands' },
      { label: 'Camarillo', to: '/camarillo' },
      { label: 'Saticoy', to: '/saticoy' },
      { label: 'Santa Paula', to: '/santa-paula' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Job Opportunities', to: '/job-opportunities' },
      { label: 'Contact Us', to: '/contact-us' },
    ],
  },
];

// Flat list of all service options for the contact form dropdown.
export const serviceOptions = [
  'Yard Care & Lawn Maintenance',
  'Tree Removal & Installation',
  'Tree Trimming & Pruning',
  'HOA Landscape Services',
  'Landscape Design & Installation',
  'Artificial Turf & Putting Greens',
  'Outdoor Kitchens & BBQ Islands',
  'Fireplaces & Firepits',
  'Outdoor Lighting',
  'Boulders & Rock',
  'Pots & Flower Beds',
  'Hardscape Elements',
  'Mature Landscape Renovation',
  'Irrigation & Sprinklers',
  'Landscape Lighting',
  'Other / Not Sure',
];
