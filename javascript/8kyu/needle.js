function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    if (element === "needle") return `found the needle at position ${i}`;
  }
}
