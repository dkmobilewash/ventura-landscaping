import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/saticoy';

export default function LocationSaticoy() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
