const backgroundImage = async () => {
  // Fetch Details
  const fetchData = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=rain&client_id=WpcvfYB4CrJFW3URGI7zUGbHukXU-kkbKgssMHCaVHU`
  );

  const APIData = await fetchData.json();

  // Displaying the data in HTML
  const background = document.querySelector("body");

  background.style.backgroundImage = `url(${APIData.results[0].urls.full})`;
  console.log(background);
};
backgroundImage();
