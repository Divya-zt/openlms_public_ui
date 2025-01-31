<script>
    export let book;
  </script>
  
  <div class="book-details">
    <h1>{book.name}</h1>
    <p>Contest Number: {book.contestNumber}</p>
    <p>{book.intro}</p>
    <a href={book.promptLink}>Prompt Link</a>
  </div>
  
  <style>
    .book-details {
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }
  
    h1 {
      font-size: 24px;
      font-weight: bold;
    }
  
    p {
      font-size: 16px;
    }
  
    a {
      color: #23a6f0;
      font-weight: bold;
      text-decoration: underline;
    }
  
    a:hover {
      opacity: 0.8;
    }
  </style>
  