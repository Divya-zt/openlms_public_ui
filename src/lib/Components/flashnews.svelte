<script>
    let newsItems = [
      " New tech breakthrough revolutionizes AI!",
    ];
  </script>
  
  <style>
    /* .flash-news-container {
      background-color: #ffcc00;
      color: #333;
      padding: 10px;
      font-weight: bold;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
    } */
    .marquee {
      display: inline-block;
      animation: scroll 20s linear infinite;
    }
    @keyframes scroll {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  </style>
  
  <div class="flash-news-container">
    <div class="marquee">
      {#each newsItems as news, index}
        <span>{news}</span>
        {#if index !== newsItems.length - 1} | {/if}
      {/each}
    </div>
  </div>
  