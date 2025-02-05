<script>
    import BookDetails from "./BookDetails.svelte";
    import ContestBanner from "./ContestBanner.svelte";
    import AuthorStorySummary from "./AuthorStorySummary.svelte";
    import CommentSection from "./CommentSection.svelte";
    export let data; // Contains the data passed from `+page.js`
  
    const book = data.book;
</script>
  
  {#if book}
    <!-- <ContestBanner contestNumber={book.contestNumber} /> -->
    <div class="mb-4">
        <BookDetails book={book} />
    </div>
    <AuthorStorySummary/>
    <CommentSection/>
  {:else}
    <div class="not-found">
      <p>Book not found</p>
    </div>
  {/if}
  
  <style>
    .not-found {
      text-align: center;
      color: red;
      font-weight: bold;
      margin-top: 50px;
    }
  </style>
  