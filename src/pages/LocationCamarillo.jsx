import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/camarillo';

export default function LocationCamarillo() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
