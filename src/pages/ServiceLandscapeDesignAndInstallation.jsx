import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'landscape-design-and-installation';

export default function ServiceLandscapeDesignAndInstallation() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
