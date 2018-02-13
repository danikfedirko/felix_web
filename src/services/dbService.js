import fire from 'fire';

export const dbConnection = fire.database();

export default function fetchData(key) {
  const ref = dbConnection.ref(key);
  return new Promise((resolve, reject) => {
    ref
      .once('value')
      .then(resolve)
      .catch(reject);
  });
}

export function setData(key, data) {
  dbConnection.ref(key).set(data);
}
