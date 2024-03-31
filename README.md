# Tags Website Admin 
`note : project is under development, and is not well documented yet`

This repository contains the admin panel for the Tags Website project.

## Project Overview

Tags Website Admin is an administration panel built to manage products, create invoices  user authentication, and access control and other admin tasks.

## Bugs to be Fixed 
`to find more bugs, test component one by one, render them one by one, in app.jsx`
- [ ] Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
- above warning is for fields where value we are using value keyword for example in `<select>` `defaultValue` .. search for these terms and you will find the bug.
> to fix this you have to update values using `state` hook. 

- [ ] an example of `a bug to be fixed`

## Features Added

<!-- - User authentication: Secure login and logout functionality.
- Tag management: Create, read, update, and delete tags.
- Category management: Create, read, update, and delete categories.
- Access control: Different user roles with varying levels of access to features.
- Responsive design: Admin panel is designed to be responsive and accessible on different devices. -->

## Technologies Used

- **Frontend**:
  - React.js: Frontend JavaScript library for building user interfaces.
  <!-- - Material-UI: React UI framework for designing responsive and accessible UI components. -->
  - React Router: Declarative routing for React applications.
  <!-- - Axios: Promise-based HTTP client for making API requests. -->
- **Backend**:
  - Node.js: JavaScript runtime for building server-side applications.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing data.
  - Mongoose: MongoDB object modeling tool for Node.js.
  <!-- - JWT: JSON Web Tokens for authentication. -->
- **Deployment**:
  <!-- - Docker: Containerization platform for packaging applications into containers.
  - Docker Compose: Tool for defining and running multi-container Docker applications. -->

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/pushpraj-rmx/tags-website-admin.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tags-website-admin
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add environment variables as per your configuration. Example:

     ```plaintext
     REACT_APP_API_URL=http://localhost:5000/api
     ```

5. Run the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the admin panel.

## Contributing

Contributions to improve the project are welcome! Feel free to open issues for bug reports, feature requests, or submit pull requests with enhancements.

## License

This project is licensed under the [MIT License](LICENSE).