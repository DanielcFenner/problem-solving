function enough(cap, on, wait) {
    let peopleCantGetOn = cap - (on + wait);
    return peopleCantGetOn < 0 ? -peopleCantGetOn : 0
  }

  console.log(enough(100, 60, 50))