import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/thousand-oaks';

export default function LocationThousandOaks() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
