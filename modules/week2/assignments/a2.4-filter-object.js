/**
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
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
var getFirstTenBooks = function () {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Filter the inputted books bounded by input year.
 * @param {Array} books An array of books.
 * @param {Number} yearMin The start year to filter by.
 * @param {Number} yearMax The end year to filter by.
 * @return {Array} The array of books, filtered by their publish date.
 */

function filterByDate(books, yearMin, yearMax) {

    for (let i = 0; i < books.length; i++) {
        let edIn = books[i].edition_info;
        edIn = edIn.replace(/([^0-9-])+/g, "");
        if (edIn.charAt(0) == '-') {
            edIn = edIn.substring(1);
        }
        edIn = edIn.substring(0, 4);

        let pubText = books[i].publisher_text;
        pubText = pubText.replace(/([^0-9-])+/g, "");
        pubText = pubText.substring(0, 4);





        edIn = edIn.replace("-", "", "");
        //console.log(edIn);


        let year = -1
        if (edIn) {
            year = edIn;
        }
        else if (pubText) {
            year = pubText;
        }

        books[i].year = year;
    }
    //console.log(books[i]);
    // i = [9]
    for (let i = books.length - 1; i >= 0; i--) {
        if (books[i].year < yearMin) {
            books.splice(i, 1);
        }
    }

    for (let i = books.length - 1; i >= 0; i--) {
        if (books[i].year > yearMax) {
            books.splice(i, 1);
        }
    }
    // for (let i = 0; i < books.length; i++)  {
    //console.log(books[i].year);
    // }
    //console.log(books);

    // console.log(keepers);
    //console.log(year);
    //console.log(edIn);
    //console.log(pubText);
    return books;

}


filterByDate(getFirstTenBooks(), 1996, 2008);

module.exports = filterByDate;