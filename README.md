# Auth App README


## Description

This repository contains an authentication app built using technologies like Next.js, React, Redux, Prisma, and more. It provides a foundation for implementing user authentication features in a web application.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v14 or higher)
- PostgreSQL
- Docker (optional, for running PostgreSQL in a container)
- Yarn (v1.0 or higher)

### Installation

1. Clone this repository to your local machine:

   ```sh
   git clone git@github.com:sandeshsapkota/auth-app.git
   cd auth-app
   ```

2. Install project dependencies using Yarn:

   ```sh
   yarn install
   ```

### Running the App

1. Start the PostgreSQL database using Docker (optional):

   ```sh
   docker-compose up -d
   ```

2. Migrate the Prisma database:

   ```sh
   npx prisma migrate deploy --preview-feature
   ```

3. Start the development server:

   ```sh
   yarn dev
   ```

   The app should now be accessible at `http://localhost:3000`.

## Services

This app uses Docker and Docker Compose to manage services:

- **db**: PostgreSQL database container
- **prisma**: Prisma container for database migrations and management


## Dev Dependencies

Dev dependencies used for development:

- @types/bcrypt
- @types/jsonwebtoken

## Version

App Version: 0.1.0

## License

This project is private and not open source.

---

Feel free to use this version of the README with "Yarn" as the specified package manager.
