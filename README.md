# REACT PORTFOLIO

I built this landing page using React with TypeScript, Sass for styling, and Framer Motion for animations. These skills allowed me to create a visually stunning and highly functional page that engages visitors and drives conversions.

## Features

- **Bot:** I built a bot-like feature that allows visitors to select a question and receive a saved response.

- **Lazy image loading:** The landing page uses lazy image loading to improve page load times and overall performance.

- **3D Mac modal:** The about section of the landing page features a 3D Mac modal that visitors can move around and interact with, adding a fun and interactive element to the page.

- **Rotating text:** The landing page features rotating text that rotates to the right when the user scrolls down and to the left when the user scrolls up, adding a unique and eye-catching element to the page.

- **Animated cursor:** The landing page includes a custom cursor created using `react-animated-cursor` with Blend Mode Cursor, adding an extra layer of interactivity and creativity.

- **Social media links:** The landing page includes links to my social media profiles, making it easy for visitors to connect with me and stay up to date on my latest projects.

- **Contact form:** The landing page features a contact form that sends messages directly to my email using `emailjs`. I also used `yup` and `react-form-hook` to validate the form inputs.

- **Reviews section:** The reviews section of the landing page uses `swiper` to create a vertical scrolling effect, allowing visitors to easily browse through customer testimonials.

- **Animated services section:** The services section features `react-tilt` animations, adding a dynamic and engaging element to the page.

- **Email notifications:** When a visitor sends me a message through the contact form, the landing page uses react-hot-toast to display a notification confirming that the message was sent successfully.

- **Responsive design:** The landing page is optimized for viewing on different devices, including desktops, tablets, and mobile devices. The layout and content adjust automatically to fit the screen size, ensuring a seamless user experience for all visitors.

## Technology

- **React**: A popular JavaScript library for building user interfaces.
- **React Router DOM**: A library for routing and navigation in React applications.
- **React Tilt**: A component for adding tilt animations to elements on a web page.
- **React Merge Refs**: A utility for merging multiple refs into a single ref.
- **React Use Measure**: A hook for measuring the size and position of DOM elements.
- **React Use Favicon**: A hook for setting and updating the favicon of a web page.
- **React Lazy Load Image Component**: A component for lazy-loading images for better performance.
- **React Vertical Timeline Component**: A component for creating vertical timelines on a web page.
- **React Icons**: A library of icons for React applications.
- **React Scroll**: A library for smooth scrolling on web pages.
- **React SVG**: A component for rendering SVG images in React applications.
- **React Hook Form**: A library for building forms in React applications.
- **@hookform/resolvers**: A library of form validation resolvers for use with React Hook Form.
- **Yup**: A library for form schema validation.
- **Framer Motion**: A library for creating animations and transitions in React applications.
- **React Animated Cursor**: A component for creating custom animated cursors in React applications.
- **React Audio Player**: A component for playing audio files in React applications.
- **EmailJS**: A service for sending emails from client-side JavaScript applications.
- **React Hot Toast**: A library for displaying toast notifications in React applications.
- **Swiper**: A library for creating sliders and carousels on web pages.
- **Three**: A library for creating and displaying 3D graphics on web pages.
- **@react-three/fiber**: A library for creating 3D scenes in React applications.
- **@react-three/drei**: A library of components and helpers for use with @react-three/fiber.

## Installation

To run this landing page locally, you will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running the command `npm install`.
4. Create a `.env` file in the root directory of the project and add the following environment variables with your own values:

```
VITE_REACT_APP_service_ID=your_service_ID
VITE_REACT_APP_TEMPLATE_ID=your_template_ID
VITE_REACT_APP_PUBLIC_KEY=your_public_key
```

Note: These environment variables are required for the contact form functionality using EmailJS. You can obtain these values by creating an account on the [EmailJS website](https://www.emailjs.com/) and following their instructions to set up a service and template. 5. Start the development server by running the command `npm run dev`. 6. Open your web browser and navigate to `http://localhost:5173` to view the landing page.

That's it! You should now have the landing page up and running on your local machine.
