function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var newstr = [];
    if (vowels.indexOf(str[0]) !== -1) {
        return str + "way";
    } else {
        for (var i = 0; i < str.length;) {
            if (vowels.indexOf(str[i]) !== -1) {
                newstr = newstr.join("");
                return str.substr(i) + newstr + "ay";
            } else {
                newstr.push(str[i]);
                i++;
            }
        }
    }
}