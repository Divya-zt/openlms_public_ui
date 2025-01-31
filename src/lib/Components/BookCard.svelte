<script>
    import GoogleMatrialIcon from '$lib/Components/GoogleMatrialIcon.svelte';

    const books = [
        {
            uuid: '1',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            category: 'Classic',
            description: 'A novel set in the 1920s about wealth and excess.',
            coverImage: 'https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg',
            duration: '10',
        },
        {
            uuid: '2',
            title: '1984',
            author: 'George Orwell',
            category: 'Dystopian',
            description: 'A story of surveillance and totalitarianism.',
            coverImage: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
            duration: '15',
        },
        {
            uuid: '3',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            category: 'Fiction',
            description: 'A powerful novel about racism and justice.',
            coverImage: 'https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg',
            duration: '12',
        },
        {
            uuid: '4',
            title: 'Moby-Dick',
            author: 'Herman Melville',
            category: 'Adventure',
            description: 'A thrilling tale of obsession and revenge.',
            coverImage: 'https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg',
            duration: '20',
        }
    ];
</script>

<div class="grid grid-cols-4 gap-4 mx-auto max-w-screen-lg">
    {#each books as book}
        <a href={`/book/humanitys-rebirth`} class="block w-full">
            <div class="relative flex flex-col gap-1 hover:shadow-md justify-start h-full bg-blue-10 rounded-md shadow-lg border border-gray-100 w-full">
                <div class="h-48 overflow-hidden p-3 pb-0">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        class="w-full object-cover object-center aspect-[3/4] grayscale"
                        loading="lazy"
                    />
                </div>
                <div class="m-4 flex flex-col gap-2">
                    <span class="text-xs capitalize">{book.category}</span>
                    <span>
                        <a href={`/book/humanitys-rebirth`} class="text-white flex items-start justify-start" title="View book details">
                            <GoogleMatrialIcon iconName="arrow_forward" styleType="sharp" addClass={'text-base h-6 w-6 bg-secondary rounded-full flex items-center justify-center -rotate-45'} />
                        </a>
                    </span>
                    <span class="font-semibold text-sm capitalize line-clamp-2" title={book.title}>{book.title}</span>
                    <span class="text-xs">by {book.author}</span>
                    <span title={book.description} class="text-xs line-clamp-2">{book.description}</span>
                </div>
                <div class="mx-4 my-2 mb-4 mt-auto flex justify-between items-center">
                    <!-- <span class="text-xs flex items-center gap-1">
                        <img src="/calendar.svg" alt="" />
                        Duration: {book.duration} Days
                    </span> -->
                    
                </div>
            </div>
        </a>
    {/each}
</div>

