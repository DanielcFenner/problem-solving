function nbYear(p0, percent, aug, p) {
  let count = 0;
  const percentage = percent / 100;

  while (p0 < p) {
    p0 += Math.floor(p0 * percentage + aug);
    count++;
  }

  return count;
}
