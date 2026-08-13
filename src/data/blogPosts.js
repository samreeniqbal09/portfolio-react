export const blogPosts = [
  {
    id: 1,
    title: 'Building My First React Portfolio',
    date: 'August 5, 2026',
    excerpt:
      'How I planned, designed, and built my personal portfolio using React and Tailwind CSS.',
    content: `I started this portfolio to create a professional platform for showcasing my projects, technical skills, and experience as a developer.

I began with simple wireframes to define the layout and user experience. My goal was to create a clean, responsive, and easy-to-navigate interface.

I built the portfolio with React and Tailwind CSS, using reusable components for navigation, projects, skills, and contact sections. This helped keep the code organized and maintainable.

After completing the initial version, I deployed the portfolio to Vercel. Building this project strengthened my understanding of React, responsive design, and the process of taking a project from development to production.`,
  },

  {
    id: 2,
    title: 'Why I Chose React Router for Multi-Page Navigation',
    date: 'August 8, 2026',
    excerpt:
      'Moving from a single scrolling page to a structured multi-page site with React Router.',
    content: `My portfolio initially used a single-page layout. As I added more projects and blog posts, the page became harder to navigate and maintain.

I introduced React Router to give each section its own route, including dedicated pages for Projects and Blog.

This created a clearer structure and made it easier for visitors to access specific content directly. Individual projects and blog posts can also be shared and bookmarked more easily.

This refactor gave the portfolio a cleaner and more scalable foundation for future development.`,
  },

  {
    id: 3,
    title: 'Lessons Learned Deploying to Vercel',
    date: 'August 13, 2026',
    excerpt:
      'A deployment issue I encountered with React Router and how I fixed direct URL refreshes.',
    content: `While deploying my portfolio to Vercel, I encountered an issue where refreshing a subroute such as /projects resulted in a 404 error.

React Router handles navigation on the client side, but directly visiting or refreshing a route sends the request to Vercel first. Since /projects does not exist as a physical file, Vercel returned a 404.

I fixed the issue by adding a vercel.json rewrite rule that directs route requests to the main React application.

This experience helped me better understand client-side routing and the importance of testing direct URLs and page refreshes before completing a deployment.`,
  },
]