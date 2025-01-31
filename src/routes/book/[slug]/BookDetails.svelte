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
    .book-container {
        background-color: #0B3954;
        width: 100vw; 
        min-height: 180px;
        padding: 60px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: start;
        box-sizing: border-box;
        /* Fix potential horizontal scroll */
        position: relative;
        left: 45%;
        right: 45%;
        margin-left: -45vw;
        margin-right: -45vw;
        font-family: "Rubik", Helvetica, sans-serif;

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
        margin-left:180px;


    }

    p {
        font-size: 1.125rem;
        line-height: 1.5;
        margin: 0;
        max-width: 900px; /* Allow text to be more readable while maintaining layout */
        margin: 0 auto;
        /* display: inline; */
        margin-left:180px;

        /* display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        align-items:center; */
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
        }

        p {
            font-size: 1rem;
        }
    }
</style>