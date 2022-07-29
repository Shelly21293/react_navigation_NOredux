let cars = [
  {
    model: "Honda",
    year: 2021,
    color: "black",
    img: "p1.jpg",
  },
  {
    model: "Mazda",
    year: 2022,
    color: "pink",
    img: "p1.jpg",
  },
  {
    model: "Suzuki",
    year: 2021,
    color: "white",
    img: "p1.jpg",
  },
  {
    model: "Kia",
    year: 2022,
    color: "Yellow",
    img: "p1.jpg",
  },
];

export function getCars() {
  return cars;
}

export function getCar(model) {
  return cars.find((car) => car.model === model);
}

export function deleteCar(model) {
  cars = cars.filter((car) => car.model !== model);
}
