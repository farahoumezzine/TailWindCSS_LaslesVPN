// Testimonial Data
const testimonials = [
  {
    name: "Olivia Nguyen",
    location: "Toronto, Canada",
    rating: 5.0,
    comment:
      "LaslesVPN is a game-changer! I finally feel secure browsing on public Wi-Fi. The speed is excellent and it's super easy to use.",
    image: "./images/user1.png",
  },
  {
    name: "Arjun Mehta",
    location: "New Delhi, India",
    rating: 4.8,
    comment:
      "I use LaslesVPN for work and streaming — it's reliable, fast, and gives me access to everything I need. Highly recommend!",
    image: "./images/user2.png",
  },
  {
    name: "Sofia Almeida",
    location: "Lisbon, Portugal",
    rating: 4.9,
    comment:
      "Traveling a lot means I need solid VPN coverage. LaslesVPN never fails me. Great speeds even in remote locations!",
    image: "./images/user3.png",
  },
  {
    name: "Liam Smith",
    location: "Dublin, Ireland",
    rating: 4.7,
    comment:
      "Excellent VPN service. LaslesVPN keeps my data private and lets me work safely from anywhere. Support is responsive too.",
    image: "./images/user1.png",
  },
  {
    name: "Isabella Rossi",
    location: "Rome, Italy",
    rating: 4.9,
    comment:
      "LaslesVPN gives me peace of mind. Whether I'm shopping, streaming, or banking online, I feel completely secure.",
    image: "./images/user2.png",
  },
  {
    name: "Mateo García",
    location: "Buenos Aires, Argentina",
    rating: 5.0,
    comment:
      "The best VPN I've tried. Zero lag, strong encryption, and a beautiful interface. LaslesVPN is worth every cent.",
    image: "./images/user3.png",
  },
  {
    name: "Chloe Dupont",
    location: "Paris, France",
    rating: 4.8,
    comment:
      "I've been using LaslesVPN for months now and it's been flawless. Great connection, user-friendly, and trustworthy.",
    image: "./images/user1.png",
  },
];

// Generate testimonial slides
function generateTestimonials() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  testimonials.forEach((testimonial) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
            <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-200 transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg">${testimonial.name}</h4>
                            <p class="text-gray-400">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./images/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class="text-gray-600">"${testimonial.comment}"</p>
            </div>
        `;

    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper after generating testimonials
  const swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

let map;

function initMap() {
  // Initialiser la carte
  map = L.map("userMap").setView([20, 0], 2);

  // Ajouter les tuiles OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Ajouter des marqueurs pour chaque utilisateur
  const locations = {
    "Toronto, Canada": { lat: 43.6532, lng: -79.3832 },
    "New Delhi, India": { lat: 28.6139, lng: 77.209 },
    "Lisbon, Portugal": { lat: 38.7223, lng: -9.1393 },
    "Dublin, Ireland": { lat: 53.3498, lng: -6.2603 },
    "Rome, Italy": { lat: 41.9028, lng: 12.4964 },
    "Buenos Aires, Argentina": { lat: -34.6037, lng: -58.3816 },
    "Paris, France": { lat: 48.8566, lng: 2.3522 },
  };

  testimonials.forEach((testimonial) => {
    const position = locations[testimonial.location];
    if (position) {
      L.marker([position.lat, position.lng], {
        title: testimonial.name,
        icon: L.icon({
          iconUrl: testimonial.image,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        }),
      }).addTo(map);
    }
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials();
  initMap();
});

// Modal functionality
const signInModal = document.getElementById("signinModal");
const signUpModal = document.getElementById("signupModal");
const signInButton = document.querySelector("header button:nth-of-type(1)");
const signUpButton = document.querySelector("header button:nth-of-type(2)");

// Open Sign In Modal
signInButton.addEventListener("click", () => {
  signInModal.classList.remove("hidden");
});

// Open Sign Up Modal
signUpButton.addEventListener("click", () => {
  signUpModal.classList.remove("hidden");
});

// Close Modals
document.getElementById("closeSignIn").addEventListener("click", () => {
  signInModal.classList.add("hidden");
});

document.getElementById("closeSignUp").addEventListener("click", () => {
  signUpModal.classList.add("hidden");
});

// Switch between modals
document.getElementById("showSignUp").addEventListener("click", () => {
  signInModal.classList.add("hidden");
  signUpModal.classList.remove("hidden");
});

document.getElementById("showSignIn").addEventListener("click", () => {
  signUpModal.classList.add("hidden");
  signInModal.classList.remove("hidden");
});

// Close modals when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === signInModal) {
    signInModal.classList.add("hidden");
  }
  if (event.target === signUpModal) {
    signUpModal.classList.add("hidden");
  }
});
