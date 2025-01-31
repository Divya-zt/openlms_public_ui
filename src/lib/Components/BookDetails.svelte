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
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Rubik", Helvetica, sans-serif;
  }

  .book-details {
    color: white;
    width: 100%;
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 0 20px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.2;
    /* letter-spacing: -0.02em; */
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 0;
    max-width: 900px;
    margin: 0 auto;
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
      padding: 40px 0;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>