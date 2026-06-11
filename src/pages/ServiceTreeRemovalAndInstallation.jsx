import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'tree-removal-and-installation';

export default function ServiceTreeRemovalAndInstallation() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
