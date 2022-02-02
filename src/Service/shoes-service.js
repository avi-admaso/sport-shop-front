const shoesApi = "https://localhost:44364/Api/Shoes";

export function getShoes() {
  return fetch(`${shoesApi}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error("Error", error));
}
