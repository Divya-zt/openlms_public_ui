<script>
  export let book;
</script>

<div class="bg-blue-900 w-full py-16 flex justify-center items-center text-center font-rubik">
  <div class="text-white w-full max-w-5xl mx-auto px-5">
    <h1 class="text-4xl font-bold mb-4 leading-tight">{book.name}</h1>
    <p class="text-lg leading-relaxed max-w-3xl mx-auto">
      Submitted into <strong class="font-semibold">Contest #{book.contestNumber}</strong> in response to: 
      <em class="italic font-normal">{book.intro}</em>... 
      <a href={book.promptLink} class="text-white underline font-medium ml-1 hover:no-underline">view prompt</a>
    </p>
  </div>
</div>
