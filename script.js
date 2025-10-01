const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const filterSelect = document.getElementById("filterSelect");
const sortBtn = document.getElementById("sortBtn");

let currentFilter = "";
let sortOrder = "id";

function displayPokemons(filteredPokemons) {
  resultsDiv.innerHTML = "";

  filteredPokemons.sort((a, b) => {
    if (sortOrder === "id") return a.id - b.id;
    if (sortOrder === "name") return a.name.localeCompare(b.name);
  });

  filteredPokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = pokemon.image;
    img.alt = pokemon.name;

    const info = document.createElement("div");
    info.classList.add("pokemon-info");
    info.innerHTML = `
      <strong>${pokemon.id} - ${pokemon.name}</strong>
      <span>Tipo: ${pokemon.type.join(", ")}</span>
    `;

    card.appendChild(img);
    card.appendChild(info);
    resultsDiv.appendChild(card);

    const details = document.createElement("div");
    details.classList.add("pokemon-details");
    details.innerHTML = `
      <img src="${pokemon.gif ? pokemon.gif : pokemon.image}" alt="${pokemon.name}" class="pokemon-gif" />
      <p><strong>Descrição:</strong> ${pokemon.description}</p>
      <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
      <p><strong>Evolui para:</strong> ${pokemon.evolvesTo ? pokemon.evolvesTo : "Nenhuma"}</p>
      <button class="close-details">Fechar</button>
    `;
    details.style.display = "none";
    info.appendChild(details);

    card.addEventListener("click", () => {
      details.style.display = "block";
    });

    details.querySelector(".close-details").addEventListener("click", (e) => {
      e.stopPropagation();
      details.style.display = "none";
    });
  });
}

const types = [...new Set(pokemons.flatMap((p) => p.type))];
types.forEach((t) => {
  const option = document.createElement("option");
  option.value = t;
  option.textContent = t;
  filterSelect.appendChild(option);
});

filterSelect.addEventListener("change", () => {
  currentFilter = filterSelect.value;
  filterPokemons();
});

sortBtn.addEventListener("click", () => {
  sortOrder = sortOrder === "id" ? "name" : "id";
  sortBtn.textContent =
    sortOrder === "id" ? "Ordenar por ID" : "Ordenar por Nome";
  filterPokemons();
});

function filterPokemons() {
  const query = searchInput.value.toLowerCase();
  let filtered = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(query) ||
      pokemon.id.toString().includes(query) ||
      pokemon.type.some((t) => t.toLowerCase().includes(query))
  );

  if (currentFilter)
    filtered = filtered.filter((p) => p.type.includes(currentFilter));

  displayPokemons(filtered);
}

// ================== Música e volume ==================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const volumeSlider = document.getElementById("volumeSlider");
const prevMusic = document.getElementById("prevMusic");
const nextMusic = document.getElementById("nextMusic");

// Novo elemento para emoji de volume
let volumeIcon = document.getElementById("volumeIcon");
if (!volumeIcon) {
  volumeIcon = document.createElement("span");
  volumeIcon.id = "volumeIcon";
  volumeIcon.style.fontSize = "22px";
  volumeSlider.parentNode.insertBefore(volumeIcon, volumeSlider);
}

const musicList = [
  "musics/pokemusic.mp3",
  "musics/pokemusic2.mp3",
  "musics/pokemusic3.mp3",
  "musics/pokemusic4.mp3",
  "musics/pokemusic5.mp3",
  "musics/pokemusic6.mp3",
  "musics/pokemusic7.mp3",
  "musics/pokemusic8.mp3",
  "musics/pokemusic9.mp3",
  "musics/pokemusic10.mp3",
  "musics/pokemusic11.mp3",
  "musics/pokemusic12.mp3",
  "musics/pokemusic13.mp3",
];

let currentMusic = 0;
music.src = musicList[currentMusic];
music.volume = volumeSlider.value;

// Atualiza emoji de volume
function updateVolumeIcon() {
  const vol = volumeSlider.value;
  if (vol == 0) volumeIcon.textContent = "🔇";
  else if (vol < 0.4) volumeIcon.textContent = "🔈";
  else if (vol < 0.7) volumeIcon.textContent = "🔉";
  else volumeIcon.textContent = "🔊";
}
updateVolumeIcon();

musicBtn.addEventListener("click", () => {
  if (music.paused) music.play();
  else music.pause();
});

volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;
  updateVolumeIcon();
});

nextMusic.addEventListener("click", () => {
  currentMusic = (currentMusic + 1) % musicList.length;
  music.src = musicList[currentMusic];
  music.play();
});

prevMusic.addEventListener("click", () => {
  currentMusic = (currentMusic - 1 + musicList.length) % musicList.length;
  music.src = musicList[currentMusic];
  music.play();
});

searchInput.addEventListener("input", filterPokemons);
displayPokemons(pokemons);
