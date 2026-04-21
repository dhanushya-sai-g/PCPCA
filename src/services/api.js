const BASE_URL = "https://t4e-testserver.onrender.com/api";
const PASSWORD = "115478";

export const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: PASSWORD,
      },
    });

    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    throw err;
  }
};