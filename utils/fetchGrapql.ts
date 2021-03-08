import axios from 'axios';



export const fetchGraphql = async (url, query) => {
  try {
    const response = await axios(
      // url,
      {
        method: 'POST',
        url,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: JSON.stringify({
          query
        }),
      }
    );
    // const data = await response.json();
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
