import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/santa-paula';

export default function LocationSantaPaula() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
