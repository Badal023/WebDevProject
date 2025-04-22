const modelData = {
  "Maruti": ["Alto", "Swift", "Baleno", "Celerio", "WagonR", "Dzire", "Ertiga"],
  "Hyundai": ["i10", "i20", "Creta", "Venue", "Verna", "Tucson"],
  "Tata": ["Tiago", "Tigor", "Nexon", "Harrier", "Safari", "Altroz"],
  "Toyota": ["Glanza", "Innova", "Fortuner", "Camry", "Urban Cruiser"],
  "Mahindra": ["Bolero", "XUV300", "Scorpio", "Thar", "XUV700"],
  "Honda": ["Amaze", "City", "Elevate", "WR-V"],
  "Kia": ["Sonet", "Seltos", "Carens", "EV6"],
  "Renault": ["Kwid", "Triber", "Kiger", "Duster"],
  "Volkswagen": ["Polo", "Virtus", "Taigun", "Tiguan"],
  "Skoda": ["Fabia", "Slavia", "Octavia", "Kushaq", "Superb"],
  "Nissan": ["Magnite", "Kicks", "Terrano"],
  "MG": ["Astor", "Hector", "Gloster", "ZS EV"],
  "Jeep": ["Compass", "Meridian", "Wrangler"],
  "Ford": ["EcoSport", "Endeavour", "Figo"],
  "BMW": ["X1", "X3", "X5", "5 Series", "7 Series"],
  "Mercedes": ["A-Class", "C-Class", "E-Class", "G-Wagon", "GLA"],
  "Audi": ["A4", "A6", "Q3", "Q5", "Q7"],
  "Jaguar": ["XE", "XF", "F-Pace", "I-Pace"],
  "Lexus": ["ES", "RX", "NX", "LX"],
  "Volvo": ["XC40", "XC60", "XC90", "S60"],
  "Porsche": ["Cayenne", "Macan", "Panamera"],
  "Land Rover": ["Defender", "Discovery", "Range Rover Evoque"],
  "Mini": ["Cooper", "Clubman", "Countryman"],
  "Maserati": ["Ghibli", "Levante", "Quattroporte"],
  "Rolls Royce": ["Phantom", "Ghost", "Cullinan"],
  "Bentley": ["Bentayga", "Continental GT", "Flying Spur"],
  "Lamborghini": ["Huracan", "Aventador", "Urus"],
  "Ferrari": ["Roma", "F8 Tributo", "296 GTB"]
};

const brandTier = {
  "Maruti": 1, "Renault": 1, "Tata": 1,
  "Hyundai": 2, "Kia": 2, "Honda": 2, "Mahindra": 2,
  "Toyota": 3, "Ford": 3, "Nissan": 3,
  "Skoda": 4, "Volkswagen": 4, "MG": 4, "Jeep": 4,
  "BMW": 5, "Mercedes": 5, "Audi": 5, "Jaguar": 5, "Lexus": 5, "Volvo": 5, "Mini": 5,
  "Porsche": 6, "Land Rover": 6, "Maserati": 6,
  "Rolls Royce": 7, "Bentley": 7, "Lamborghini": 7, "Ferrari": 7
};

const basePrices = {
  basic: 2499,
  premium: 4499,
  deluxe: 6499,
  oil: 599,
  interior: 299,
  exterior: 299,
  windshield: 899
};

const priceChart = {};

for (const [brand, models] of Object.entries(modelData)) {
  const tier = brandTier[brand];
  const multiplier = 0.8 + tier * 0.2;

  models.forEach(model => {
    priceChart[model] = [
      Math.round(basePrices.basic * multiplier),
      Math.round(basePrices.premium * multiplier),
      Math.round(basePrices.deluxe * multiplier),
      Math.round(basePrices.oil * multiplier),
      Math.round(basePrices.interior * multiplier),
      Math.round(basePrices.exterior * multiplier),
      Math.round(basePrices.windshield * multiplier)
    ];
  });
}

const brandSelect = document.getElementById("brand-select");
const modelSelect = document.getElementById("model-select");

// Populate brand dropdown
for (const brand in modelData) {
  const opt = document.createElement("option");
  opt.value = brand;
  opt.textContent = brand;
  brandSelect.appendChild(opt);
}

brandSelect.addEventListener("change", () => {
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  const models = modelData[brandSelect.value] || [];
  modelSelect.disabled = models.length === 0;

  models.forEach(model => {
    const opt = document.createElement("option");
    opt.value = model;
    opt.textContent = model;
    modelSelect.appendChild(opt);
  });
});

modelSelect.addEventListener("change", () => {
  const model = modelSelect.value;
  if (priceChart[model]) {
    const [basic, premium, deluxe, oil, interior, exterior, windshield] = priceChart[model];
    document.getElementById("basic-price").textContent = `₹${basic}`;
    document.getElementById("premium-price").textContent = `₹${premium}`;
    document.getElementById("deluxe-price").textContent = `₹${deluxe}`;
    document.getElementById("oil-price").textContent = `₹${oil}`;
    document.getElementById("interior-price").textContent = `₹${interior}`;
    document.getElementById("exterior-price").textContent = `₹${exterior}`;
    document.getElementById("windshield-price").textContent = `₹${windshield}`;
  }
});

    
