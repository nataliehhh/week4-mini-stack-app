const form = document.getElementById("form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const response = await fetch("http://localhost:8080/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
    });
    const json = await response.json();
    console.log(json);
    setTimeout(function() {
        location.reload();
    }, 500);
});

async function getReviews() {
    const response = await fetch("http://localhost:8080/reviews");
    const reviews = await response.json();
    reviews.forEach(function (rev) {
        const reviewBox = document.createElement("div");
        const h3 = document.createElement("h3");
        const stars = document.createElement("p")
        const p = document.createElement("p");
        const deleteBtn = document.createElement("button");
        h3.textContent = `${rev.username}'s review of ${rev.filmtitle}`;
        stars.textContent = rev.star;
        p.textContent = rev.review;
        deleteBtn.textContent = "X";
        const reviewContainer = document.getElementById("reviewContainer");
        reviewContainer.appendChild(reviewBox);
        reviewBox.appendChild(h3);
        reviewBox.appendChild(stars);
        reviewBox.appendChild(p);
        reviewBox.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", async function () {
            await fetch(`http://localhost:8080/reviews/${rev.id}`, 
            {
                method: "DELETE",
            });
            reviewBox.remove();
        })
    });
}

getReviews();

