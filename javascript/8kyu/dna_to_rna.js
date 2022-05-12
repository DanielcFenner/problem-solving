function DNAtoRNA(dna) {
  let new_string = "";
  for (let i = 0; i < dna.length; i++) {
    const element = dna[i];
    if (element === "T") new_string += "U";
    else new_string += element;
  }
  return new_string;
}
