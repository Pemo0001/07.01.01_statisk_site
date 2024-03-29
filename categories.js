fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const sorted = [cats[3], cats[1], cats[2], cats[0]];
  //3,1,2,0
  sorted.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("template").content;

  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = cat.season;
  clone.querySelector("a").href = `produktliste.html?season=${cat.season}`;
  clone.querySelector("img").src = `${cat.season}.webp`;

  const parent = document.querySelector(".season");
  parent.appendChild(clone);
}
