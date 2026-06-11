import LocationPageTemplate from '../components/LocationPageTemplate';
import { locations } from '../data/locations';

const slug = '/channel-islands';

export default function LocationChannelIslands() {
  return <LocationPageTemplate slug={slug} data={locations[slug]} />;
}
