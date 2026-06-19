import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/ojai';

export default function LocationOjai() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
