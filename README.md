# Gallery Image Search App
![Alt Text](/Screen Shot 2025-01-29 at 5.59.23 PM.png)
A React-based photo search app that uses the Unsplash API to fetch and display images. It incorporates the **PhotoSwipe** library to view images in a gallery-like lightbox when clicked.

## Features
- **Image Search**: Search for photos and illustrations from Unsplash.
- **Gallery Display**: View images in a grid layout with pagination.
- **PhotoSwipe Integration**: Click on any image to open it in a full-screen lightbox view.
- **Pagination**: Load more images as you scroll or click the "Load More" button.

## Tech Stack
- **React**: For building the user interface.
- **Vite**: For fast bundling and development.
- **Tailwind CSS**: For utility-first styling.
- **PhotoSwipe**: For the gallery and lightbox functionality.
- **Unsplash API**: To fetch images.

## Demo
You can view the live demo of the app deployed on Vercel [here](https://gallery-image-sbtp.vercel.app/).

## Installation

### Prerequisites
- Node.js >= 16.x
- npm or yarn (npm is recommended)

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/gallery-image.git
   cd gallery-image
Install Dependencies

bash
Copy
npm install
Setup Environment Variables Create a .env file in the root of your project and add your Unsplash API access key like so:

makefile
Copy
VITE_UNSPLASH_ACCESS_KEY=your-unsplash-access-key
You can get your API key by signing up for an Unsplash developer account: https://unsplash.com/developers.

Run the Development Server After installing the dependencies and setting up your environment variables, you can start the development server:

bash
Copy
npm run dev
This will start the server, and you can view the app in your browser at http://localhost:3000.


