<script>
    import { onMount } from 'svelte';
  
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
  
  <div class="max-w-3xl mx-auto p-4 font-sans">
    <div class="flex justify-between items-center mb-6">
      <span class="text-green-500 hover:underline cursor-pointer text-sm">Report</span>
      <span class="text-gray-500 text-sm">January 11, 2025 01:25</span>
    </div>
  
    <div class="flex justify-between items-center p-4 border border-gray-200 rounded-xl mb-4">
      <div class="flex items-center gap-3">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V9YcswqCIo8vxVd3KCF1XHM0bGbDX1.png" alt="Reese Blaise" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <h2 class="text-base font-semibold text-gray-900">Reese Blaise</h2>
          <p class="text-sm text-gray-500">9 submissions</p>
        </div>
      </div>
      <button class="px-4 py-2 border border-gray-200 rounded-full text-blue-500 text-sm font-medium hover:bg-blue-50">Follow</button>
    </div>
  
    <div class="border border-gray-200 rounded-xl overflow-hidden">
      <div class="p-4">
        <textarea placeholder="Discuss this story..." class="w-full min-h-[100px] p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div class="flex justify-between items-center mt-4">
          <p class="text-sm text-gray-500">
            You must <a href="#" class="text-blue-500 font-medium">sign up</a> or
            <a href="#" class="text-blue-500 font-medium"> log in</a> to submit a comment.
          </p>
          <button class="px-4 py-2 bg-gray-200 text-gray-500 rounded text-sm font-medium">Post comment</button>
        </div>
      </div>
  
      <div class="border-t border-gray-200">
        <div class="flex items-center gap-4 p-4">
          <button 
            on:click={handleLike}
            class="flex items-center gap-2 text-sm {isLiked ? 'text-blue-500' : 'text-gray-500'}"
          >
            👍 {likes} likes
          </button>
          <span class="text-sm text-gray-500">51 comments</span>
        </div>
        <hr class="border-gray-200" />
      </div>
  
      {#each comments as comment, index}
        <div>
          <div class="p-4">
            <div class="flex gap-3">
              <img src={comment.avatar || "/placeholder.svg"} alt={comment.author} class="w-8 h-8 rounded-full object-cover" />
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <div class="flex gap-1">
                    <button class="text-gray-400 hover:text-gray-600">▲</button>
                    <button class="text-gray-400 hover:text-gray-600">▼</button>
                  </div>
                  <span class="text-sm text-gray-500">{comment.points} points</span>
                  <span class="text-sm font-medium text-gray-900">{comment.author}</span>
                  <span class="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p class="text-sm text-gray-900 mb-2">{comment.content}</p>
                <button class="text-sm text-gray-500 hover:underline">Reply</button>
  
                {#if comment.replies}
                  {#each comment.replies as reply}
                    <div class="mt-3 pt-3 border-t border-gray-200">
                      <div class="flex gap-3">
                        <img src={reply.avatar || "/placeholder.svg"} alt={reply.author} class="w-8 h-8 rounded-full object-cover" />
                        <div class="flex-1">
                          <div class="flex items-center gap-2 mb-1">
                            <div class="flex gap-1">
                              <button class="text-gray-400 hover:text-gray-600">▲</button>
                              <button class="text-gray-400 hover:text-gray-600">▼</button>
                            </div>
                            <span class="text-sm text-gray-500">{reply.points} points</span>
                            <span class="text-sm font-medium text-gray-900">{reply.author}</span>
                            <span class="text-sm text-gray-500">{reply.timestamp}</span>
                          </div>
                          <p class="text-sm text-gray-900 mb-2">{reply.content}</p>
                          <button class="text-sm text-gray-500 hover:underline">Reply</button>
                        </div>
                      </div>
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          </div>
          {#if index < comments.length - 1}
            <hr class="border-gray-200" />
          {/if}
        </div>
      {/each}
    </div>
  </div>