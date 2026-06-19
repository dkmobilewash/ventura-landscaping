import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/moorpark';

export default function LocationMoorpark() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
