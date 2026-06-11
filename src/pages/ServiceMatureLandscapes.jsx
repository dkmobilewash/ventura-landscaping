import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'mature-landscapes';

export default function ServiceMatureLandscapes() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
