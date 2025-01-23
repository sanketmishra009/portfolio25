# Portfolio Project

This is a personal portfolio project built using **React**, **TailwindCSS**, and **Vite**. The portfolio showcases navigation between different sections such as Home, About, Skills, Projects, and Contact. The project now integrates dynamic 3D models and animations using **React Three Fiber** and **@react-three/drei**.

## Features

- **Responsive Design**: The application is designed to be mobile-friendly with smooth navigation and adaptive layouts.
- **Custom Navigation Bar**: Features a fixed navigation bar with a toggleable menu for smaller screens.
- **Dynamic 3D Models**: Interactive 3D elements such as a Hacker Room, React Logo, and more are included.
- **About Section**: Highlights skills, experience, and contact details with features like:
  - A globe visualization showing timezone flexibility.
  - Details on the tech stack, machine learning expertise, and passion for programming.
  - An interactive "Copy Email" feature for easy communication.
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
│   │   ├── Target.jsx        # Animated Target model
│   │   ├── Button.jsx        # Reusable button component
│   │   ├── DemoComputer.jsx  # 3D Computer model
│   │   ├── DemoComputer2.jsx # 3D Computer model with video texture
│   ├── sections/
│   │   ├── App.jsx           # Main application layout
│   │   ├── Hero.jsx          # Hero section with integrated 3D components
│   │   ├── About.jsx         # About section with interactive features
│   │   ├── Projects.jsx      # Projects section showcasing work
│   ├── constants/            # Helper functions and constants
│   ├── index.css             # Global and utility styles
│   └── main.jsx              # Entry point for the React application
├── tailwind.config.js        # TailwindCSS configuration
├── package.json              # Project metadata and dependencies
```

### Components

- **CanvasLoader.jsx**: Displays a loading indicator for 3D content, ensuring a smooth user experience while 3D models are being loaded.
- **Cube.jsx**: An interactive and animated 3D cube that adds a dynamic element to the portfolio.
- **HackerRoom.jsx**: A detailed 3D room scene that showcases advanced 3D modeling and rendering capabilities.
- **HeroCamera.jsx**: Manages camera movements and logic for the Hero section, providing immersive effects.
- **NavBar.jsx**: Implements the navigation bar with responsive behavior, ensuring easy navigation across different sections.
- **Reactlogo.jsx**: A 3D model of the React logo, demonstrating the integration of 3D elements.
- **Rings.jsx**: Rotating rings animation using GSAP, adding a visually appealing effect.
- **Target.jsx**: An animated target model with GSAP animations, showcasing advanced animation techniques.
- **Button.jsx**: A reusable button component with optional beam animation, ensuring consistency across the application.
- **DemoComputer.jsx**: A 3D computer model that adds an interactive element to the portfolio.
- **DemoComputer2.jsx**: A 3D computer model with video texture, demonstrating advanced 3D rendering techniques.

### Sections

- **App.jsx**: The main application layout that integrates all sections and components, providing a cohesive structure.
- **Hero.jsx**: The Hero section that integrates 3D models and animations, creating an engaging first impression.
- **About.jsx**: The About section featuring interactive elements such as a globe visualization, tech stack highlights, and a "Copy Email" button.
- **Projects.jsx**: The Projects section showcasing various works, with navigation buttons to switch between different projects.

### Constants

- **constants/index.js**: Contains helper functions and constants used throughout the application, ensuring maintainability and reusability.

### Styles

- **index.css**: Contains global and utility styles, ensuring consistent styling across the application.

### Entry Point

- **main.jsx**: The entry point for the React application, initializing the app and rendering the main layout.

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
- **React Globe**: Interactive globe visualization.
- **JavaScript (ES6+)**: For logic and interactivity.
- **PostCSS**: For additional CSS processing.

## Key Components

- **NavBar.jsx**: Implements the navigation bar with responsive behavior.
- **Hero.jsx**: Hero section integrating 3D models and animations.
- **About.jsx**: About section featuring:
  - Globe visualization for timezone and location details.
  - Highlighted tech stack and skills.
  - Machine learning expertise description.
  - Interactive "Copy Email" button for easy communication.
- **HackerRoom.jsx**: A detailed 3D room scene.
- **CanvasLoader.jsx**: Displays a loading indicator for 3D content.
- **Cube.jsx**: Interactive and animated 3D cube.
- **Target.jsx**: Animated target model with GSAP animations.
- **Reactlogo.jsx**: 3D React logo.
- **Rings.jsx**: Rotating rings animation using GSAP.
- **HeroCamera.jsx**: Camera movement logic for immersive effects.
- **Button.jsx**: Reusable button with optional beam animation.
- **DemoComputer.jsx**: 3D Computer model.
- **DemoComputer2.jsx**: 3D Computer model with video texture.
- **Projects.jsx**: Projects section showcasing work.

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

Feel free to fork this repository, raise issues, or submit pull requests to improve the portfolio!\
Prototype deployed at: https://portfolio25-6c8a9.web.app/

## License

This project is licensed under the [MIT License](LICENSE).

---

Built with passion and React by Sanket Mishra❤️.
