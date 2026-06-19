import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/fillmore';

export default function LocationFillmore() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
