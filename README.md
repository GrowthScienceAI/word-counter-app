# Word Counter App

A simple, elegant word counter web application built with React and styled with a dark blue theme. Perfect for writers, students, and anyone who needs to quickly analyze text statistics.

## Features

- **Word Count**: Accurately counts words in your text
- **Character Count**: Counts all characters including spaces
- **Sentence Count**: Identifies and counts sentences
- **Additional Statistics**: Shows average words per sentence and characters per word
- **Dark Blue Theme**: Professional dark navy background with blue accents
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Interface**: Intuitive design with clear visual hierarchy

## How to Use

1. Paste or type your text into the textarea
2. Click the "Count" button to analyze your text
3. View the results showing words, characters, and sentences
4. Use the "Clear" button to reset and start over

## Technology Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GrowthScienceAI/word-counter-app.git
cd word-counter-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

This app is ready to deploy on various platforms:

- **Netlify**: Connect your GitHub repository and deploy automatically
- **Vercel**: Import the project and deploy with zero configuration
- **GitHub Pages**: Use the built files from the `dist` directory

### Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account and select this repository
4. Set build command: `pnpm run build`
5. Set publish directory: `dist`
6. Deploy!

## Color Scheme

The application uses a carefully crafted dark blue color palette:

- **Background**: Deep navy blue (#0f172a)
- **Cards**: Lighter dark blue (#1e293b)
- **Primary**: Bright blue (#3b82f6)
- **Text**: White (#ffffff)
- **Accents**: Light blue (#60a5fa)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
