<script>
    const author = {
        name: "Reese Blaise",
        profilePic: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg", 
        likes: 85,
        comments: 51,
        genre: "SCIENCE FICTION",
        containsSensitiveContent: true
    };

    const story = {
        summary: `"Humphrey," I yell, banging my fist against the observation deck door. 
        "There's something wrong with Jansen. Humphrey!" I try to push the door open, 
        but it's been barricaded from the other side. How long has Humphrey been holed up 
        in there... three months? Three years? It's hard to tell.

        "Humphrey!" I yell one last time before giving up. This whole ship is going crazy. 
        Four years in space and I’m the only one holding it together.

        I make my way to the Navigation room to find Jansen in a state of mania. He sits 
        tuck-kneed in the captain’s chair whirling between the wall-to-wall display panels. 
        Each panel is playing clips from the historical archives, and as far as I can tell 
        they’re looping rapidly through. Earth’s worst stories—murders, riots, and the like— 
        all flashing off...`
    };

    let isFollowing = false;

    function toggleFollow() {
        isFollowing = !isFollowing;
    }
</script>

<div class="max-w-2xl mx-auto font-sans">
    <div class="flex items-center gap-3">
        <img src={author.profilePic} alt="Author profile" class="w-12 h-12 rounded-full" />
        <div>
            <h2 class="text-lg font-bold flex items-center gap-3">
                {author.name} 
                <button class="px-3 py-1 text-sm font-bold uppercase text-sky-400 border-2 border-sky-400 rounded-full bg-white transition-all hover:bg-sky-400 hover:text-white" on:click={toggleFollow}>
                    {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                </button>
            </h2>
        </div>
    </div>
    
    <div class="text-gray-600 text-sm mt-2 flex gap-4">
        <span class="font-bold flex items-center gap-1">👍 {author.likes} likes</span>
        <span class="font-bold flex items-center gap-1">💬 {author.comments} comments</span>
    </div>

    <div class="inline-block bg-gray-300 px-3 py-1 rounded-md text-xs font-bold mt-2">{author.genre}</div>

    {#if author.containsSensitiveContent}
        <div class="bg-white text-gray-800 p-3 border border-gray-400 rounded-md text-center font-bold mt-4">
            This story contains sensitive content
        </div>
    {/if}

    <div class="mt-5 text-lg leading-relaxed">
        <p>{story.summary}</p>
    </div>
</div>
