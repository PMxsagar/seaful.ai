# Seaful.ai - AI-Driven Sales Assistant Dashboard

Seaful.ai is a comprehensive AI-driven sales assistant dashboard designed specifically for EdTech companies. It provides sales teams with intelligent pre-call preparation, real-time in-call support, efficient post-call management, and detailed analytics to optimize sales performance.

## 🚀 Features

### Pre-Call Preparation
- **Prospect Research**: Comprehensive prospect information and background research
- **AI Pitch Suggestions**: Personalized pitch recommendations based on prospect data
- **Product Recommendations**: Relevant product suggestions for each prospect
- **Call Preparation Checklist**: Ensure nothing is missed before important calls

### In-Call Support
- **Real-time Product Lookup**: Instant access to product information during calls
- **Live Talking Points**: AI-powered suggestions for conversation flow
- **Objection Handling**: Real-time prompts for handling common objections
- **Call Transcript**: Live call transcription and note-taking

### Post-Call Management
- **AI Call Summary**: Automatic generation of detailed call summaries
- **Action Items Tracking**: Extract and track follow-up tasks
- **Email Drafting**: AI-assisted email composition for follow-ups
- **Call Analysis**: Performance analysis and improvement suggestions

### Analytics & Reporting
- **Performance Metrics**: Track conversion rates, call success, and revenue
- **Sales Cycle Analysis**: Understand your sales pipeline flow
- **Team Performance**: Compare individual and team performance
- **Trend Analysis**: Identify patterns and opportunities

### AI Features
- **Intelligent Pitch Generation**: Create personalized pitches using AI
- **Email Template Assistant**: Generate professional email templates
- **Call Analysis**: Get AI insights on call performance
- **Follow-up Recommendations**: Smart suggestions for next steps

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript, Node.js

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seaful-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ai/               # AI features components
│   ├── analytics/        # Analytics and reporting
│   ├── dashboard/        # Main dashboard components
│   ├── data-display/     # Data tables and displays
│   ├── forms/            # Forms and inputs
│   ├── in-call/          # In-call support features
│   ├── post-call/        # Post-call management
│   ├── pre-call/         # Pre-call preparation
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions and types
│   ├── mock-data/        # Sample data for demo
│   ├── types/            # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── hooks/                # Custom React hooks
```

## 🎯 Key Components

### Dashboard Overview
- Performance metrics cards
- Recent calls overview
- Task management
- Quick action buttons

### Navigation System
- Sidebar navigation with 9 main sections
- Clean, intuitive interface design
- Responsive layout for different screen sizes

### Data Management
- Comprehensive prospect database
- Call history tracking
- Product information management
- Action items and follow-ups

## 🧪 Demo Data

The application includes comprehensive mock data for demonstration:
- Sample prospect profiles with realistic data
- Call history with various outcomes
- Performance metrics and analytics
- Email templates and AI suggestions
- Product information for EdTech solutions

## 🚀 Getting Started

1. **Explore the Dashboard**: Start with the main dashboard to see performance metrics
2. **Pre-Call Preparation**: Navigate to prepare for upcoming sales calls
3. **In-Call Support**: Use during live calls for real-time assistance
4. **Post-Call Management**: Process call outcomes and plan follow-ups
5. **Analytics**: Review performance data and identify trends
6. **AI Features**: Leverage AI tools for enhanced sales productivity

## 📈 Performance Features

- **Real-time Updates**: Live data updates during calls
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Fast Navigation**: Instant switching between different features
- **Efficient Data Loading**: Optimized for quick access to information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create components in the appropriate directory under `src/components/`
2. Add types to `src/lib/types/index.ts`
3. Update mock data in `src/lib/mock-data/index.ts`
4. Add navigation items to the sidebar component

## 📋 Requirements

- Node.js 18+ 
- npm or yarn
- Modern web browser

## 🎨 UI/UX Features

- Modern, clean interface design
- Consistent color scheme and typography
- Intuitive navigation and user flow
- Responsive design for all devices
- Accessibility considerations built-in

---

Built with ❤️ for EdTech sales teams to maximize their success with AI-powered assistance.
