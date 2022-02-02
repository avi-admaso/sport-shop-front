const pantsApi = "https://localhost:44364/Api/Clothes";

export function GetPants() {
  return fetch(`${pantsApi}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error("Error", error));
}