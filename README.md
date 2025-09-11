Folder structure

/frontend/
├── app/                     # App Router entry point
│   ├── layout.jsx           # Root layout (common for all pages)
│   ├── page.jsx             # Home page
│   ├── login/               # Login page
│   │   └── page.jsx
│   ├── register/            # Register page
│   │   └── page.jsx
│   ├── dashboard/           # Protected route (e.g., user dashboard)
│   │   └── page.jsx
│   └── not-found.jsx        # Custom 404 page (optional)
│
├── components/              # Shared React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── AuthForm.jsx
│
├── lib/                     # Utilities and API calls
│   └── api.js               # Helper for connecting to Laravel API
│
├── middleware.js            # Middleware (auth checks, etc.)
│
├── public/                  # Static files (images, icons, etc.)
│
├── styles/                  # Global CSS
│   └── globals.css
│
├── .env.local               # Environment variables (e.g., API base URL)
├── next.config.js           # Next.js config file
└── package.json             # Project metadata and dependencies
