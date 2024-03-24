Perfeito, aqui está o README atualizado com a licença MIT:

---

# API CRUD Node.js with Express and Firebase

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and Firebase.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/seu-usuario/api-crud-node-express-with-firebase.git
    ```

2. Install dependencies:

    ```bash
    cd api-crud-node-express-with-firebase
    npm install
    ```

3. Set up Firebase:

    Create a Firebase project and obtain your Firebase credentials.

    Then, create a file named `firebase.ts` inside the `firebase` folder with the following content:

    ```typescript
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    export default app;
    ```

    Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, and `YOUR_APP_ID` with your Firebase credentials.

4. Start the development server:

    ```bash
    npm run dev
    ```

    Your API should now be running at `http://localhost:5050`.

## Available Scripts

- `npm run dev`: Starts the development server using `tsx` to watch for changes in TypeScript files.
- `npm start`: Starts the server using Node.js.
- `npm run build`: Builds the TypeScript files.
- `npm test`: Runs tests (not implemented in this project).

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Firebase](https://www.npmjs.com/package/firebase): Firebase SDK for JavaScript.
- [Firebase Admin SDK](https://www.npmjs.com/package/firebase-admin): Firebase Admin Node.js SDK.
- [uuid](https://www.npmjs.com/package/uuid): Simple, fast generation of RFC4122 UUIDs.
  
## Dev Dependencies

- [@types/express](https://www.npmjs.com/package/@types/express): TypeScript definitions for Express.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [tsx](https://www.npmjs.com/package/tsx): TypeScript transpiler.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript language server and compiler.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


Make sure to replace the values for `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, and `YOUR_APP_ID` with your actual Firebase credentials. This README provides clear instructions on how to configure and start the project, as well as information about available scripts, dependencies, and licensing.
