# Life in Dots!

See your life represented as a finite sequence of dots. How fun!

I made this project largely to practice creating something, anything from scratch. Check out the pull requests to get a feel for my development style.  It's also a nice plce for me to thinker and try new things. And of course, it's also an art project that I find pretty interesting. I have big aspirations for where it will go. We'll see how many of my dots get crossed out in the meantime...

Hosted at https://davidmcgrath.com/life-in-dots

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

In a web browser, navigate  to `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

The following is default documentation from `create-react-router`, which I used to initialize the project.

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
