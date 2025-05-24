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
  Phone, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  Target, 
  Calendar,
  Plus,
  Send,
  FileText,
  Brain,
  TrendingUp
} from 'lucide-react';
import { Call, ActionItem } from '@/lib/types';
import { mockCalls, mockProspects, mockProducts } from '@/lib/mock-data';

const PostCallManagement = () => {
  const [selectedCall, setSelectedCall] = useState<Call>(mockCalls[0]);
  const [callSummary, setCallSummary] = useState(selectedCall?.summary || '');
  const [newActionItem, setNewActionItem] = useState('');
  const [callRating, setCallRating] = useState(selectedCall?.rating || 0);

  const prospect = mockProspects.find(p => p.id === selectedCall?.prospectId);
  
  const handleAddActionItem = () => {
    if (newActionItem.trim()) {
      // In a real app, this would save to backend
      console.log('Adding action item:', newActionItem);
      setNewActionItem('');
    }
  };

  const handleSaveCallSummary = () => {
    // In a real app, this would save to backend
    console.log('Saving call summary:', callSummary);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Post-Call Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Send Follow-up
          </Button>
        </div>
      </div>

      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Call Summary</TabsTrigger>
          <TabsTrigger value="actions">Action Items</TabsTrigger>
          <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
          <TabsTrigger value="follow-up">Follow-up</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Call Overview */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Prospect</label>
                    <p className="font-semibold">{prospect?.name}</p>
                    <p className="text-sm text-gray-600">{prospect?.company}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Duration</label>
                    <p className="font-semibold flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedCall?.duration} minutes
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Call Type</label>
                    <Badge variant="secondary" className="mt-1">
                      {selectedCall?.type}
                    </Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <Badge className={`mt-1 ${getStatusColor(selectedCall?.status || '')}`}>
                      {selectedCall?.status}
                    </Badge>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Call Rating</label>
                  <div className="flex items-center gap-2 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setCallRating(star * 2)}
                        className="text-yellow-400 hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={`h-5 w-5 ${(callRating / 2) >= star ? 'fill-current' : ''}`} 
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {callRating}/10
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Call Summary</label>
                  <Textarea
                    value={callSummary}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCallSummary(e.target.value)}
                    placeholder="Enter call summary..."
                    className="mt-1 min-h-[120px]"
                  />
                  <Button onClick={handleSaveCallSummary} className="mt-2">
                    Save Summary
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Conversion Likelihood</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Probability</span>
                      <span className="font-semibold">
                        {selectedCall?.conversionLikelihood === 'high' ? '75%' : 
                         selectedCall?.conversionLikelihood === 'medium' ? '45%' : '20%'}
                      </span>
                    </div>
                    <Progress 
                      value={selectedCall?.conversionLikelihood === 'high' ? 75 : 
                             selectedCall?.conversionLikelihood === 'medium' ? 45 : 20} 
                      className="h-2"
                    />
                    <Badge className={`w-full justify-center ${
                      selectedCall?.conversionLikelihood === 'high' ? 'bg-green-100 text-green-800' :
                      selectedCall?.conversionLikelihood === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedCall?.conversionLikelihood?.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Key Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedCall?.keyPoints?.map((point, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedCall?.nextSteps?.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Action Items</CardTitle>
              <CardDescription>
                Track and manage follow-up tasks from this call
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newActionItem}
                  onChange={(e) => setNewActionItem(e.target.value)}
                  placeholder="Add new action item..."
                  className="flex-1"
                />
                <Button onClick={handleAddActionItem}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {selectedCall?.actionItems?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{item.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {item.dueDate.toLocaleDateString()}
                        </span>
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Mark Complete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Call Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700">Strengths Identified</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Strong rapport building in first 5 minutes</li>
                    <li>• Effective needs discovery questioning</li>
                    <li>• Good product knowledge demonstration</li>
                    <li>• Clear next steps communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">Areas for Improvement</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Could have addressed budget concerns earlier</li>
                    <li>• Missed opportunity to discuss ROI metrics</li>
                    <li>• Should have asked about decision-making process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Recommendations</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• Include ROI calculator in follow-up email</li>
                    <li>• Schedule call with technical decision-maker</li>
                    <li>• Send case study from similar company</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Talk Time Ratio</span>
                      <span className="font-semibold">60/40</span>
                    </div>
                    <Progress value={60} className="h-2 mt-1" />
                    <p className="text-xs text-gray-600 mt-1">Good balance - let prospect talk</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Questions Asked</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <Progress value={80} className="h-2 mt-1" />
                    <p className="text-xs text-gray-600 mt-1">Excellent discovery questioning</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Objections Handled</span>
                      <span className="font-semibold">3/3</span>
                    </div>
                    <Progress value={100} className="h-2 mt-1" />
                    <p className="text-xs text-gray-600 mt-1">All objections addressed</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Engagement Score</span>
                      <span className="font-semibold">8.5/10</span>
                    </div>
                    <Progress value={85} className="h-2 mt-1" />
                    <p className="text-xs text-gray-600 mt-1">High prospect engagement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="follow-up" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Follow-up Actions</CardTitle>
              <CardDescription>
                Automated and manual follow-up recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Immediate Actions (Today)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm">Send pricing proposal</span>
                      <Button size="sm" variant="outline">Do Now</Button>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Schedule technical demo</span>
                      <Button size="sm" variant="outline">Schedule</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">This Week</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Follow up on proposal</span>
                      <Button size="sm" variant="outline">Set Reminder</Button>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                      <FileText className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Send case study</span>
                      <Button size="sm" variant="outline">Send</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">AI-Generated Follow-up Email</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Subject:</strong> Thank you for your time today - Next steps for TechCorp</p>
                  <div className="bg-white p-3 rounded border">
                    <p>Hi John,</p>
                    <p className="mt-2">Thank you for taking the time to speak with me today about TechCorp's machine learning training needs.</p>
                    <p className="mt-2">Based on our conversation, I understand that:</p>
                    <ul className="mt-1 ml-4 list-disc">
                      <li>Your team of 8 engineers needs ML upskilling</li>
                      <li>Budget consideration around ₹8,000 per person</li>
                      <li>You're looking for hands-on practical training</li>
                    </ul>
                    <p className="mt-2">As discussed, I'm attaching a customized pricing proposal for your team and will follow up by Thursday to schedule a technical demo.</p>
                    <p className="mt-2">Best regards,<br />Sagar</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">Send Email</Button>
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="outline">Save as Template</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PostCallManagement;
