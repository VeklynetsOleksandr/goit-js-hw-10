export default function fetchCountries(name) {
  const input = name.target.value.trim();
  console.log(input);
  return fetch(
    `https://restcountries.com/v2/name/${input}?fields=name,capital,population,flags,languages`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
