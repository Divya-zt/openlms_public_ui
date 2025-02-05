<script>
    export let book;
</script>

<div class="w-screen bg-[#0B3954] h-[200px] flex justify-center items-center text-start ">
    <div class="w-full max-w-[1200px] text-white">
        <h1 class="text-4xl font-bold mb-2">{book.name}</h1>
        <p class="text-lg flex flex-wrap">
            <span>
                Submitted into <strong class="font-semibold">Contest #{book.contestNumber}</strong> in response to: 
                <em class="italic">{book.intro}</em>...
            </span>
            <span>
                <a href={book.promptLink} class="text-white underline font-medium hover:no-underline">view prompt</a>
            </span>
        </p>
    </div>
</div>
