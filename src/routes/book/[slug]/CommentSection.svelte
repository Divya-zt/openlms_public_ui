<script>
    let comments = [
        {
            id: 1,
            author: "Natalie Dokter",
            avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sbwQLBlw1R8V6D5AbIZVCYtzC8xzds.png",
            points: 3,
            content: "I'm not often interested in stories set in outer space, but the characters were so intriguing, and the twists were great, I was hooked to the very end! Nicely done!",
            timestamp: "21:55 Jan 17, 2025",
            replies: [
                {
                    id: 2,
                    author: "Reese Blaise",
                    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V9YcswqCIo8vxVd3KCF1XHM0bGbDX1.png",
                    points: 1,
                    content: "Thanks!",
                    timestamp: "17:17 Jan 20, 2025",
                }
            ]
        },
        {
            id: 3,
            author: "Euan Cuares",
            avatar: "/placeholder.svg",
            points: 2,
            content: "A great read! This story got me immersed and I genuinely felt the solitude and the need to be in contact with another human being that the main character felt. This was enjoyable and it made me really curious as to how the story unfolds.",
            timestamp: "14:40 Jan 18, 2025"
        }
    ];
  
    let likes = 85;
    let isLiked = false;
  
    function handleLike() {
        if (isLiked) {
            likes -= 1;
        } else {
            likes += 1;
        }
        isLiked = !isLiked;
    }
</script>

<div class="comment-container">
    <div class="header">
        <span class="report">Report</span>
        <span class="timestamp">January 11, 2025 01:25</span>
    </div>

    <div class="author-section">
        <div class="author-info">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V9YcswqCIo8vxVd3KCF1XHM0bGbDX1.png" alt="Reese Blaise" class="avatar" />
            <div>
                <h2>Reese Blaise</h2>
                <p>9 submissions</p>
            </div>
        </div>
        <button class="follow-btn">Follow</button>
    </div>

    <div class="comment-section">
        <div class="comment-form">
            <textarea placeholder="Discuss this story..." />
            <div class="form-footer">
                <p>
                    You must <a href="#" class="link">sign up</a> or
                    <a href="#" class="link">log in</a> to submit a comment.
                </p>
                <button class="post-btn">Post comment</button>
            </div>
        </div>

        <div class="engagement-stats">
            <div class="stats-content">
                <button 
                    class="like-btn" 
                    class:liked={isLiked} 
                    on:click={handleLike}
                >
                    👍 {likes} likes
                </button>
                <span class="comment-count">51 comments</span>
            </div>
            <hr class="divider" />
        </div>

        {#each comments as comment, index (comment.id)}
            <div class="comment">
                <div class="comment-content">
                   
                    <img src={comment.avatar || "/placeholder.svg"} alt={comment.author} class="avatar-small" />
                    <div class="vote-section">
                        <button class="vote">▲</button>
                        <button class="vote">▼</button>
                    </div>
                    <div class="comment-body">
                        <div class="comment-header">
                            <span class="points">{comment.points} points</span>
                            <span class="author">{comment.author}</span>
                            <span class="time">{comment.timestamp}</span>
                        </div>
                        <p class="comment-text">{comment.content}</p>
                        <button class="reply-btn">Reply</button>

                        {#if comment.replies && comment.replies.length > 0}
                            {#each comment.replies as reply (reply.id)}
                                <div class="reply">
                                    <div class="reply-content">
                                        
                                        <img src={reply.avatar || "/placeholder.svg"} alt={reply.author} class="avatar-small" />
                                        <div class="vote-section">
                                            <button class="vote">▲</button>
                                            <button class="vote">▼</button>
                                        </div>
                                        <div class="reply-body">
                                            <div class="comment-header">
                                                <span class="points">{reply.points} points</span>
                                                <span class="author">{reply.author}</span>
                                                <span class="time">{reply.timestamp}</span>
                                            </div>
                                            <p class="comment-text">{reply.content}</p>
                                            <button class="reply-btn">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>
                </div>
            </div>
            {#if index < comments.length - 1}
                <hr class="divider" />
            {/if}
        {/each}
    </div>
</div>

<style>
    .comment-container {
        max-width: 48rem;
        margin: 0 auto;
        padding: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .report {
        color: #22c55e;
        font-size: 0.875rem;
        cursor: pointer;
    }

    .report:hover {
        text-decoration: underline;
    }

    .timestamp {
        color: #6b7280;
        font-size: 0.875rem;
    }

    .author-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.75rem;
        margin-bottom: 1rem;
    }

    .author-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        object-fit: cover;
    }

    .author-info h2 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
        color: #111827;
    }

    .author-info p {
        color: #6b7280;
        margin: 0;
        font-size: 0.875rem;
    }

    .follow-btn {
        padding: 0.375rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 9999px;
        background: white;
        color: #3b82f6;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
    }

    .follow-btn:hover {
        background: #f0f9ff;
    }

    .comment-section {
        border: 1px solid #e5e7eb;
        border-radius: 0.75rem;
        background: white;
        overflow: hidden;
    }

    .comment-form {
        padding: 1rem;
    }

    textarea {
        width: 100%;
        min-height: 100px;
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        background: #f9fafb;
        font-size: 0.875rem;
        font-family: inherit;
        resize: vertical;
    }

    textarea:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
    }

    .form-footer p {
        color: #6b7280;
        font-size: 0.875rem;
        margin: 0;
    }

    .link {
        color: #3b82f6;
        text-decoration: none;
        font-weight: 500;
    }

    .link:hover {
        text-decoration: underline;
    }

    .post-btn {
        padding: 0.375rem 0.75rem;
        background: #e5e7eb;
        color: #6b7280;
        border: none;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
    }

    .engagement-stats {
        border-top: 1px solid #e5e7eb;
    }

    .stats-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1rem;
    }

    .like-btn {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        background: none;
        border: none;
        color: #6b7280;
        font-size: 0.875rem;
        padding: 0;
        cursor: pointer;
    }

    .like-btn:hover {
        color: #3b82f6;
    }

    .like-btn.liked {
        color: #3b82f6;
    }

    .comment-count {
        color: #6b7280;
        font-size: 0.875rem;
    }

    .divider {
        border: none;
        border-top: 1px solid #e5e7eb;
        margin: 0;
    }

    .comment {
        padding: 1rem;
    }

    .comment-content {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    width: 100%; /* Make sure comment content can stretch fully */
}

    .vote-section {
        display: flex;
        flex-direction: row;
        gap: 2px;
    }

    .vote {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5e7eb;
        border-radius: 3px;
        background: white;
        color: #9ca3af;
        font-size: 12px;
        cursor: pointer;
        padding: 0;
    }

    .vote:hover {
        background: #f3f4f6;
        color: #6b7280;
    }

    .avatar-small {
        width: 32px;
        height: 32px;
        border-radius: 9999px;
        object-fit: cover;
    }

    .comment-body {
        flex: 1;
    }

    .comment-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }

    .points {
        color: #6b7280;
        font-size: 0.875rem;
    }

    .author {
        color: #111827;
        font-weight: 500;
        font-size: 0.875rem;
    }

    .time {
        color: #6b7280;
        font-size: 0.875rem;
    }

    .comment-text {
        color: #111827;
        font-size: 0.875rem;
        line-height: 1.5;
        margin: 0.375rem 0;
    }

    .reply-btn {
        color: #6b7280;
        background: none;
        border: none;
        font-size: 0.875rem;
        padding: 0;
        cursor: pointer;
    }

    .reply-btn:hover {
        text-decoration: underline;
    }

    .reply {
    margin-top: 0.75rem;
    padding: 1rem;
    background: #f9fafb;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    border-left: none;
    border-right: none;
    border-radius: 0; 
    width: 100%; /* Ensure full width */
}


    .reply-content {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
    }

    .reply-body {
        flex: 1;
    }
</style>