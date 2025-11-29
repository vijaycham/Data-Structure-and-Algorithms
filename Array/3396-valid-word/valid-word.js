/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {

};
var isValid = function (word) {
    if (word.length < 3) return false;
    let hasVowel = false;
    let hasConsonant = false;
    for (let ch of word) {
        if (!(/[a-zA-Z0-9]/.test(ch))) {
            return false;
        }

        if (/[aeiouAEIOU]/.test(ch)) {
            hasVowel = true;
        } else if (/[a-zA-Z]/.test(ch)) {
            hasConsonant = true;
        }
    }

    return hasVowel && hasConsonant;
};