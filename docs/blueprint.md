# **App Name**: Campus Companion

## Core Features:

- Daily Pulse Aggregator: Aggregates and displays mess menus, mail summaries, and important announcements from the Firebase Firestore database.
- Student Exchange Platform: Facilitates a platform for lost & found items, a marketplace for buying/selling, ride sharing, and community posts; data is stored in the Firestore database.
- Explorer's Guide: Provides information on nearby places and integrates navigation requests. Data stored in Firestore.
- Academic Cockpit: Organizes timetables, courses, assignments, and performance metrics. Data is managed in Firestore.
- AI-Powered Smart Assistant: Utilizes OpenAI to provide context-aware assistance based on user input from various modules (Daily Pulse, Student Exchange, etc.). The AI acts as a tool that can provide helpful summaries and information.
- Webhook Integration: Implements Make.com to manage backend logic and connect the Glide frontend with Firebase and OpenAI via webhooks, routing different modules.
- AI Response Logging: Logs all AI interactions (input, output, module, timestamp) into a dedicated Firestore collection for analysis and improvement.

## Style Guidelines:

- Primary color: #7289DA (a Discord-like blue) to convey community, communication and belonging.
- Background color: #E2E6F8 (a light tint of the primary color, about 20% saturation), appropriate for a light scheme, so as not to tire the eyes.
- Accent color: #DA7272 (shifted ~30 degrees 'left' of the primary), useful for error messages and destructive actions
- Body and headline font: 'Inter' sans-serif font for a modern, machined, objective, neutral look.
- Code font: 'Source Code Pro' for displaying code snippets.
- Use simple, clear icons from a consistent set (e.g., Material Design Icons) to represent different modules and actions.
- Implement subtle animations for feedback and transitions, creating a smooth user experience.