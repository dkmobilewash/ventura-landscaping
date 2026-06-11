import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'tree-trimming-and-pruning';

export default function ServiceTreeTrimmingAndPruning() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
