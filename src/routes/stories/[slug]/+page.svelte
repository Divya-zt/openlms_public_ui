<script>
    // export let storyData;
    // console.log("data",storyData);
    import BookHeading from '../../../lib/Components/bookHighlight.svelte';
    export let data
    let likes = 85;
    let isLiked = false;
    
    function handleLike() {
      if (isLiked) {
        likes--;
      } else {
        likes++;
      }
      isLiked = !isLiked;
    }
  </script>
  
  <svelte:head>
    <title>{data.title} | Reedsy Prompts</title>
  </svelte:head>
  
 
  <BookHeading/>
  
  <main style="max-width: 800px; margin: 0 auto; padding: 32px 16px;">
    <div style="background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <div style="white-space: pre-line;">
        {data.content}
      </div>
    </div>
    
    <div style="margin-top: 32px; display: flex; justify-content: center; gap: 16px;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <button style="background-color: #1DA1F2; border: none; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </button>
        <span>Twitter</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <button style="background-color: #4267B2; border: none; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </button>
        <span>Facebook</span>
      </div>
    </div>
    
    <div style="margin-top: 32px; border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; padding: 16px 0; display: flex; justify-content: space-between; align-items: center;">
      <button on:click={handleLike} style="background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; color: {isLiked ? '#3498db' : 'inherit'};">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        {likes} likes
      </button>
      <span>{data.comments} comments</span>
    </div>
    
    <div style="margin-top: 32px;">
      <h3 style="font-size: 24px; margin-bottom: 16px;">Comments</h3>
      <div style="background-color: #f5f5f5; border-radius: 8px; padding: 24px;">
        <p style="color: #666; margin-bottom: 16px;">You must sign up or log in to submit a comment.</p>
        <div style="display: flex; gap: 16px;">
          <button style="background-color: #3498db; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
            Sign up
          </button>
          <button style="background-color: white; color: #333; border: 1px solid #ccc; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
            Log in
          </button>
        </div>
      </div>
    </div>
  </main>