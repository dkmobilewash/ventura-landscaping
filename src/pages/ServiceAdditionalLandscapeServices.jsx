import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'additional-landscape-services';

export default function ServiceAdditionalLandscapeServices() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
