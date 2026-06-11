import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/ventura';

export default function LocationVentura() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
