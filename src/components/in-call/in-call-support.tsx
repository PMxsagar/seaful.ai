"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { mockProspects, mockProducts } from "@/lib/mock-data";
import { 
  Search, 
  Phone,
  PhoneCall,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Users,
  MessageSquare,
  FileText,
  Clock,
  TrendingUp,
  Target,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Copy,
  Send
} from "lucide-react";
import { useState } from "react";

export function InCallSupport() {
  const [isCallActive, setIsCallActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(1247); // seconds
  const prospect = mockProspects[0];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const talkingPoints = [
    "Highlight hands-on project experience",
    "Mention 6-month flexible timeline",
    "Emphasize ROI and career advancement",
    "Address team size and scalability"
  ];

  const realtimeInsights = [
    { type: 'positive', text: 'Rohan mentioned "budget approval" - good buying signal', timestamp: '08:32' },
    { type: 'question', text: 'Prospect asked about certification - emphasize accreditation', timestamp: '12:15' },
    { type: 'concern', text: 'Time constraint mentioned - address flexible learning', timestamp: '15:45' },
  ];

  return (
    <div className="space-y-6">
      {/* Call Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`/avatars/${prospect.name.toLowerCase().replace(' ', '-')}.jpg`} />
              <AvatarFallback>
                {prospect.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">{prospect.name}</h1>
              <p className="text-sm text-muted-foreground">{prospect.company} • {prospect.position}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={isCallActive ? "default" : "secondary"} className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
              {isCallActive ? 'Live' : 'Ended'}
            </Badge>
            <Badge variant="outline">
              <Clock className="w-3 h-3 mr-1" />
              {formatTime(callDuration)}
            </Badge>
          </div>
        </div>

        {/* Call Controls */}
        <div className="flex items-center space-x-2">
          <Button
            variant={isMuted ? "destructive" : "outline"}
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm">
            <Video className="h-4 w-4" />
          </Button>
          <Button 
            variant={isCallActive ? "destructive" : "default"} 
            size="sm"
            onClick={() => setIsCallActive(!isCallActive)}
          >
            <PhoneCall className="h-4 w-4" />
            {isCallActive ? 'End Call' : 'Start Call'}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Left Sidebar - Quick Actions */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products, pricing..."
                  className="pl-9 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <FileText className="mr-2 h-3 w-3" />
                  ML Course Pricing
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Users className="mr-2 h-3 w-3" />
                  Team Discounts
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  <Target className="mr-2 h-3 w-3" />
                  Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Talking Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {talkingPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Lightbulb className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Call Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Rapport Building</span>
                  <span>✓</span>
                </div>
                <Progress value={100} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Discovery</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Solution Presentation</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="insights" className="space-y-4">
            <TabsList>
              <TabsTrigger value="insights">Real-time Insights</TabsTrigger>
              <TabsTrigger value="products">Product Info</TabsTrigger>
              <TabsTrigger value="objections">Objection Handling</TabsTrigger>
              <TabsTrigger value="transcript">Live Transcript</TabsTrigger>
            </TabsList>

            <TabsContent value="insights">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Live Call Analysis
                    </CardTitle>
                    <CardDescription>
                      AI-powered insights based on conversation flow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">85%</div>
                        <div className="text-xs text-muted-foreground">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">Medium</div>
                        <div className="text-xs text-muted-foreground">Buying Intent</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">3</div>
                        <div className="text-xs text-muted-foreground">Pain Points</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {realtimeInsights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border">
                          <div className="flex-shrink-0 mt-0.5">
                            {insight.type === 'positive' && (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            )}
                            {insight.type === 'question' && (
                              <MessageSquare className="h-4 w-4 text-blue-500" />
                            )}
                            {insight.type === 'concern' && (
                              <AlertCircle className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{insight.text}</p>
                            <p className="text-xs text-muted-foreground">{insight.timestamp}</p>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Send className="mr-2 h-4 w-4" />
                        Send pricing proposal for team of 8
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Schedule technical demo
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Share success case study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="space-y-4">
                {mockProducts.slice(0, 2).map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </div>
                        <Button size="sm" variant="outline">
                          <Copy className="mr-1 h-3 w-3" />
                          Copy Info
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Key Benefits</h5>
                        <div className="grid grid-cols-2 gap-1">
                          {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="text-sm flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm mb-2">Pricing (Team of 8)</h5>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-lg font-bold">₹{(product.pricing.enterprise * 0.9).toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Per person (10% team discount)</p>
                          </div>
                          <div>
                            <p className="text-sm text-green-600 font-medium">Save ₹{(product.pricing.enterprise * 8 * 0.1).toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">vs individual pricing</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Mention This Product
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Send Brochure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="objections">
              <div className="space-y-4">
                {[
                  {
                    objection: "The price seems high for our budget",
                    response: "I understand budget is important. Let me show you the ROI calculation - most companies see 300% return within 12 months through improved productivity and reduced hiring costs.",
                    timing: "When price is mentioned"
                  },
                  {
                    objection: "We don't have time for extensive training",
                    response: "That's exactly why our program is designed for working professionals. Your team can complete it in just 2-3 hours per week, and we provide all materials for self-paced learning.",
                    timing: "When time is a concern"
                  },
                  {
                    objection: "How do we know this will work for our team?",
                    response: "Great question! I can share a case study from a similar tech company that increased their ML deployment speed by 60% after completing our program. Would you like me to send that over?",
                    timing: "When asking for proof"
                  }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-sm text-red-600">
                            "{item.objection}"
                          </CardTitle>
                          <CardDescription className="text-xs">
                            {item.timing}
                          </CardDescription>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                        <p className="text-sm text-green-800">{item.response}</p>
                      </div>
                      <Button size="sm" className="mt-2">
                        Use This Response
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transcript">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Live Transcript
                  </CardTitle>
                  <CardDescription>
                    Real-time conversation transcription with speaker identification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {[
                      { speaker: 'Rohan Verma', time: '08:30', text: "Thanks for taking the time to speak with me today. I'm excited to learn more about your ML training programs." },
                      { speaker: 'You', time: '08:32', text: "Absolutely! I'm excited to help your team enhance their machine learning capabilities. Can you tell me about your current team size and their experience level?" },
                      { speaker: 'Rohan Verma', time: '08:45', text: "We have about 8 engineers, most with 3-5 years of experience in traditional software development, but limited ML exposure." },
                      { speaker: 'You', time: '08:50', text: "That's perfect for our program. Our ML Mastery course is designed specifically for experienced developers transitioning to ML." },
                      { speaker: 'Rohan Verma', time: '09:15', text: "What's the timeline for completion? We're working on tight project deadlines." },
                      { speaker: 'You', time: '09:18', text: "The program is 6 months long, but it's completely flexible. Your team can learn at their own pace, typically 2-3 hours per week." },
                    ].map((message, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Badge variant={message.speaker === 'You' ? 'default' : 'secondary'} className="text-xs">
                          {message.speaker}
                        </Badge>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Recording in progress...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
