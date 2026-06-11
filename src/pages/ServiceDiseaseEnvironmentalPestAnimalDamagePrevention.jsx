import ServicePageTemplate from '../components/ServicePageTemplate';
import { services } from '../data/services';

const slug = 'disease-environmental-pest-animal-damage-prevention';

export default function ServiceDiseaseEnvironmentalPestAnimalDamagePrevention() {
  return <ServicePageTemplate slug={slug} data={services[slug]} />;
}
