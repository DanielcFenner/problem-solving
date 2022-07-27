var isSquare = function (n) {
  if (n < -1) return false;

  for (let i = 0; i < n + 1; i++) {
    if (i * i === n) return true;
  }
  return false;
};
