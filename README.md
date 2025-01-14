# Portfolio Project

This is a personal portfolio project built using **React**, **TailwindCSS**, and **Vite**. The portfolio showcases navigation between different sections such as Home, About, Skills, Projects, and Contact. The project now integrates dynamic 3D models and animations using **React Three Fiber** and **@react-three/drei**.

## Features

- **Responsive Design**: The application is designed to be mobile-friendly with smooth navigation and adaptive layouts.
- **Custom Navigation Bar**: Features a fixed navigation bar with a toggleable menu for smaller screens.
- **Dynamic 3D Models**: Interactive 3D elements such as a Hacker Room, React Logo, and more are included.
- **Modern Styling**: Uses TailwindCSS for seamless and efficient styling.
- **Single Page Architecture**: Components are rendered dynamically using React.
- **Built with Vite**: Provides fast development and build processes.

## Project Structure

```plaintext
├── public/              # Assets such as images, icons, and 3D models
├── src/
│   ├── components/
│   │   ├── CanvasLoader.jsx  # Loader component for 3D content
│   │   ├── Cube.jsx          # Interactive Cube model
│   │   ├── HackerRoom.jsx    # 3D Hacker Room scene
│   │   ├── HeroCamera.jsx    # Camera logic for the Hero section
│   │   ├── NavBar.jsx        # Navigation bar component
│   │   ├── Reactlogo.jsx     # 3D React Logo model
│   │   ├── Rings.jsx         # Rotating Rings animation
│   │   └── Target.jsx        # Animated Target model
│   ├── sections/
│   │   ├── App.jsx           # Main application layout
│   │   └── Hero.jsx          # Hero section with integrated 3D components
│   ├── constants/            # Helper functions and constants
│   ├── index.css             # Global and utility styles
│   └── main.jsx              # Entry point for the React application
├── tailwind.config.js        # TailwindCSS configuration
├── package.json              # Project metadata and dependencies
```

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Start the Development Server**
   Launch the local development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173`.

4. **Build for Production**
   To create an optimized production build:

   ```bash
   npm run build
   ```

5. **Preview the Production Build**
   ```bash
   npm run preview
   ```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for custom designs.
- **Vite**: A modern frontend build tool.
- **React Three Fiber**: Declarative 3D rendering in React.
- **@react-three/drei**: Helper components for React Three Fiber.
- **GSAP**: Animation library for smooth interactions.
- **JavaScript (ES6+)**: For logic and interactivity.
- **PostCSS**: For additional CSS processing.

## Key Components

- **NavBar.jsx**: Implements the navigation bar with responsive behavior.
- **Hero.jsx**: Hero section integrating 3D models and animations.
- **HackerRoom.jsx**: A detailed 3D room scene.
- **CanvasLoader.jsx**: Displays a loading indicator for 3D content.
- **Cube.jsx**: Interactive and animated 3D cube.
- **Target.jsx**: Animated target model with GSAP animations.
- **Reactlogo.jsx**: 3D React logo.
- **Rings.jsx**: Rotating rings animation using GSAP.
- **HeroCamera.jsx**: Camera movement logic for immersive effects.

## Scripts

The following scripts are available in the `package.json`:

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Lint the code using ESLint.

## Tailwind Configuration

TailwindCSS is configured in `tailwind.config.js` to enable:

- Custom colors and gradients.
- Responsive utility classes.
- Custom animations (e.g., wave effects, ping).

## Contributions

Feel free to fork this repository, raise issues, or submit pull requests to improve the portfolio!

## License

This project is licensed under the [MIT License](LICENSE).

---

Built with passion and React by Sanket Mishra.
