var api = {
    getWord(word) {
        word = word.toLowerCase().trim();
        const url = `https://diktoapi.appspot.com/api/v1/words/${word}`;
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;