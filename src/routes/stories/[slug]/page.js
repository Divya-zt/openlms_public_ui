export async function load({ params }) {
  const { slug } = params

  try {
    // In a real app, you would fetch this data from an API or database
    // For now, we'll simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const storyData = {
      slug,
      title: "Humanity's Rebirth",
      contestNumber: "284",
      prompt: "Write about someone who receives a gift or message that changes their life forever...",
      content: `"Humphrey," I yell, banging my fist against the observation deck door. "There's something wrong with Jansen. Humphrey!" I try to push the door open, but it's been barricaded from the other side. How long has Humphrey been holed up in there...three months? Three years? It's hard to tell.

"Humphrey!" I yell one last time before giving up. This whole ship is going crazy. Four years in space and I'm the only one holding it together.

I make my way to the Navigation room to find Jansen in a state of mania. He sits tuck-kneed in the captain's chair whirling between the wall-to-wall display panels. Each panel is playing clips from the historical archives, and as far as I can tell they're looping rapidly through Earth's worst atrocities - bombings, murders, riots and the like - all firing off on the screens at once.

"Jansen!" I yell over the cacophony of noise, and he turns to me with a look of glee like an over-excited child. He pushes a button and the clips immediately stop. The panels go black.

"I was wondering when you'd stop by."`,
      author: "Reese Blaise",
      likes: 85,
      comments: 51,
    }

    return {
      story: storyData,
    }
  } catch (error) {
    console.error("Error loading story:", error)
    return {
      status: 500,
      error: new Error("Could not load story"),
    }
  }
}

