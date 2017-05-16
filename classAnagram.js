class Anagram {
    constructor(word) {
        this.word = word;
    }
    
    match(word) {
        if (word == this.word) {
            return false;
        }
        if (word.length != this.word.length) {
            return false;
        }
        for (let letter of word) {
          if (this.word.indexOf(letter) == -1) {
               return false;
           }
        }
        return true; 
    }


    matches(...wordArray) {
        let matchesArray = [];
        for (let word of wordArray) {
            if (this.matches(word)) {
                matchesArray.push(word);
            }
        }
        return []; 
    }
}