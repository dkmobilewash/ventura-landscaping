import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import FAQSection, { faqJsonLd } from '../components/FAQSection';
import CTABanner from '../components/CTABanner';
import LocationLinks from '../components/LocationLinks';

const months = [
  { name: 'January', tips: ['Prune dormant deciduous and fruit trees', 'Apply dormant spray to control overwintering pests', 'Plant bare-root roses and trees', 'Service and sharpen tools before spring'] },
  { name: 'February', tips: ['Finish rose pruning before bud break', 'Pre-emergent weed control in beds and lawns', 'Start cool-season vegetables', 'Check and repair irrigation after winter'] },
  { name: 'March', tips: ['Feed lawns as growth resumes', 'Refresh mulch in all beds', 'Plant warm-season color and natives', 'Test irrigation coverage as days warm'] },
  { name: 'April', tips: ['Begin regular mowing as grass takes off', 'Fertilize citrus trees', 'Watch for aphids on new growth', 'Adjust irrigation timers upward'] },
  { name: 'May', tips: ['Plant summer annuals and vegetables', 'Deep-water trees to prepare for heat', 'Deadhead spring bloomers', 'Check drip emitters for clogs'] },
  { name: 'June', tips: ['Raise mowing height to shade soil', 'Mulch to conserve moisture before summer', 'Monitor for spider mites in the heat', 'Water early morning to reduce evaporation'] },
  { name: 'July', tips: ['Water deeply and less often', 'Watch for heat stress and adjust irrigation', 'Avoid heavy pruning during peak heat', 'Keep up with fast-growing weeds'] },
  { name: 'August', tips: ['Continue efficient deep watering', 'Plan fall planting and lawn renovation', 'Harvest and feed summer vegetables', 'Inspect for late-season pests'] },
  { name: 'September', tips: ['Best month to plant trees and shrubs', 'Overseed or renovate cool-season lawns', 'Divide perennials', 'Begin tapering irrigation as temps ease'] },
  { name: 'October', tips: ['Plant California natives and drought-tolerant species', 'Add fall and winter color', 'Refresh mulch for winter', 'Clean up and reduce watering frequency'] },
  { name: 'November', tips: ['Rake and compost falling leaves', 'Plant bulbs for spring', 'Cut back spent perennials', 'Adjust irrigation for cooler, shorter days'] },
  { name: 'December', tips: ['Protect tender plants from cold snaps', 'Plan next year’s landscape projects', 'Prune dormant trees late in the month', 'Check drainage before winter rains'] },
];

const faqs = [
  { q: 'When is the best time to plant in Ventura County?', a: 'Fall (September–October) is ideal for most trees, shrubs, and natives. Cooler air and coming rains help roots establish before summer heat returns.' },
  { q: 'How should I adjust watering through the year?', a: 'Water more frequently in late spring and summer, then taper off in fall and winter. A smart, weather-based controller handles these seasonal shifts automatically.' },
  { q: 'When should I prune my trees?', a: 'Most deciduous and fruit trees are best pruned in winter dormancy (January–February). Spring bloomers are pruned right after they flower.' },
  { q: 'When can I tackle weeds most effectively?', a: 'Apply pre-emergent weed control in late winter (February) before weeds sprout, then stay on top of any that appear through spring and summer.' },
  { q: 'Can you handle this seasonal work for me?', a: 'Absolutely. Our maintenance plans build this month-by-month care right into your service so you never have to track it yourself. Call (805) 429-4491.' },
];

export default function MonthlyCalendar() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Yard Care & Maintenance' }, { label: 'Monthly Calendar' }];
  return (
    <>
      <SEOHead
        title="Monthly Landscaping To-Do Calendar for Ventura County | Ventura Landscape & Design"
        description="A month-by-month landscaping guide for Ventura County homeowners — what to plant, prune, water, and fertilize all year. Free estimates — call 805-429-4491."
        canonical="/monthly-landscaping-to-do-calendar"
        jsonLd={[faqJsonLd(faqs), breadcrumbJsonLd(crumbs)]}
      />
      <HeroSection
        title="Ventura County Monthly Landscaping Calendar"
        subtitle="A month-by-month guide to what to plant, prune, water, and fertilize in our Southern California coastal climate."
        backgroundImage="https://media.istockphoto.com/id/170168600/photo/lawn-mower-and-spring-mowing.jpg?s=612x612&w=0&k=20&c=-bX-os14pZVaNuIqhp4t7kRBAfQIuHMhQ4ofzZirtdQ="
        backgroundAlt="Year-round landscaping care in Ventura County"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Year-Round Care</p>
            <h2>Your Ventura County Landscaping To-Do List</h2>
            <p className="lead">
              Our mild coastal climate lets you garden nearly year-round. Use this calendar as a guide
              — or let our team handle it all on a maintenance plan.
            </p>
          </div>
          <div className="grid grid-3">
            {months.map((m) => (
              <article className="card month-card" key={m.name}>
                <h3>{m.name}</h3>
                <ul>
                  {m.tips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LocationLinks />
      <FAQSection faqs={faqs} heading="Seasonal Landscaping FAQ" />
      <CTABanner
        headline="Let Us Handle Your Year-Round Yard Care"
        subtext="Skip the calendar — our maintenance plans keep your landscape on schedule every month. Call (805) 429-4491."
      />
    </>
  );
}
