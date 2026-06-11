import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'boulders-and-rock';

export default function ServiceBouldersAndRock() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
