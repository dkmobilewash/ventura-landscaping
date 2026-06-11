import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/oxnard';

export default function LocationOxnard() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
