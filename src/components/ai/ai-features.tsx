"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Wand2, 
  MessageSquare, 
  Target, 
  TrendingUp, 
  FileText,
  BarChart3,
  Mail,
  Star,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Play,
  RefreshCw,
  Settings
} from 'lucide-react';
import { mockProspects, mockCalls } from '@/lib/mock-data';

const AIFeatures = () => {
  const [aiInput, setAIInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('pitch-generator');

  const [aiResponses, setAIResponses] = useState({
    pitchGenerated: '',
    objectionHandlingGenerated: '',
    followUpGenerated: '',
    callAnalysisGenerated: '',
  });

  const generateContent = async (type: string, _input: string) => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResponses = {
      'pitch-generator': `Hi ${mockProspects[0].name},

I hope this message finds you well. I understand that ${mockProspects[0].company} is looking to enhance your team's capabilities in ${mockProspects[0].interests?.[0] || 'technology'}.

Based on our research, companies similar to yours have seen remarkable results with our training programs:
• 40% improvement in team productivity
• 65% faster project completion
• 25% increase in employee satisfaction

Our ${mockProspects[0].interests?.[0] || 'technology'} program is specifically designed for ${mockProspects[0].companySize} companies like yours, with flexible pricing options that fit your budget of ${mockProspects[0].budget}.

Would you be interested in a 15-minute call to discuss how we can help ${mockProspects[0].company} achieve similar results?

Best regards,
Sagar Dewale`,

      'objection-handling': `Objection: "It's too expensive for our budget."

Response Strategy:
1. **Acknowledge and Empathize**: "I completely understand budget considerations are important for ${mockProspects[0].company}."

2. **Reframe the Investment**: "Let's look at this as an investment in your team's future. The average ROI for companies like yours is 300% within 12 months."

3. **Flexible Options**: "We offer several payment plans:
   • Monthly installments over 6 months
   • Starter package with core features
   • Group discount for ${mockProspects[0].companySize} teams"

4. **Value Reinforcement**: "Consider the cost of not training - project delays, missed opportunities, and potential talent loss could cost much more."

5. **Trial Offer**: "How about we start with a pilot program for 5 team members? This lets you see results before full commitment."`,

      'follow-up': `Subject: Following up on our ${mockCalls[0]?.type || 'demo'} call - Next steps for ${mockProspects[0].company}

Hi ${mockProspects[0].name},

Thank you for the engaging conversation earlier today. I'm excited about the opportunity to help ${mockProspects[0].company} achieve its ${mockProspects[0].interests?.[0] || 'training'} goals.

Key takeaways from our discussion:
✓ Your team of ${mockProspects[0].companySize} needs specialized training
✓ Budget consideration around ${mockProspects[0].budget}
✓ Timeline of 3-6 months for implementation
✓ Focus on practical, hands-on learning

Next steps:
1. I'll send the customized proposal by tomorrow
2. Technical demo scheduled for next week
3. Connect with your HR team for budget approval

I'm attaching:
• Case study from a similar company in ${mockProspects[0].industry}
• Detailed curriculum outline
• Flexible pricing options

Feel free to reach out with any questions. I'm here to support ${mockProspects[0].company}'s success.

Best regards,
Sagar Dewale`,

      'call-analysis': `AI Call Analysis Report

**Overall Performance: 8.2/10**

**Strengths Identified:**
• Excellent rapport building (scored 9/10)
• Strong product knowledge demonstration
• Effective needs discovery questions
• Clear articulation of value proposition
• Good listening skills and prospect engagement

**Areas for Improvement:**
• Could have addressed budget concerns earlier (mentioned at 18:30)
• Missed opportunity to discuss ROI metrics in detail
• Should have asked about decision-making timeline
• Could have been more specific about implementation process

**Conversation Insights:**
• Prospect showed high interest (engagement score: 8.5/10)
• 3 main objections raised and handled well
• Strong fit between prospect needs and product offering
• Budget is the primary concern, not product fit

**Recommendations:**
1. Follow up with detailed ROI calculator
2. Schedule call with technical decision-maker
3. Send case study from similar industry
4. Propose pilot program to reduce risk

**Conversion Probability: 75%**
**Recommended Next Actions:**
- Send proposal within 24 hours
- Schedule technical demo
- Connect with procurement team`,
    };

    const response = mockResponses[type as keyof typeof mockResponses] || 'AI-generated content would appear here.';
    
    setAIResponses(prev => ({
      ...prev,
      [type.replace('-', '') + 'Generated']: response
    }));
    
    setIsGenerating(false);
  };

  const aiFeatures = [
    {
      id: 'pitch-generator',
      title: 'AI Pitch Generator',
      description: 'Generate personalized sales pitches based on prospect data',
      icon: MessageSquare,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'objection-handling',
      title: 'Objection Handler',
      description: 'Get AI-powered responses to common sales objections',
      icon: Target,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 'follow-up',
      title: 'Follow-up Assistant',
      description: 'Create follow-up emails and action plans automatically',
      icon: Mail,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'call-analysis',
      title: 'Call Analysis',
      description: 'AI analysis of call performance and recommendations',
      icon: BarChart3,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const aiInsights = [
    {
      title: 'Conversation Trends',
      value: '+23%',
      description: 'Improvement in conversation quality this month',
      trend: 'up',
    },
    {
      title: 'AI Suggestions Used',
      value: '142',
      description: 'AI recommendations implemented',
      trend: 'up',
    },
    {
      title: 'Success Rate',
      value: '78%',
      description: 'Calls improved with AI assistance',
      trend: 'up',
    },
    {
      title: 'Time Saved',
      value: '12h',
      description: 'Weekly time saved with automation',
      trend: 'up',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">AI Features</h1>
          <p className="text-gray-600 mt-2">Leverage AI to enhance your sales performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            AI Settings
          </Button>
          <Button>
            <Brain className="h-4 w-4 mr-2" />
            Train AI Model
          </Button>
        </div>
      </div>

      {/* AI Insights Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {aiInsights.map((insight, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{insight.title}</p>
                  <p className="text-2xl font-bold">{insight.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={feature.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedFeature === feature.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedFeature(feature.id)}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* AI Workspace */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="h-5 w-5" />
            AI Workspace
          </CardTitle>
          <CardDescription>
            Generate AI-powered content to enhance your sales process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedFeature} onValueChange={setSelectedFeature} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pitch-generator">Pitch Generator</TabsTrigger>
              <TabsTrigger value="objection-handling">Objection Handler</TabsTrigger>
              <TabsTrigger value="follow-up">Follow-up Assistant</TabsTrigger>
              <TabsTrigger value="call-analysis">Call Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="pitch-generator" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Prospect Information</label>
                  <Textarea
                    placeholder="Enter prospect details, pain points, or specific requirements..."
                    value={aiInput}
                    onChange={(e) => setAIInput(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => generateContent('pitch-generator', aiInput)}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        Generate Pitch
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <Play className="h-4 w-4 mr-2" />
                    Use Template
                  </Button>
                </div>
                {aiResponses.pitchGenerated && (
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Generated Pitch</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm">{aiResponses.pitchGenerated}</div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="objection-handling" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Objection or Concern</label>
                  <Input
                    placeholder="e.g., 'It's too expensive' or 'We don't have time'"
                    value={aiInput}
                    onChange={(e) => setAIInput(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => generateContent('objection-handling', aiInput)}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Target className="h-4 w-4 mr-2" />
                        Get Response Strategy
                      </>
                    )}
                  </Button>
                </div>
                {aiResponses.objectionHandlingGenerated && (
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Objection Handling Strategy</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm">{aiResponses.objectionHandlingGenerated}</div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="follow-up" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Call Summary or Context</label>
                  <Textarea
                    placeholder="Brief summary of the call, key points discussed, next steps..."
                    value={aiInput}
                    onChange={(e) => setAIInput(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => generateContent('follow-up', aiInput)}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Generate Follow-up
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Use Email Template
                  </Button>
                </div>
                {aiResponses.followUpGenerated && (
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Follow-up Email</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </Button>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm">{aiResponses.followUpGenerated}</div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="call-analysis" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Call Recording or Transcript</label>
                  <Textarea
                    placeholder="Paste call transcript or upload call recording..."
                    value={aiInput}
                    onChange={(e) => setAIInput(e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => generateContent('call-analysis', aiInput)}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analyze Call
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Upload Recording
                  </Button>
                </div>
                {aiResponses.callAnalysisGenerated && (
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">AI Call Analysis</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="whitespace-pre-wrap text-sm">{aiResponses.callAnalysisGenerated}</div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Usage Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pitch Generation</span>
                  <span className="text-sm font-medium">89% effective</span>
                </div>
                <Progress value={89} className="h-2 mt-1" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Objection Handling</span>
                  <span className="text-sm font-medium">76% effective</span>
                </div>
                <Progress value={76} className="h-2 mt-1" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Follow-up Emails</span>
                  <span className="text-sm font-medium">92% effective</span>
                </div>
                <Progress value={92} className="h-2 mt-1" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Call Analysis</span>
                  <span className="text-sm font-medium">84% effective</span>
                </div>
                <Progress value={84} className="h-2 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: 'Pitch', content: 'Emphasize ROI metrics for enterprise clients', rating: 9.2 },
                { type: 'Objection', content: 'Address budget concerns with payment plans', rating: 8.7 },
                { type: 'Follow-up', content: 'Include case study in follow-up email', rating: 9.5 },
                { type: 'Analysis', content: 'Improve question-to-statement ratio', rating: 8.3 },
              ].map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{suggestion.type}</Badge>
                      <span className="text-sm font-medium">{suggestion.content}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{suggestion.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIFeatures;
