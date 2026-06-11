import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'lighting-services';

export default function ServiceLightingServices() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
