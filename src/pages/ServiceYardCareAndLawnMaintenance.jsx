import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'yard-care-and-lawn-maintenance';

export default function ServiceYardCareAndLawnMaintenance() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
