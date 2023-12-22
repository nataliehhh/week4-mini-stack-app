import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.json("looking at the root route")
});

app.get("/reviews", function (request, response) {
    let reviews = [];
    if (request.query.id) {
        reviews = db
            .prepare(`SELECT * FROM reviews WHERE id=${request.query.id}`)
            .all();
    } else {
    reviews = db.prepare("SELECT * FROM reviews").all();
    }
    response.json(reviews);
});

app.post("/reviews", function (request, response) {
    console.log(request.body);
    const username = request.body.username;
    const filmtitle = request.body.filmtitle;
    const review = request.body.review;
    const star = request.body.star;

    const newReview = db
      .prepare(`INSERT INTO reviews (username, filmtitle, review, star) VALUES (?, ?, ?, ?)`)
      .run(username, filmtitle, review, star);
    response.json(newReview);
});

app.delete("/reviews/:id", function (request, response) {
    const selectedReviewId = request.params.id;
    db.prepare(`DELETE FROM reviews WHERE id = ?`).run(selectedReviewId);
    console.log("review deleted");
    response.json({ message: "reveiw deleted" });
});

app.listen("https://week4-film-review-app-vquc.onrender.com", function () {
    console.log("It is working!");
});

