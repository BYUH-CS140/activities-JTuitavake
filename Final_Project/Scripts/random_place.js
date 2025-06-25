(function(){
const places = [
    {
    name: "Ha'apai Islands",
    description: "A serene group of islands known for stunning white sandy beaches, crystal-clear waters, and vibrant coral reefs—perfect for snorkeling and relaxing away from crowds.",
    image: "Media/haapai.jpg"
    },
    {
    name: "Vava'u Archipelago",
    description: "Famous for its majestic blue waters and abundant marine life, Vava'u is a paradise for whale watching, sailing, and exploring limestone caves.",
    image: "Media/vavau.jpg"
    },
    {
    name: "Tongatapu",
    description: "The main island, rich with cultural history including ancient royal tombs, beautiful parks, and the bustling capital city of Nuku'alofa.",
    image: "Media/tongatapu.jpg"
    },
    {
    name: "Eua Island",
    description: "Known for its rugged cliffs, dense rainforests, and hiking trails offering breathtaking views of Tonga's coastline and rare native wildlife.",
    image: "Media/eua.jpg"
    },
    {
    name: "Niua Islands",
    description: "Remote and untouched, the Niua Islands offer a glimpse into traditional Tongan village life and pristine natural beauty far off the tourist path.",
    image: "Media/niua.jpg"
    },
    {
    name: "Blowholes of Houma",
    description: "Witness nature’s power as ocean waves surge through natural blowholes, creating spectacular water spouts framed by stunning coastal scenery.",
    image: "Media/houma.jpg"
    },
    {
    name: "Anahulu Cave",
    description: "Explore fascinating limestone caves with underground pools and ancient rock formations — a hidden gem for adventurous travelers.",
    image: "Media/anahulu.jpg"
    }
];

const pickBtn = document.getElementById('pickSpotBtn');
const spotName = document.getElementById('spotName');
const spotDescription = document.getElementById('spotDescription');
const spotImage = document.getElementById('spotImage');
const spotInfo = document.getElementById('spotInfo');

pickBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    const place = places[randomIndex];

    // Fade out current info
    spotInfo.style.opacity = 0;

    setTimeout(() => {
    spotName.textContent = place.name;
    spotDescription.textContent = place.description;
    spotImage.src = place.image;
    spotImage.alt = place.name;

    // Fade in new info
    spotInfo.style.opacity = 1;
    }, 300);
});
})();