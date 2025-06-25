(function(){
const places = [
    {
    name: "Haʻapai Islands",
    description: "A serene group of islands known for stunning white sandy beaches, crystal-clear waters, and vibrant coral reefs—perfect for snorkeling and relaxing away from crowds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ha%CA%BBapai_Islands_in_Tonga_-_NASA_Blue_Marble.jpg/640px-Ha%CA%BBapai_Islands_in_Tonga_-_NASA_Blue_Marble.jpg"
    },
    {
    name: "Vavaʻu Archipelago",
    description: "Famous for its majestic blue waters and abundant marine life, Vavaʻu is a paradise for whale watching, sailing, and exploring limestone caves.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vava%CA%BBu_Tonga_Landsat7.jpg/640px-Vava%CA%BBu_Tonga_Landsat7.jpg"
    },
    {
    name: "Tongatapu",
    description: "The main island, rich with cultural history including ancient royal tombs, beautiful parks, and the bustling capital city of Nuku'alofa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nukualofa%2C_Tonga_2013-09-27.jpg/640px-Nukualofa%2C_Tonga_2013-09-27.jpg"
    },
    {
    name: "Eua Island",
    description: "Known for its rugged cliffs, dense rainforests, and hiking trails offering breathtaking views of Tonga’s coastline and rare native wildlife.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Eua_Island_Tonga.jpg/640px-Eua_Island_Tonga.jpg"
    },
    {
    name: "Niua Islands",
    description: "Remote and untouched, the Niua Islands offer a glimpse into traditional Tongan village life and pristine natural beauty far off the tourist path.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Niuas_Tonga.jpg/640px-Niuas_Tonga.jpg"
    },
    {
    name: "Blowholes of Houma",
    description: "Witness nature’s power as ocean waves surge through natural blowholes, creating spectacular water spouts framed by stunning coastal scenery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Houma_Blowholes.jpg/640px-Houma_Blowholes.jpg"
    },
    {
    name: "Anahulu Cave",
    description: "Explore fascinating limestone caves with underground pools and ancient rock formations — a hidden gem for adventurous travelers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cave_in_Tonga.jpg/640px-Cave_in_Tonga.jpg"
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