/**
 * @file
 * This function has you searching by author and by title.  You'll want to 
 * distinguish between an exact match or a partial match for this assignment.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

/**
 * Gets the first ten books from the database.
 * @return {Array} An array of books containing the first ten entries.
 */
var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Return all books matching the title.
 * @param {Array} books The array of books.
 * @param {String} title The title string.
 * @param {Boolean} partial (Optional) If true, matches using indexOf.
 * @returns {Array} An array of results.  Returns zero-length array if no 
 * matches found.
 */
function searchTitle(books, title, partial = true) {
      let bookInfo = [];
    for (let book of books) {
        let bookTitle = book['title'] || book['title_latin'];
         //console.log(bookTitle);
        if (bookTitle == title || (partial && bookTitle.indexOf(title) >= 0)) {
            bookInfo.push(book);
        }
       // console.log(bookInfo);
    }
    //console.log(bookInfo);
    return bookInfo;
};


/** 
 * Return all books matching the author.
 * @param {Array} books The array of books.
 * @param {String} author The author string.
 * @param {Boolean} partial (Optional) If true, matches using indexOf.
 * @returns {Array} An array of results.  Returns zero-length array if no 
 * matches found.
 */
function searchAuthor(books, author, partial = true) {
       let bookInfo = [];
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books[i].author_data.length; j++) {
           let authorName = books[i].author_data[j].name;
    //    let authorName = books['author_data'] || books['name'];
       // console.log(books['author_data']);
         if (authorName == author || 
         (partial && authorName.indexOf(author) >= 0)) {
                bookInfo.push(books);
            }
        }
    }
    console.log(bookInfo);
    return bookInfo;
};


module.exports.searchAuthor = searchAuthor;
module.exports.searchTitle = searchTitle;
//searchTitle(getFirstTenBooks(), 'Inside', true);
searchAuthor(getFirstTenBooks(), 'Bill Bercik', true);