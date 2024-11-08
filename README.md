
---

# Finduu

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-brightgreen)](CONTRIBUTING.md)

## About the Project

**Finduu** is an application developed with AdonisJS v5 to help locate missing persons. The platform allows users to register cases, follow investigations, comment, and receive updates.

### Features

- **User Registration**: Create an account to participate in the platform.
- **Login**: Access the platform to manage and track cases.
- **Missing Persons Listing**: View all registered cases.
- **Register Missing Persons**: Allows users to create a new missing person record.
- **Follow Cases**: Users can follow cases of interest to receive notifications.
- **Comment on Cases**: Actively participate by commenting on missing person cases.
- **Social Media Sharing**: Share cases on social media to reach a wider audience.

## Technologies

This project is built using the following technologies:

- [AdonisJS v5](https://adonisjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/) (for API documentation)
- [MySQL](https://www.mysql.com/) (database)


These links are automatically configured for each post, making it easy to share on any platform.

##  API Documentation

The entire API is documented with **Swagger**. To access the documentation and test the endpoints:

1. Run the project locally (see the installation section below).
2. Go to `http://localhost:3333/docs` to view and interact with the API.

## 🛠 Installation

Follow the steps below to run the project locally.

### Prerequisites

- Node.js (>= 18.x)
- PostgreSQL
- AdonisJS CLI

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Mario-Coxe/VOLTAA_BACKEND.git
   ```
   
   ```bash
   cd VOLTAA_BACKEND
   ```

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:

   Create an `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

3. Set up the database in `.env` with your MySQL credentials.

4. Run the migrations:

   ```bash
   node ace migration:run
   ```

5. Start the server:

   ```bash
   node ace serve --watch
   ```

The application will now be running at `http://localhost:3333`.

##  How to Contribute

Contributions are highly welcome! Follow the steps below to get involved:

1. Fork the project.
2. Create a new branch with your feature or fix: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'Adding new feature'`.
4. Push to the main branch: `git push origin my-feature`.
5. Open a **Pull Request** explaining your change.

### Contribution Guide

See more details in [CONTRIBUTING.md](CONTRIBUTING.md).

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact

If you have any questions or suggestions, feel free to open an **Issue** or contact:

- Email: [mariocoxedev@gmail.com](mailto:mariocoxedev@gmail.com)

---
