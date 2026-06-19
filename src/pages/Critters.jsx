import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import FAQSection, { faqJsonLd } from '../components/FAQSection';
import CTABanner from '../components/CTABanner';
import LocationLinks from '../components/LocationLinks';
import { Link } from 'react-router-dom';

const critters = [
  { emoji: '🐀', name: 'Gophers', label: 'Burrowing Rodent', damage: 'Eat roots and pull entire plants underground; create mounds and tunnels that ruin lawns.', approach: 'Targeted control of active burrows plus gopher baskets installed at planting to protect roots.' },
  { emoji: '🐇', name: 'Rabbits', label: 'Browsing Mammal', damage: 'Nibble tender new plants, vegetables, and bark, often clearing seedlings overnight.', approach: 'Fencing, repellents, and rabbit-resistant plant selections around vulnerable beds.' },
  { emoji: '🐿️', name: 'Ground Squirrels', label: 'Burrowing Rodent', damage: 'Dig extensive burrows that undermine soil, eat plants, and damage irrigation lines.', approach: 'Burrow management and habitat reduction, plus protecting irrigation and root zones.' },
  { emoji: '🐌', name: 'Snails & Slugs', label: 'Mollusk', damage: 'Chew ragged holes in leaves and devour seedlings and tender foliage, especially after watering.', approach: 'Cultural controls, smart watering timing, and least-toxic bait where needed.' },
  { emoji: '🐛', name: 'Aphids', label: 'Insect Pest', damage: 'Cluster on new growth, suck plant sap, distort leaves, and leave sticky honeydew and sooty mold.', approach: 'Encouraging beneficial insects and targeted, low-toxicity treatment on heavy infestations.' },
  { emoji: '🦗', name: 'Grubs', label: 'Insect Larvae', damage: 'Feed on grass roots, causing brown patches of lawn that lift up like loose carpet.', approach: 'Diagnosis to confirm grubs, then appropriate treatment and lawn recovery care.' },
  { emoji: '🦝', name: 'Raccoons & Skunks', label: 'Nocturnal Mammal', damage: 'Dig up lawns and beds at night searching for grubs, leaving rolled-back turf and holes.', approach: 'Removing the grub food source and using deterrents to discourage nightly digging.' },
  { emoji: '🐭', name: 'Voles', label: 'Field Rodent', damage: 'Create surface runways in lawns and gnaw on roots and the bark of young trees and shrubs.', approach: 'Habitat reduction, trunk guards on young trees, and protecting vulnerable plantings.' },
];

const faqs = [
  { q: 'How do I know what’s damaging my yard?', a: 'The clues are in the damage — mounds suggest gophers, surface runways point to voles, rolled-back turf at night means raccoons or skunks after grubs. We diagnose the actual culprit before treating.' },
  { q: 'What’s the best way to stop gophers?', a: 'A combination of targeted control on active burrows and prevention — installing gopher baskets at planting time is by far the best protection for valuable plants.' },
  { q: 'Do you use safe, responsible methods?', a: 'Yes. We follow an integrated pest management approach, choosing the least-toxic effective option first to protect pollinators, pets, and your family.' },
  { q: 'Can you protect new plantings from animals?', a: 'Absolutely. We build protection in at install time with baskets, trunk guards, fencing, and smart plant placement so animals don’t undo your investment.' },
  { q: 'Is critter control part of your maintenance?', a: 'It can be. Our crews monitor for animal and pest activity on every visit and address problems early. Call (805) 429-4491 to learn more.' },
];

export default function Critters() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Yard Care & Maintenance' }, { label: 'Critters We Encounter' }];
  return (
    <>
      <SEOHead
        title="Critters We Encounter in Ventura County Landscapes | Ventura Landscape & Design"
        description="From gophers to ground squirrels, our Ventura County landscapers know how to handle the critters that damage lawns and gardens. Learn more."
        canonical="/critters-we-encounter"
        jsonLd={[faqJsonLd(faqs), breadcrumbJsonLd(crumbs)]}
      />
      <HeroSection
        title="Common Yard Critters in Ventura County"
        subtitle="Know your local wildlife. Here are the critters that most often damage Ventura County lawns and gardens — and how we handle them."
        backgroundImage="https://media.istockphoto.com/id/2201667120/photo/beautiful-lawn-and-garden-path-in-a-uk-park-or-garden.jpg?s=612x612&w=0&k=20&c=93He--cEoPeNBqstGwNz4F0BWScm0A_uCb0jWaLQqFU="
        backgroundAlt="Healthy, protected landscape in Ventura County"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Local Wildlife</p>
            <h2>The Critters We Deal With</h2>
            <p className="lead">
              Ventura County’s mild climate is great for plants — and for the animals that love to eat
              them. Here’s what we watch for and how we protect your landscape. For a full prevention
              plan, see our{' '}
              <Link to="/disease-environmental-pest-animal-damage-prevention">
                disease &amp; pest prevention
              </Link>{' '}
              services.
            </p>
          </div>
          <div className="grid grid-4">
            {critters.map((c) => (
              <article className="card critter" key={c.name}>
                <div className="card__icon" aria-hidden="true">{c.emoji}</div>
                <span className="tag">{c.label}</span>
                <h3>{c.name}</h3>
                <p style={{ marginBottom: '0.6rem' }}><strong>Damage:</strong> {c.damage}</p>
                <p className="mb-0"><strong>Our approach:</strong> {c.approach}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocationLinks />
      <FAQSection faqs={faqs} heading="Critter & Pest FAQ" />
      <CTABanner
        headline="Protect Your Landscape From Critters"
        subtext="Dealing with gophers, grubs, or nightly digging? Call (805) 429-4491 and we’ll help you take your yard back."
      />
    </>
  );
}
