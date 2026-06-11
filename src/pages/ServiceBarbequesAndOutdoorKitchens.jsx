import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'barbeques-and-outdoor-kitchens';

export default function ServiceBarbequesAndOutdoorKitchens() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
