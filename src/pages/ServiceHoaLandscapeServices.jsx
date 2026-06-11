import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'hoa-landscape-services';

export default function ServiceHoaLandscapeServices() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
