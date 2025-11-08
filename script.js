// script.js
// Destination card click autofill
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('destSelect').value = card.dataset.dest;
    window.location.href = '#planner';
  });
});

// Itinerary generation
// Itinerary generation (updated version)
const generateBtn = document.getElementById('generate');
const output = document.getElementById('itineraryOutput');

generateBtn.addEventListener('click', () => {
  const dest = document.getElementById('destSelect').value;
  const days = parseInt(document.getElementById('days').value) || 1;
  const addons = Array.from(document.querySelectorAll('.addons input:checked')).map(a => a.value);

  // 🏞️ Predefined attractions for each destination (Ladakh added)
  const itineraries = {
    "Kashmir": [
      "Shikara ride on Dal Lake and Shopping at Srinagar markets",
      "Visit Mughal Gardens in Srinagar or tulip garden if visiting in april",
      "Gulmarg gondola ride",
      "Snow sledging on thajiwas glacier in Sonamarg",
      "Pahalgam valley exploration",
      "Relax by the Lidder River"
    ],
    "Sikkim": [
      "Explore Gangtok city and MG Marg",
      "Visit Tsomgo Lake",
      "Trip to Nathula Pass",
      "Explore Rumtek Monastery",
      "Visit Lachung and Yumthang Valley",
      "Relax at local cafés with a mountain view"
    ],
    "Spiti": [
      "Visit Key Monastery and Kibber Village",
      "Explore Kaza market",
      "Drive to Langza, Hikkim & Komik villages",
      "Visit Pin Valley National Park",
      "Explore Tabo Monastery",
      "Relax near the Spiti River"
    ],
    "Rajasthan": [
      "Explore Jaipur’s Amber Fort",
      "Visit Udaipur’s City Palace",
      "Camel safari in Jaisalmer",
      "Explore Mehrangarh Fort in Jodhpur",
      "Shopping in local bazaars",
      "Cultural evening with folk music"
    ],
    "Punjab": [
      "Visit Golden Temple in Amritsar",
      "Explore Jallianwala Bagh",
      "Wagah Border ceremony",
      "Taste Punjabi cuisine at local dhabas",
      "Visit rural villages and fields",
      "Relax by Sukhna Lake in Chandigarh"
    ],
    "Meghalaya": [
      "Explore Shillong city and markets",
      "Visit Elephant Falls",
      "Trek to Double Decker Root Bridge in Cherrapunji",
      "Explore Mawlynnong – Asia’s cleanest village",
      "Boat ride at Dawki River",
      "Enjoy local Khasi cuisine"
    ],
 "Leh-Ladakh": [
  "Drive the Manali-Leh or Srinagar-Leh route (scenic high-altitude drive)",
  "Explore Leh Market, Leh Palace and Shanti Stupa",
  "Visit Thiksey & Hemis monasteries, Shree Pathar Sahib Gurudwara",
  "Check out Nubra Valley and the sand dunes at Hunder through Khardungla Pass",
  "Visit Pangong Lake and enjoy the surreal colors of the lake then come back to Leh",
  "Relax and acclimatize while enjoying local Ladakhi cuisine",
  "End the trip from a different route back home (if started from Srinagar then end via Manali route)"
]
  };

  // 🧳 Generate detailed itinerary
  let itinerary = `Your ${days}-day itinerary for ${dest} includes:<br>`;
  const selectedPlaces = itineraries[dest] || ["Explore and relax"];

  for (let i = 0; i < days; i++) {
    const place = selectedPlaces[i % selectedPlaces.length];
    itinerary += `Day ${i + 1}: ${place}.<br>`;
  }

  if (addons.length) {
    itinerary += `<br><b>Add-ons:</b> ${addons.join(', ')}`;
  }

  // Display formatted itinerary
  output.innerHTML = itinerary;
});


// Clear itinerary
document.getElementById('clear').addEventListener('click', () => output.textContent = 'No itinerary generated yet.');

// Modal login/signup logic
const modal = document.getElementById('modal');
const openProfile = document.getElementById('openProfile');
const closeModal = document.getElementById('closeModal');
const closeModal2 = document.getElementById('closeModal2');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

openProfile.onclick = () => modal.style.display = 'flex';
closeModal.onclick = () => modal.style.display = 'none';
closeModal2.onclick = () => modal.style.display = 'none';

tabLogin.onclick = () => {
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
};
tabSignup.onclick = () => {
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
};

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};
