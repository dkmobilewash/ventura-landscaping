import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'irrigation-services';

export default function ServiceIrrigationServices() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
