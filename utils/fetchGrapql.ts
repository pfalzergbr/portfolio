export const fetchGraphql = async (url, query) => {
  try {
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query
        }),
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}