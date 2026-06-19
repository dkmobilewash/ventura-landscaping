import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/newbury-park';

export default function LocationNewburyPark() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
