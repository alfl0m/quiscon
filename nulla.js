function getDirection(variable) {
  const directions = {
    "1": "right",
    "2": "left"
  };
  return directions[variable] || "invalid";
}
