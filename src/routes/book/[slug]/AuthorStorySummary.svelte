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

<div class="author-container">
    <div class="author-info">
        <img src={author.profilePic} alt="Author profile" class="author-pic" />
        <div class="author-details">
            <h2 class="author-name">
                {author.name} 
                <button class="follow-btn" on:click={toggleFollow}>
                    {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                </button>
            </h2>
        </div>
    </div>
    
    <div class="stats">
        <span class="like-count">👍 {author.likes} likes</span>
        <span class="comment-count">💬 {author.comments} comments</span>
    </div>

    <div class="genre-tag">{author.genre}</div>
    <div class="genre-tag">{author.genre}</div>

    {#if author.containsSensitiveContent}
        <div class="sensitive-warning">This story contains sensitive content</div>
    {/if}

    <div class="story-summary">
        <p>{story.summary}</p>
    </div>
</div>

<style>
    .author-container {
        max-width: 800px;
        margin: auto;
        font-family: Arial, sans-serif;
    }

    .author-info {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .author-pic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .author-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .author-name {
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .follow-btn {
        padding: 3px 9px;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        color: #87CEEB;
        border: 2px solid #87CEEB;
        border-radius: 15px;
        background: white;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .follow-btn:hover {
        background: #87CEEB;
        color: white;
    }

    .stats {
        color: gray;
        font-size: 0.9rem;
        margin-top: 5px;
        display: flex;
        gap: 15px;
    }

    .like-count, .comment-count {
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .genre-tag {
        display: inline-block;
        background: #d3d3d3;
        padding: 4px 10px;
        border-radius: 10px;
        font-size: 0.8rem;
        font-weight: bold;
        margin-top: 5px;
    }

    .sensitive-warning {
        background: white;
        color: rgb(42, 42, 42);
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        border: 1px solid gray;
    }

    .story-summary {
        margin-top: 20px;
        font-size: 1.1rem;
        line-height: 1.6;
    }
</style>
