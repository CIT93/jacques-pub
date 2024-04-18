async function getPhotos() {
  try {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const req = await fetch(url);
    const data = req.json();
    return data;
  } catch (error) {
    console.error(`An error occured: ${error}`);
  }
}

async function photosView() {
  const gallery = document.getElementById("photoGallery");

  const photos = await getPhotos();
  if (!photos) {
    console.log("Could not get photos.");
  } else {
    const limit = 60;
    for (let i = 0; i <= limit; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      const a = document.createElement("a");

      img.src = photos[i].thumbnailUrl;
      img.alt = photos[i].title;
      img.setAttribute("loading", "lazy");
      li.id = photos[i].id;
      a.href = photos[i].url;
      a.textContent = "source";
      a.setAttribute("target", "_blank");
      p.textContent = `Album: ${photos[i].albumId}, `;
      p.appendChild(a);
      p.style.fontSize = ".65rem";
      li.append(img, p);
      gallery.appendChild(li);
    }
  }
}

window.onload = () => {
  photosView();
};
