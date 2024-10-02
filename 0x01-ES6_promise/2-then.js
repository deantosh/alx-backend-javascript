export default function handleResponseFromAPI(promise) {
  return promise
    // Handle if resolved sucessfully
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    // Handle rejection
    .catch(() => {
      return new Error();
    })
    // Execute afer promise is settled.
    .finally(() => {
      // block intentionally left empty
    });
}
