<script>
  export let bookName = "Humanity’s Rebirth";
  export let contestNumber = 284;
  export let bookIntro =
    "Write about someone who receives a gift or message that changes their life forever....";
  export let promptLink = "#"; // Replace with actual link
</script>

<style>
  .full-background {
    width: 100%;
    background-color: #0d4f6b;
    color: white;
    padding: 50px 0;
    text-align: center;
  }

  .highlight-container {
    max-width: 900px;
    margin: auto;
  }

  .contest-banner {
    background-color: #23a6f0;
    color: white;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
  }

  .description {
    font-size: 18px;
    margin-top: 10px;
    font-style: italic;
  }

  .contest {
    font-weight: bold;
  }

  .prompt-link {
    color: white;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  .prompt-link:hover {
    opacity: 0.8;
  }
</style>

<div>
  <div class="contest-banner"></div>
  <div class="full-background">
    <div class="highlight-container">
      <div class="title">{bookName}</div>
      <p class="description">
        Submitted into <span class="contest">Contest #{contestNumber}</span> in
        response to: {bookIntro}
        <a class="prompt-link" href={promptLink}>view prompt</a>
      </p>
    </div>
  </div>
</div>
