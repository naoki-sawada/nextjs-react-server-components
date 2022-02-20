export async function getProfile(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/hello`);
    return res.json();
  } catch (e) {
    throw e;
  }
}
