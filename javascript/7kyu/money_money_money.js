function calculateYears(principal, interest, tax, desired) {

    let years = 0
    while (principal < desired) {
        let yearsInterest = principal * interest
        principal += yearsInterest
        principal -= yearsInterest * tax
        years++
    }
    return years
}