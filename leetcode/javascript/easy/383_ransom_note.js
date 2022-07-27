/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let magazineObject = {}
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i]
        if (!(char in magazineObject)) magazineObject[char] = 1
        else magazineObject[char] += 1
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i]
        if (!(char in magazineObject)) return false
        else magazineObject[char] -= 1
        
        if (magazineObject[char] === -1) return false;
    }
    
    return true;

};

console.log(canConstruct("aa", "aab"))