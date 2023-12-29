export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

export function changeSpacesToDashes(string) {
  return string.replace(/\s+/g, "-").toLowerCase();
}

export function fromUrlToTitle(string) {
  return capitalizeWords(string.replace(/-/g, " "));
}

export function replaceUpperCaseWithDash(str) {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export function lowerCaseAndDashes(string) {
  return string.toLowerCase().replace(/\s+/g, "-");
}
