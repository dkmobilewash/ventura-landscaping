import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'pots-and-flower-beds';

export default function ServicePotsAndFlowerBeds() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
