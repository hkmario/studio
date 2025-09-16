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
- **Database**: [MySQL](https://www.mysql.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Generative AI**: [Google's Genkit](https://firebase.google.com/docs/genkit)
- **Charts**: [Recharts](https://recharts.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en) (version 20.x or higher)
- [npm](https://www.npmjs.com/) (version 10.x or higher)
- [Docker](https://www.docker.com/get-started) (Recommended for database setup)

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
    Create a `.env.local` file in the root of your project and add your database connection string.
    ```
    DATABASE_URL="mysql://user:password@localhost:3306/contractease"
    ```
    Replace `user`, `password`, and `contractease` with the values you will use in the database setup below.

### Database Setup (with Docker)

The easiest way to get a local MySQL database running is with Docker.

1.  **Start a MySQL container**
    Run the following command in your terminal. This will download the MySQL image and start a container named `mysql-db`. Replace `your_password` with a secure password of your choice.
    ```bash
    docker run --name mysql-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=your_password -d mysql:8
    ```

2.  **Connect to the database**
    You can use any SQL client (like [TablePlus](https://tableplus.com/), [DBeaver](https://dbeaver.io/), or the MySQL command-line client) to connect to your new database with the following credentials:
    - **Host**: `localhost`
    - **Port**: `3306`
    - **User**: `root`
    - **Password**: `your_password` (the one you set above)

3.  **Create the database and tables**
    Run the following SQL script in your SQL client to create the `contractease` database and the required tables.

    ```sql
    -- Create the database
    CREATE DATABASE contractease;
    USE contractease;

    -- Create the 'contracts' table
    CREATE TABLE contracts (
      AccountID VARCHAR(255) PRIMARY KEY,
      VendorName VARCHAR(255) NOT NULL,
      ContractStartDate DATE NOT NULL,
      ContractEndDate DATE NOT NULL,
      ContractSum DECIMAL(10, 2) NOT NULL,
      BusinessUnit VARCHAR(255),
      RenewalType ENUM('Auto-Renew', 'Manual') NOT NULL,
      Status ENUM('Active', 'Expired', 'Pending') NOT NULL,
      WorkflowID VARCHAR(255),
      Comments TEXT
    );

    -- Create the 'products' table
    CREATE TABLE products (
      ProductID VARCHAR(255) PRIMARY KEY,
      AccountID VARCHAR(255) NOT NULL,
      ProductName VARCHAR(255) NOT NULL,
      MonthlyCost DECIMAL(10, 2) NOT NULL,
      BillingFrequency ENUM('Monthly', 'Quarterly', 'Annually') NOT NULL,
      Notes TEXT,
      FOREIGN KEY (AccountID) REFERENCES contracts(AccountID)
    );

    -- Create the 'bills' table
    CREATE TABLE bills (
      BillID VARCHAR(255) PRIMARY KEY,
      ProductID VARCHAR(255) NOT NULL,
      BillingPeriod VARCHAR(7) NOT NULL, -- Format: YYYY-MM
      MonthlyCost DECIMAL(10, 2) NOT NULL,
      Status ENUM('Paid', 'Due', 'Overdue') NOT NULL,
      Comments TEXT,
      FOREIGN KEY (ProductID) REFERENCES products(ProductID)
    );
    ```

4.  **Insert sample data**
    Run the following SQL script to populate your new tables with the initial sample data.
    ```sql
    -- Insert data into 'contracts'
    INSERT INTO contracts (AccountID, VendorName, ContractStartDate, ContractEndDate, ContractSum, BusinessUnit, RenewalType, Status, WorkflowID, Comments) VALUES
    ('ACC001', 'Comcast Business', '2023-01-15', '2024-08-14', 2400.00, 'Headquarters', 'Manual', 'Active', 'WF001', 'Primary internet service for main office.'),
    ('ACC002', 'Verizon Fios', '2022-09-01', '2024-09-30', 1800.00, 'East Wing', 'Auto-Renew', 'Active', 'WF002', 'Secondary ISP for redundancy.'),
    ('ACC003', 'AT&T Fiber', '2023-11-20', '2025-11-19', 3600.00, 'West Wing', 'Manual', 'Active', 'WF003', 'High-speed fiber for development team.'),
    ('ACC004', 'Spectrum Business', '2022-06-01', '2024-05-31', 1500.00, 'Marketing', 'Manual', 'Expired', 'WF004', 'Service for the marketing department.'),
    ('ACC005', 'Starlink Business', '2024-01-01', '2026-12-31', 6000.00, 'Remote Office', 'Auto-Renew', 'Active', 'WF005', 'Satellite internet for remote site.');

    -- Insert data into 'products'
    INSERT INTO products (ProductID, AccountID, ProductName, MonthlyCost, BillingFrequency, Notes) VALUES
    ('PROD001', 'ACC001', 'Business Internet 100', 100.00, 'Monthly', '100 Mbps down / 20 Mbps up'),
    ('PROD002', 'ACC002', 'Fios Gigabit Connection', 75.00, 'Monthly', '940 Mbps down / 880 Mbps up'),
    ('PROD003', 'ACC003', 'AT&T Business Fiber 300', 150.00, 'Monthly', '300 Mbps symmetrical'),
    ('PROD004', 'ACC004', 'Spectrum Business Internet', 62.50, 'Monthly', '200 Mbps down / 10 Mbps up'),
    ('PROD005', 'ACC005', 'Starlink Priority 1TB', 250.00, 'Monthly', 'High-performance satellite internet');

    -- Insert data into 'bills'
    INSERT INTO bills (BillID, ProductID, BillingPeriod, MonthlyCost, Status, Comments) VALUES
    ('BILL001', 'PROD001', '2024-07', 100.00, 'Paid', ''),
    ('BILL002', 'PROD002', '2024-07', 75.00, 'Paid', ''),
    ('BILL003', 'PROD003', '2024-07', 150.00, 'Due', 'Payment scheduled for 25th'),
    ('BILL004', 'PROD005', '2024-07', 250.00, 'Paid', ''),
    ('BILL005', 'PROD001', '2024-06', 100.00, 'Paid', ''),
    ('BILL006', 'PROD002', '2024-06', 75.00, 'Paid', ''),
    ('BILL007', 'PROD003', '2024-06', 150.00, 'Paid', ''),
    ('BILL008', 'PROD005', '2024-06', 250.00, 'Paid', ''),
    ('BILL009', 'PROD001', '2024-05', 100.00, 'Paid', ''),
    ('BILL010', 'PROD002', '2024-05', 75.00, 'Paid', ''),
    ('BILL011', 'PROD003', '2024-05', 150.00, 'Paid', ''),
    ('BILL012', 'PROD005', '2024-05', 250.00, 'Paid', '');
    ```

### Running the Application

Once the installation and database setup are complete, you can run the application in development mode.

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
