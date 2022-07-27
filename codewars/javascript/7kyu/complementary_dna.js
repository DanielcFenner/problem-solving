function DNAStrand(dna){
    let new_string = "";

    for (let i = 0; i < dna.length; i++) {
        const dna_char = dna[i];
        new_string += DNASwap(dna_char);
    }

    return new_string;
    
  }

  function DNASwap(char) {
    switch (char) {
        case "A":
            return "T";
        case "T":
            return "A";
        case "C":
            return "G";
        case "G":
            return "C";
        default:
            return char;
    }
  }
