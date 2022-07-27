function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    tills.sort((a, b) => a - b);
    tills[0] += customer;
  }

  return Math.max(...tills);
}
