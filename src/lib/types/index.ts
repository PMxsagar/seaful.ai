// Core types for Seaful.ai application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'agent' | 'manager' | 'admin';
  avatar?: string;
  department?: string;
  joinDate: Date;
}

export interface Prospect {
  id: string;
  name: string;
  email: string;
  company: string;
  position: string;
  phone?: string;
  industry: string;
  companySize: string;
  budget: string;
  interests: string[];
  painPoints: string[];
  source: string;
  status: 'new' | 'qualified' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  createdAt: Date;
  lastContact: Date;
}

export interface Call {
  id: string;
  prospectId: string;
  agentId: string;
  type: 'inbound' | 'outbound' | 'demo' | 'follow-up';
  duration: number; // in minutes
  status: 'scheduled' | 'completed' | 'missed' | 'cancelled';
  startTime: Date;
  endTime?: Date;
  summary?: string;
  keyPoints: string[];
  actionItems: ActionItem[];
  rating: number; // 1-10
  conversionLikelihood: 'low' | 'medium' | 'high';
  nextSteps: string[];
  recordingUrl?: string;
  transcript?: string;
}

export interface ActionItem {
  id: string;
  callId: string;
  description: string;
  assignedTo: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  type: 'email' | 'call' | 'demo' | 'proposal' | 'meeting' | 'other';
  createdAt: Date;
  completedAt?: Date;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  targetAudience: string[];
  duration: string;
  certification: boolean;
  prerequisites: string[];
  outcomes: string[];
}

export interface Email {
  id: string;
  callId?: string;
  prospectId: string;
  agentId: string;
  subject: string;
  content: string;
  type: 'follow-up' | 'proposal' | 'demo-invite' | 'thank-you' | 'nurture';
  status: 'draft' | 'sent' | 'opened' | 'clicked' | 'replied';
  sentAt?: Date;
  openedAt?: Date;
  clickedAt?: Date;
  repliedAt?: Date;
  template?: string;
}

export interface Performance {
  agentId: string;
  period: 'day' | 'week' | 'month' | 'quarter';
  metrics: {
    callsCompleted: number;
    callsScheduled: number;
    averageCallDuration: number;
    conversionRate: number;
    leadsGenerated: number;
    dealsWon: number;
    revenue: number;
    averageDealSize: number;
    salesCycleLength: number;
    emailResponseRate: number;
    customerSatisfaction: number;
  };
  date: Date;
}

export interface PitchSuggestion {
  id: string;
  prospectId: string;
  productId: string;
  content: string;
  context: string;
  effectiveness: number; // 1-10
  usageCount: number;
  category: 'opening' | 'problem-solution' | 'features' | 'pricing' | 'objection-handling' | 'closing';
}

export interface CallPreparation {
  prospectId: string;
  research: {
    companyInfo: string;
    recentNews: string[];
    socialMediaInsights: string[];
    previousInteractions: string[];
  };
  suggestedProducts: Product[];
  pitchSuggestions: PitchSuggestion[];
  potentialObjections: string[];
  geographicInsights?: string;
  industryTrends: string[];
}

export interface CallInsight {
  id: string;
  callId: string;
  type: 'product-mention' | 'objection' | 'buying-signal' | 'competitor-mention' | 'pain-point';
  content: string;
  timestamp: number; // seconds from call start
  confidence: number; // 0-1
  suggestedResponse?: string;
}

export interface Dashboard {
  todaysMetrics: {
    callsCompleted: number;
    callsScheduled: number;
    leadsGenerated: number;
    conversionRate: number;
  };
  recentCalls: Call[];
  upcomingTasks: ActionItem[];
  performanceTrend: Performance[];
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

export interface SearchResult {
  id: string;
  type: 'product' | 'competitor' | 'case-study' | 'faq' | 'pricing';
  title: string;
  content: string;
  relevance: number; // 0-1
  source: string;
  url?: string;
}

export interface Template {
  id: string;
  name: string;
  type: 'email' | 'pitch' | 'objection-response';
  category: string;
  subject?: string;
  content: string;
  variables: string[];
  usageCount: number;
  effectiveness: number; // 1-10
  createdBy: string;
  createdAt: Date;
  lastUsed?: Date;
}
