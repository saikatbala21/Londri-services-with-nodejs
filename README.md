# Vanilla Node.js Web Server

A lightweight, dependency-free HTTP web server built entirely using Node.js core modules (`http` and `fs`). This project demonstrates native routing, asset serving, and basic error handling without relying on third-party frameworks like Express.

## 📋 Features

- **Zero Dependencies:** Built entirely with native Node.js core modules.
- **Static Asset Delivery:** Serves HTML, CSS, and JavaScript files dynamically based on incoming URLs.
- **Robust Routing Table:** Clear mapping between application endpoints and physical files.
- **Custom Error Handling:** Implements proper HTTP status codes for successful requests (`200 OK`), missing resources (`404 Not Found`), server errors (`500 Internal Server Error`), and unsupported actions (`405 Method Not Allowed`).

---

## 🛠️ Project Structure

Ensure your project directory looks like this before starting the server:

```text
├── server.js          # The main application file containing your HTTP server code
├── index.html         # Homepage file
├── about.html         # About page file
├── contact.html       # Contact page file
├── styles.css         # Main stylesheet for the application
├── contact.css        # Styles specific to the contact page
├── about.css          # Styles specific to the about page
├── content.js         # Core application logic script
└── email.js           # Email handling script
```

---

## 🚀 Setup & Installation

### Prerequisites

Make sure you have Node.js installed on your computer. You can check your version by running:

```bash
node -v
```
*(Node.js v12.0.0 or higher is recommended).*

### Instructions

1. **Create the Project Directory:**
   ```bash
   mkdir vanilla-node-server
   cd vanilla-node-server
   ```

2. **Create the Files:**
   Save your JavaScript code into a file named `index.js`. Ensure you also create the dummy static files listed in the **Project Structure** section (e.g., `index.html`, `styles.css`) so the server has assets to find and deliver.

---

## 💻 Running the Server

Start your web server by executing the following command in your terminal:

```bash
node index.js
```

Upon a successful startup, you will see this confirmation message in your terminal:
```text
Server is running at http://localhost:3000
```

To stop the server at any time, press `Ctrl + C` in your terminal window.

---

## 🌐 Supported Routes

The application maps specific URLs directly to local static files. The following endpoints are configured out of the box:

| URL Endpoint | File Served | Content-Type Header |
| :--- | :--- | :--- |
| `/` or `/home` | `./index.html` | `text/html` |
| `/about` or `/about.html` | `./about.html` | `text/html` |
| `/contact` or `/contact.html` | `./contact.html` | `text/html` |
| `/styles.css` | `./styles.css` | `text/css` |
| `/about.css` | `./about.css` | `text/css` |
| `/contact.css` | `./contact.css` | `text/css` |
| `/content.js` | `./content.js` | `text/javascript` |
| `/email.js` | `./email.js` | `text/javascript` |

---

## ⚙️ How it Works under the Hood

1. **`http.createServer()`**: Listens for incoming HTTP network connections.
2. **HTTP Method Filtering**: It instantly checks `req.method`. If a client attempts a `POST`, `PUT`, or `DELETE` request, it returns a `405 Method Not Allowed` response.
3. **Route Verification**: If it's a `GET` request, it looks up `req.url` in the `routes` dictionary configuration.
4. **`fs.readFile()`**: When an matching route is found, the application reads the file from your hard drive asynchronously and sends the file buffer back across the web to the user's browser.
