import {
  User,
  Prospect,
  Call,
  ActionItem,
  Product,
  Email,
  Performance,
  PitchSuggestion,
  CallPreparation,
  Dashboard,
  Notification,
  Template,
} from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sagar Dewale',
    email: 'sagar@company.com',
    role: 'agent',
    avatar: '/avatars/sagar.jpg',
    department: 'Sales',
    joinDate: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'Akash Gupta',
    email: 'priya@company.com',
    role: 'manager',
    avatar: '/avatars/priya.jpg',
    department: 'Sales',
    joinDate: new Date('2022-08-10'),
  },
];

// Mock Prospects
export const mockProspects: Prospect[] = [
  {
    id: '1',
    name: 'Rohan Verma',
    email: 'rohan@infotech.com',
    company: 'InfoTech India',
    position: 'Engineering Manager',
    phone: '+91-9876543210',
    industry: 'Technology',
    companySize: '200-500',
    budget: '₹4,000,000-₹8,000,000',
    interests: ['Machine Learning', 'Data Science', 'Cloud Computing'],
    painPoints: ['Team upskilling', 'Technology adoption', 'Talent retention'],
    source: 'LinkedIn',
    status: 'qualified',
    createdAt: new Date('2024-01-15'),
    lastContact: new Date('2024-01-20'),
  },
  {
    id: '2',
    name: 'Akash Gupta',
    email: 'priya@shiksha.com',
    company: 'Shiksha Tech',
    position: 'HR Director',
    phone: '+91-9876543211',
    industry: 'Education',
    companySize: '100-200',
    budget: '₹2,000,000-₹4,000,000',
    interests: ['Leadership Development', 'Communication Skills', 'Project Management'],
    painPoints: ['Employee development', 'Skills gap', 'Training budget'],
    source: 'Website',
    status: 'proposal',
    createdAt: new Date('2024-01-10'),
    lastContact: new Date('2024-01-22'),
  },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Machine Learning Mastery',
    category: 'Technical Skills',
    description: 'Comprehensive ML course covering algorithms, implementation, and real-world applications',
    features: [
      'Hands-on projects',
      'Industry case studies',
      'Expert mentorship',
      'Career support',
      'Certification',
    ],
    pricing: {
      basic: 25000,
      premium: 40000,
      enterprise: 75000,
    },
    targetAudience: ['Software Engineers', 'Data Analysts', 'Engineering Managers'],
    duration: '6 months',
    certification: true,
    prerequisites: ['Basic programming knowledge', 'Statistics fundamentals'],
    outcomes: ['Build ML models', 'Deploy production systems', 'Lead ML projects'],
  },
  {
    id: '2',
    name: 'Leadership Excellence Program',
    category: 'Soft Skills',
    description: 'Transform your leadership skills with proven frameworks and practical tools',
    features: [
      'Leadership assessments',
      '360-degree feedback',
      'Peer learning groups',
      'Executive coaching',
      'Action learning projects',
    ],
    pricing: {
      basic: 15000,
      premium: 25000,
      enterprise: 45000,
    },
    targetAudience: ['Team Leads', 'Managers', 'Senior Executives'],
    duration: '3 months',
    certification: true,
    prerequisites: ['2+ years management experience'],
    outcomes: ['Effective team management', 'Strategic thinking', 'Change leadership'],
  },
];

// Mock Calls
export const mockCalls: Call[] = [
  {
    id: '1',
    prospectId: '1',
    agentId: '1',
    type: 'demo',
    duration: 28,
    status: 'completed',
    startTime: new Date('2024-01-22T10:00:00'),
    endTime: new Date('2024-01-22T10:28:00'),
    summary: 'Discussed ML course requirements for 8 engineers. Strong interest but budget concerns.',
    keyPoints: [
      'Team of 8 engineers needs ML upskilling',
      'Budget constraint around ₹8,000 per person',
      'Looking for hands-on practical training',
      'Timeline: 6 months',
      'Previous training experience with Coursera',
    ],
    actionItems: [
      {
        id: '1',
        callId: '1',
        description: 'Send customized pricing proposal for team of 8',
        assignedTo: '1',
        dueDate: new Date('2024-01-23'),
        status: 'pending',
        priority: 'high',
        type: 'proposal',
        createdAt: new Date('2024-01-22T10:30:00'),
      },
      {
        id: '2',
        callId: '1',
        description: 'Schedule technical demo for engineering team',
        assignedTo: '1',
        dueDate: new Date('2024-01-25'),
        status: 'pending',
        priority: 'medium',
        type: 'demo',
        createdAt: new Date('2024-01-22T10:30:00'),
      },
    ],
    rating: 8.5,
    conversionLikelihood: 'medium',
    nextSteps: [
      'Follow up with pricing proposal',
      'Schedule team demo',
      'Connect with HR for budget approval',
    ],
  },
];

// Mock Performance Data
export const mockPerformance: Performance[] = [
  {
    agentId: '1',
    period: 'month',
    metrics: {
      callsCompleted: 45,
      callsScheduled: 52,
      averageCallDuration: 25,
      conversionRate: 22,
      leadsGenerated: 15,
      dealsWon: 8,
      revenue: 25600000,
      averageDealSize: 3200000,
      salesCycleLength: 14,
      emailResponseRate: 68,
      customerSatisfaction: 8.4,
    },
    date: new Date('2024-01-01'),
  },
];

// Mock Pitch Suggestions
export const mockPitchSuggestions: PitchSuggestion[] = [
  {
    id: '1',
    prospectId: '1',
    productId: '1',
    content: 'Hi Rohan, I understand your team is looking to enhance their ML capabilities. Our ML Mastery program has helped 200+ engineering teams like yours build production-ready ML systems in just 6 months.',
    context: 'Opening pitch for ML course to engineering manager',
    effectiveness: 8.5,
    usageCount: 15,
    category: 'opening',
  },
  {
    id: '2',
    prospectId: '1',
    productId: '1',
    content: 'I hear your concern about the budget. Let me share how InfoTech similar to yours achieved 300% ROI within 12 months by investing in ML training. We also offer flexible payment options.',
    context: 'Handling budget objections',
    effectiveness: 7.8,
    usageCount: 8,
    category: 'objection-handling',
  },
];

// Mock Templates
export const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Post-Demo Follow-up',
    type: 'email',
    category: 'Follow-up',
    subject: 'Thank you for your time today - Next steps for {{company}}',
    content: `Hi {{prospect_name}},

Thank you for taking the time to speak with me today about {{company}}'s {{topic}} needs.

Based on our conversation, I understand that:
- {{key_point_1}}
- {{key_point_2}}
- {{key_point_3}}

As discussed, I'm attaching:
1. {{attachment_1}}
2. {{attachment_2}}

Next steps:
- {{next_step_1}}
- {{next_step_2}}

I'll follow up on {{follow_up_date}} to discuss your thoughts and answer any questions.

Best regards,
{{agent_name}}`,
    variables: ['prospect_name', 'company', 'topic', 'key_point_1', 'key_point_2', 'key_point_3', 'attachment_1', 'attachment_2', 'next_step_1', 'next_step_2', 'follow_up_date', 'agent_name'],
    usageCount: 45,
    effectiveness: 8.2,
    createdBy: '1',
    createdAt: new Date('2024-01-01'),
    lastUsed: new Date('2024-01-22'),
  },
];

// Mock Dashboard Data
export const mockDashboard: Dashboard = {
  todaysMetrics: {
    callsCompleted: 5,
    callsScheduled: 7,
    leadsGenerated: 3,
    conversionRate: 18,
  },
  recentCalls: mockCalls,
  upcomingTasks: [
    {
      id: '1',
      callId: '1',
      description: 'Send customized pricing proposal for team of 8',
      assignedTo: '1',
      dueDate: new Date('2024-01-23'),
      status: 'pending',
      priority: 'high',
      type: 'proposal',
      createdAt: new Date('2024-01-22T10:30:00'),
    },
    {
      id: '2',
      callId: '1',
      description: 'Schedule technical demo for engineering team',
      assignedTo: '1',
      dueDate: new Date('2024-01-25'),
      status: 'pending',
      priority: 'medium',
      type: 'demo',
      createdAt: new Date('2024-01-22T10:30:00'),
    },
  ],
  performanceTrend: mockPerformance,
  notifications: [
    {
      id: '1',
      type: 'success',
      title: 'Deal Closed!',
      message: 'Akash Gupta from StartupCo just signed up for Leadership Excellence Program',
      timestamp: new Date('2024-01-22T09:30:00'),
      read: false,
    },
    {
      id: '2',
      type: 'warning',
      title: 'Follow-up Due',
      message: 'You have 3 follow-up tasks due today',
      timestamp: new Date('2024-01-22T08:00:00'),
      read: false,
    },
  ],
};

// Utility functions to get mock data
export const getMockUser = (id: string) => mockUsers.find(user => user.id === id);
export const getMockProspect = (id: string) => mockProspects.find(prospect => prospect.id === id);
export const getMockProduct = (id: string) => mockProducts.find(product => product.id === id);
export const getMockCall = (id: string) => mockCalls.find(call => call.id === id);

// Generate additional mock data
export const generateMockCalls = (count: number): Call[] => {
  const calls: Call[] = [];
  const statuses: Call['status'][] = ['completed', 'scheduled', 'missed'];
  const types: Call['type'][] = ['inbound', 'outbound', 'demo', 'follow-up'];
  
  for (let i = 0; i < count; i++) {
    calls.push({
      id: `call-${i + 2}`,
      prospectId: mockProspects[i % mockProspects.length].id,
      agentId: '1',
      type: types[i % types.length],
      duration: Math.floor(Math.random() * 45) + 15,
      status: statuses[i % statuses.length],
      startTime: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      keyPoints: [
        'Discussed product requirements',
        'Identified pain points',
        'Explored budget constraints',
      ],
      actionItems: [],
      rating: Math.floor(Math.random() * 5) + 5,
      conversionLikelihood: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
      nextSteps: ['Follow up with proposal', 'Schedule demo'],
    });
  }
  
  return calls;
};
