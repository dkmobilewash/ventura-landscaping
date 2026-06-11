import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'fireplaces-and-firepits';

export default function ServiceFireplacesAndFirepits() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
