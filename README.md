# Cricket Live Scorecard Viewer

<div align="center">
  <strong>🏏 Production-Ready Cricket Live Scorecard Application</strong>
  <br/>
  <strong>Built with Next.js 15 • TypeScript • Tailwind CSS • Real-time Updates</strong>
</div>

## Overview

A comprehensive cricket live scorecard viewer application inspired by ESPNcricinfo, featuring real-time updates, detailed player statistics, ball-by-ball commentary, and support for multiple match formats (Test, ODI, T20). Built with modern web technologies and optimized for Vercel deployment.

## Features

### Core Features
- ⚡ **Real-time Updates** - Live score updates with WebSocket integration
- 📊 **Detailed Statistics** - Comprehensive player stats, bowling figures, fielding records
- 🎯 **Multiple Formats** - Support for Test, ODI, T20, and other formats
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- 🎨 **Modern UI** - Clean, intuitive interface similar to ESPNcricinfo
- 🔍 **Ball-by-Ball Commentary** - Detailed match progression
- 📈 **Player Profiles** - In-depth player information and statistics
- 🌐 **Match Management** - Browse active and past matches

### Technical Features
- 🚀 **Next.js 15 App Router** - Latest React framework with server/client components
- 📘 **Full TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔄 **Real-time Updates** - WebSocket for live data
- 📦 **Component Library** - Reusable, well-organized components
- 🧪 **Testing Ready** - Jest test setup
- ✅ **Production Ready** - Optimized build and deployment structure
- 📄 **Vercel Compatible** - One-click deployment ready

## Project Structure

```
cricket-live-scorecard/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── matches/
│   │   │   ├── page.tsx             # Matches list
│   │   │   └── [matchId]/
│   │   │       └── page.tsx         # Match detail
│   │   ├── api/
│   │   │   ├── matches/
│   │   │   │   ├── route.ts         # GET all matches
│   │   │   │   └── [id]/
│   │   │   │       ├── route.ts     # GET match by id
│   │   │   │       └── live/
│   │   │   │           └── route.ts # WebSocket endpoint
│   │   │   └── players/
│   │   │       └── route.ts         # GET players
│   │   ├── globals.css              # Global styles
│   │   └── page.module.css          # Component styles
│   ├── components/
│   │   ├── ScoreCard/
│   │   │   ├── ScoreCard.tsx        # Main scorecard component
│   │   │   ├── ScoreCard.module.css
│   │   │   └── index.ts
│   │   ├── Match/
│   │   │   ├── MatchHeader.tsx
│   │   │   ├── CurrentBatsmen.tsx
│   │   │   ├── Bowler.tsx
│   │   │   ├── InningsBreakdown.tsx
│   │   │   └── index.ts
│   │   ├── Commentary/
│   │   │   ├── Commentary.tsx
│   │   │   ├── BallByBall.tsx
│   │   │   └── index.ts
│   │   ├── Player/
│   │   │   ├── PlayerCard.tsx
│   │   │   ├── PlayerStats.tsx
│   │   │   └── index.ts
│   │   ├── Live/
│   │   │   ├── LiveIndicator.tsx
│   │   │   └── index.ts
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── UI/
│   │       ├── Card.tsx
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Loader.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useMatch.ts              # Match data fetching
│   │   ├── useLiveUpdates.ts        # WebSocket subscription
│   │   ├── usePlayerStats.ts        # Player statistics
│   │   └── useMatchFilters.ts       # Filtering logic
│   ├── services/
│   │   ├── api/
│   │   │   ├── matchService.ts      # Match API calls
│   │   │   ├── playerService.ts     # Player API calls
│   │   │   └── index.ts
│   │   ├── websocket/
│   │   │   ├── liveScoreSocket.ts   # WebSocket client
│   │   │   └── index.ts
│   │   └── utils/
│   │       ├── formatters.ts        # Data formatting
│   │       ├── calculations.ts      # Statistics
│   │       └── index.ts
│   ├── types/
│   │   ├── match.ts                 # Match related types
│   │   ├── player.ts                # Player related types
│   │   ├── ball.ts                  # Ball/Commentary types
│   │   ├── api.ts                   # API response types
│   │   └── index.ts
│   ├── constants/
│   │   ├── matchFormats.ts          # Match format constants
│   │   ├── routes.ts                # Route constants
│   │   └── index.ts
│   └── lib/
│       ├── db.ts                    # Database connection (future)
│       ├── auth.ts                  # Authentication (future)
│       └── cache.ts                 # Caching utilities
├── public/
│   ├── images/
│   │   ├── teams/
│   │   └── players/
│   └── icons/
├── tests/
│   ├── __tests__/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   ├── mocks/
│   │   ├── matchData.ts
│   │   ├── playerData.ts
│   │   └── handlers.ts
│   └── jest.config.js
├── docs/
│   ├── API.md                       # API documentation
│   ├── ARCHITECTURE.md              # Architecture guide
│   ├── DEPLOYMENT.md                # Deployment guide
│   └── DEVELOPMENT.md               # Development guide
├── .github/
│   └── workflows/
│       ├── ci.yml                   # CI/CD pipeline
│       └── deploy.yml               # Auto-deployment
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── jest.config.js
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── vercel.json
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/realarpan/cricket-live-scorecard.git
   cd cricket-live-scorecard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   - Navigate to http://localhost:3000

## API Endpoints

### GET `/api/matches`
Fetch all active and past matches

### GET `/api/matches/:id`
Fetch detailed match information

### WebSocket `/api/matches/:id/live`
Real-time live score updates

### GET `/api/players`
Fetch player information

## Data Models

### Match
```typescript
interface Match {
  id: string;
  title: string;
  teams: [Team, Team];
  format: 'Test' | 'ODI' | 'T20';
  status: 'scheduled' | 'live' | 'completed';
  venue: Venue;
  innings: Innings[];
  createdAt: Date;
}
```

### Innings
```typescript
interface Innings {
  team: Team;
  score: number;
  wickets: number;
  overs: number;
  ballsFaced: number;
  batsmen: Player[];
  bowlers: Player[];
}
```

## Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **SWR/TanStack Query** - Data fetching

### Backend
- **Next.js API Routes** - Serverless functions
- **TypeScript** - Type safety
- **WebSocket** - Real-time updates

### DevTools
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

## Environment Variables

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_WS_URL=ws://localhost:3000/api

# Feature Flags
NEXT_PUBLIC_ENABLE_LIVE_UPDATES=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Optional: Analytics
NEXT_PUBLIC_GA_ID=
```

## Running Tests

```bash
# Run all tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Deployment

### Vercel (Recommended)

1. **Connect GitHub repository**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Import the GitHub repository

2. **Configure settings**
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Deploy**
   - Click "Deploy"
   - Your app will be live in seconds

### Manual Deployment

```bash
# Build
npm run build

# Deploy to your server
npm run start
```

## Development Guidelines

### Code Style
- Follow ESLint rules
- Format with Prettier
- Write TypeScript strictly
- Component naming: PascalCase
- File naming: camelCase for utils, PascalCase for components

### Component Structure
```typescript
// components/Example/Example.tsx
import styles from './Example.module.css';

interface ExampleProps {
  // Props definition
}

export const Example: React.FC<ExampleProps> = ({ }) => {
  return <div className={styles.container}></div>;
};
```

### API Route Structure
```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Handle GET request
    return NextResponse.json({ data: [] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS optimization with Tailwind
- ✅ Server-side rendering where beneficial
- ✅ Static generation for stable content
- ✅ Incremental Static Regeneration (ISR)
- ✅ Edge caching for API responses

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## Roadmap

- [ ] Live WebSocket integration
- [ ] Player comparison tool
- [ ] Match predictions
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Fantasy league integration
- [ ] Advanced analytics
- [ ] Database integration

## License

MIT License - see LICENSE file for details

## Support

For support, email support@cricketcharts.com or open an issue in the repository.

## Authors

- **Arpan** - [@realarpan](https://github.com/realarpan)

## Acknowledgments

- Inspired by ESPNcricinfo
- Built with Next.js and modern web technologies
- Thanks to the open-source community
