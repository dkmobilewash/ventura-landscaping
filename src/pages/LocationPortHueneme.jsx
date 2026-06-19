import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/port-hueneme';

export default function LocationPortHueneme() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
