import fire from 'fire';

export default function fetchMarkersData() {
  const ref = fire.database().ref('markers');
  return ref;
}
