"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Send, 
  Save, 
  FileText, 
  Wand2, 
  Eye, 
  Paperclip, 
  Users, 
  Clock,
  Star,
  Trash2,
  Copy,
  Edit
} from 'lucide-react';
import { Email, Template as EmailTemplate, Prospect } from '@/lib/types';
import { mockTemplates, mockProspects } from '@/lib/mock-data';

const EmailComposer = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
  const [emailData, setEmailData] = useState({
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    content: '',
    attachments: [] as string[],
  });
  const [selectedProspects, setSelectedProspects] = useState<string[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleTemplateSelect = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setEmailData({
      ...emailData,
      subject: template.subject || '',
      content: template.content,
    });
  };

  const applyTemplate = (template: EmailTemplate, prospect?: Prospect) => {
    let content = template.content;
    let subject = template.subject || '';
    
    if (prospect) {
      // Replace template variables with prospect data
      const replacements: Record<string, string> = {
        '{{prospect_name}}': prospect.name,
        '{{company}}': prospect.company,
        '{{position}}': prospect.position,
        '{{agent_name}}': 'Sagar Dewale',
        '{{follow_up_date}}': new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        '{{topic}}': prospect.interests?.[0] || 'training needs',
        '{{key_point_1}}': `Your team of ${prospect.companySize} needs specialized training`,
        '{{key_point_2}}': `Budget consideration around ${prospect.budget}`,
        '{{key_point_3}}': `Looking for hands-on practical training`,
        '{{attachment_1}}': 'Customized pricing proposal',
        '{{attachment_2}}': 'Product demo video',
        '{{next_step_1}}': 'Review the proposal and pricing options',
        '{{next_step_2}}': 'Schedule a technical demo for your team',
      };

      Object.entries(replacements).forEach(([placeholder, value]) => {
        content = content.replace(new RegExp(placeholder, 'g'), value);
        subject = subject.replace(new RegExp(placeholder, 'g'), value);
      });
    }

    return { content, subject };
  };

  const generateAIContent = async () => {
    // Simulate AI generation
    const aiSuggestions = [
      "Based on your recent conversation, I wanted to follow up on the key points we discussed.",
      "I hope this email finds you well. Following our productive discussion yesterday, I wanted to provide you with the next steps.",
      "Thank you for taking the time to speak with me about your team's training needs.",
    ];
    
    const randomSuggestion = aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)];
    setEmailData({
      ...emailData,
      content: emailData.content + '\n\n' + randomSuggestion,
    });
  };

  const handleSendEmail = () => {
    console.log('Sending email:', emailData);
    // In a real app, this would send the email
    alert('Email sent successfully!');
  };

  const handleSaveTemplate = () => {
    console.log('Saving as template:', emailData);
    // In a real app, this would save the email as a template
    alert('Email saved as template!');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Email Composer</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsPreviewMode(!isPreviewMode)}>
            <Eye className="h-4 w-4 mr-2" />
            {isPreviewMode ? 'Edit' : 'Preview'}
          </Button>
          <Button variant="outline" onClick={handleSaveTemplate}>
            <Save className="h-4 w-4 mr-2" />
            Save Template
          </Button>
          <Button onClick={handleSendEmail}>
            <Send className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Templates Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Templates
              </CardTitle>
              <CardDescription>
                Choose from pre-built email templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTemplates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedTemplate?.id === template.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{template.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Used {template.usageCount} times
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">
                      {template.effectiveness}/10
                    </span>
                  </div>
                </div>
              ))}

              <Button 
                variant="outline" 
                className="w-full"
                onClick={generateAIContent}
              >
                <Wand2 className="h-4 w-4 mr-2" />
                AI Suggest
              </Button>
            </CardContent>
          </Card>

          {/* Prospects List */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Recipients
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockProspects.slice(0, 3).map((prospect) => (
                <div
                  key={prospect.id}
                  className={`p-2 border rounded cursor-pointer transition-colors ${
                    selectedProspects.includes(prospect.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    if (selectedProspects.includes(prospect.id)) {
                      setSelectedProspects(selectedProspects.filter(id => id !== prospect.id));
                    } else {
                      setSelectedProspects([...selectedProspects, prospect.id]);
                      // Auto-populate email for single selection
                      if (selectedProspects.length === 0) {
                        setEmailData({
                          ...emailData,
                          to: prospect.email,
                        });
                        // Apply template with prospect data if template is selected
                        if (selectedTemplate) {
                          const { content, subject } = applyTemplate(selectedTemplate, prospect);
                          setEmailData({
                            ...emailData,
                            to: prospect.email,
                            subject,
                            content,
                          });
                        }
                      }
                    }
                  }}
                >
                  <p className="font-medium text-sm">{prospect.name}</p>
                  <p className="text-xs text-gray-600">{prospect.company}</p>
                  <p className="text-xs text-gray-500">{prospect.email}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Email Composer */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Compose Email</CardTitle>
              {selectedTemplate && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4" />
                  Using template: {selectedTemplate.name}
                </div>
              )}
            </CardHeader>
            <CardContent>
              {isPreviewMode ? (
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="space-y-2 text-sm">
                      <div><strong>To:</strong> {emailData.to}</div>
                      {emailData.cc && <div><strong>CC:</strong> {emailData.cc}</div>}
                      {emailData.bcc && <div><strong>BCC:</strong> {emailData.bcc}</div>}
                      <div><strong>Subject:</strong> {emailData.subject}</div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 min-h-[300px] whitespace-pre-wrap">
                    {emailData.content}
                  </div>
                  {emailData.attachments.length > 0 && (
                    <div>
                      <strong>Attachments:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {emailData.attachments.map((attachment, index) => (
                          <Badge key={index} variant="secondary">
                            <Paperclip className="h-3 w-3 mr-1" />
                            {attachment}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      placeholder="To"
                      value={emailData.to}
                      onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                    />
                    <Input
                      placeholder="CC"
                      value={emailData.cc}
                      onChange={(e) => setEmailData({ ...emailData, cc: e.target.value })}
                    />
                    <Input
                      placeholder="BCC"
                      value={emailData.bcc}
                      onChange={(e) => setEmailData({ ...emailData, bcc: e.target.value })}
                    />
                  </div>

                  <Input
                    placeholder="Subject"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                  />

                  <Textarea
                    placeholder="Compose your email..."
                    value={emailData.content}
                    onChange={(e) => setEmailData({ ...emailData, content: e.target.value })}
                    className="min-h-[300px]"
                  />

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach Files
                    </Button>
                    <Button variant="outline" size="sm" onClick={generateAIContent}>
                      <Wand2 className="h-4 w-4 mr-2" />
                      AI Enhance
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Email Analytics */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Email Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">68%</div>
                  <div className="text-sm text-gray-600">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24%</div>
                  <div className="text-sm text-gray-600">Click Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12%</div>
                  <div className="text-sm text-gray-600">Reply Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">3.2</div>
                  <div className="text-sm text-gray-600">Avg. Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Emails */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Emails
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                to: 'john@techcorp.com',
                subject: 'Follow-up on ML Training Discussion',
                status: 'sent',
                timestamp: '2 hours ago',
                opened: true,
              },
              {
                to: 'sarah@edutech.com',
                subject: 'Leadership Program Proposal',
                status: 'sent',
                timestamp: '1 day ago',
                opened: true,
              },
              {
                to: 'mike@startupco.com',
                subject: 'Thank you for your time today',
                status: 'draft',
                timestamp: '2 days ago',
                opened: false,
              },
            ].map((email, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{email.subject}</p>
                    <Badge variant={email.status === 'sent' ? 'default' : 'secondary'}>
                      {email.status}
                    </Badge>
                    {email.opened && (
                      <Badge variant="outline" className="text-green-600">
                        Opened
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">To: {email.to}</p>
                  <p className="text-xs text-gray-500">{email.timestamp}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailComposer;
