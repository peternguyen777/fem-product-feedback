export function capitalizeFirstLetter(string) {
  if (string.toLowerCase() === "ux") {
    return "UX";
  }

  if (string.toLowerCase() === "ui") {
    return "UI";
  }

  return string?.charAt(0).toUpperCase() + string?.slice(1);
}
