const projectComment = document.getElementById("projectComment");

const submitButton = document.getElementById("submitComment");

// "e" is the argument in the function, followed by the block of code to run
submitButton?.addEventListener("click", async e => {
    e.preventDefault();
    const body = projectComment.value;

    if (body) {
        const newComment = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (newComment.ok) {
            // If successful, reload page with new comment
            window.location.reload();
          } else {
            alert(response.statusText);
        };
    };
});