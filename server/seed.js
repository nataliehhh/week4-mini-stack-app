import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        filmtitle TEXT NOT NULL,
        review TEXT,
        star TEXT
    )
`);

db.exec(`
    INSERT INTO reviews (username, filmtitle, review, star)
    VALUES
    ('Blake', 'Jingle All The Way', 'Awful Christmas movie. Dont know a single person who considers this a classic or even good Christmas movie. The plot is that of a bad made for tv movie for kids. Want to watch Arnold Schwarzenegger try to find a present for two hours? This is your movie. All about getting a child a present… you know, because thats the entire point of Christmas.', '⭐'),
    ('Harry', 'Elf', '2ND BEST XMAS MOVIE EVER! A Great christmas movie for the entire family! heck, even your grandparents will enjoy it! the burping scene = lots of laughter! Great cast who can preform amazing stunts! When Buddy (Will Ferrell) is hit with lego pieces in the fake santa scene and then the manager spears the fake santa into the lego new york that was AWESOME! And funny... 5 stars! BRAVO! BRAVO!', '⭐⭐⭐⭐⭐'), ('Michele', 'White Christmas', 'Loved this movie. Danny Kaye and Bing Crosby are the perfect mix. Wholesome and traveling back in time when movies were in an era long forgotten. There was nothing not to like. Its a great movie everyone can enjoy.', '⭐⭐⭐⭐⭐')`);