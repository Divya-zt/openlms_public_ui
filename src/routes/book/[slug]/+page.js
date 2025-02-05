export const load = ({ params }) => {
    // Hardcoded book data
    const books = {
      "humanitys-rebirth": {
        name: "Humanity’s Rebirth",
        contestNumber: 284,
        intro: "Write about someone who receives a gift or message that changes their life forever....",
        promptLink: "#"
      },
      "future-visions": {
        name: "Future Visions",
        contestNumber: 285,
        intro: "Describe a futuristic society where technology has completely reshaped humanity.",
        promptLink: "#"
      }
    };
  
    // Get the slug parameter
    const { slug } = params;
  
    // Find the book or return null
    const book = books[slug] || null;
  
    return {
      book
    };
  };
  