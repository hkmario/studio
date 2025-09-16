# ContractEase - ISP Contract Management Dashboard

ContractEase is a modern, responsive web application designed to help users manage their Internet Service Provider (ISP) contracts and bills efficiently. It provides a centralized dashboard to track contract statuses, monitor monthly spending, and receive timely reminders for upcoming renewals.

## Features

- **Dashboard Overview**: At-a-glance view of key metrics, including total contracts, active contracts, total monthly costs, and contracts expiring soon.
- **Monthly Spending Chart**: A visual representation of spending over the last six months.
- **Upcoming Renewals**: A list of contracts that are due for renewal within the next 90 days.
- **Contract Management**: A dedicated page to view and manage all ISP contracts in a tabular format.
- **Bill Management**: A dedicated page for tracking bill payments and statuses.
- **Document Upload**: Functionality to upload and analyze new contract or bill documents (PDFs).
- **Responsive Design**: A mobile-friendly interface that adapts to different screen sizes.

## Tech Stack

This project is built with a modern, type-safe, and performant technology stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Generative AI**: [Google's Genkit](https://firebase.google.com/docs/genkit)
- **Charts**: [Recharts](https://recharts.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- [npm](https://www.npmjs.com/) (version 10.x or higher) or another package manager like yarn or pnpm.

### Installation

1.  **Clone the repository (or download the source code)**
    If you have git installed, you can clone the repository. Otherwise, ensure all the project files are in a single directory on your local machine.

2.  **Navigate to the project directory**
    ```bash
    cd your-project-directory
    ```

3.  **Install dependencies**
    This command will install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

4.  **Set up Environment Variables**
    This application uses mock API routes that require a base URL to be set. Create a `.env.local` file in the root of your project and add the following variable. The port should match the one you intend to use.
    ```
    NEXT_PUBLIC_APP_URL=http://localhost:9002
    ```

### Running the Application

Once the installation is complete, you can run the application in development mode.

1.  **Start the development server**
    ```bash
    npm run dev
    ```
    This command starts the Next.js development server, typically on port 9002 (as configured in `package.json`).

2.  **Open the application in your browser**
    Open your web browser and navigate to [http://localhost:9002](http://localhost:9002).

## Available Scripts

In the `package.json` file, you will find several scripts for managing the application:

-   `npm run dev`: Starts the application in development mode with hot-reloading.
-   `npm run build`: Compiles and builds the application for production.
-   `npm start`: Starts the application in production mode (requires a build to be run first).
-   `npm run lint`: Lints the project files for code quality and style issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
