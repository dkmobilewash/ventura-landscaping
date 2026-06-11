import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'more-hardscape-elements';

export default function ServiceMoreHardscapeElements() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
