import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'artificial-turf-and-putting-greens';

export default function ServiceArtificialTurfAndPuttingGreens() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
