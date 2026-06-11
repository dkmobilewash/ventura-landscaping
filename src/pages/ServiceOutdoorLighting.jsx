import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'outdoor-lighting';

export default function ServiceOutdoorLighting() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
