<script>
    export let book;
</script>

<div class="book-container">
    <div class="book-details">
        <h1>{book.name}</h1>
        <p>
            Submitted into <strong>Contest #{book.contestNumber}</strong> in response to: 
            <em>{book.intro}</em>... 
            <a href={book.promptLink} class="prompt-link">view prompt</a>
        </p>
    </div>
</div>

<style>
    :global(body) {
        margin: 0; /* Remove default body margin */
        padding: 0; /* Remove default body padding */
        overflow-x: hidden; /* Prevent horizontal overflow */
    }

    .book-container {
        background-color: #0B3954;
        width: 100vw; /* Span the full viewport width */
        margin-left: -50vw; /* Offset to the left */
        left: 50%; /* Center the container */
        position: relative; /* Required for left and margin-left to work */
        height: 200px;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: start;
        box-sizing: border-box;
        font-family: "Rubik, Helvetica, sans-serif";
    }

    .book-details {
        color: white;
        width: 100%; /* Allow content to stretch */
        max-width: 1200px; /* Increased max-width */
        margin: 0 auto;
        padding: 0 20px;
        font-family: "Rubik, Helvetica, sans-serif";
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        line-height: 1.2;
        letter-spacing: -0.02em;
        font-family: "Rubik", Helvetica, sans-serif;
        margin-left: 180px;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.5;
        margin: 0;
        max-width: 900px; /* Allow text to be more readable while maintaining layout */
        margin-left: 180px;
    }

    em {
        font-style: italic;
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }

    .prompt-link {
        color: white;
        text-decoration: underline;
        font-weight: 500;
        margin-left: 0.25rem;
    }

    .prompt-link:hover {
        text-decoration: none;
    }

    @media (max-width: 640px) {
        .book-container {
            padding: 40px 20px;
        }

        h1 {
            font-size: 2rem;
            margin-left: 0; /* Adjust for smaller screens */
        }

        p {
            font-size: 1rem;
            margin-left: 0; /* Adjust for smaller screens */
        }
    }
</style>