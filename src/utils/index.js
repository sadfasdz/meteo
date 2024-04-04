export function capitalizeFistLetter(str) {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
}

export function getCelsius(tem) {
  return tem - 273.15;
}

export function getTime(seconds) {
  return new Date(seconds * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
}
