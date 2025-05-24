import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProspects, mockProducts, mockPitchSuggestions } from "@/lib/mock-data";
import { 
  Search, 
  User, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  Target,
  TrendingUp,
  MessageSquare,
  CheckCircle2,
  Clock,
  Star
} from "lucide-react";

export function PreCallPreparation() {
  const prospect = mockProspects[0]; // John Doe example
  const suggestedProducts = mockProducts.slice(0, 2);
  const pitchSuggestions = mockPitchSuggestions;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Pre-Call Preparation</h1>
          <p className="text-muted-foreground">
            Get ready for your upcoming call with comprehensive prospect research and AI-generated insights
          </p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Call
        </Button>
      </div>

      {/* Prospect Search */}
      <Card>
        <CardHeader>
          <CardTitle>Select Prospect</CardTitle>
          <CardDescription>Choose a prospect to prepare for your call</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search prospects by name, company, or email..."
              className="pl-9"
              defaultValue={prospect.name}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Prospect Information */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Prospect Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/avatars/${prospect.name.toLowerCase().replace(' ', '-')}.jpg`} />
                  <AvatarFallback>
                    {prospect.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{prospect.name}</p>
                  <p className="text-sm text-muted-foreground">{prospect.position}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{prospect.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{prospect.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{prospect.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{prospect.budget}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Status</p>
                <Badge variant={
                  prospect.status === 'qualified' ? 'default' :
                  prospect.status === 'proposal' ? 'secondary' : 'outline'
                }>
                  {prospect.status}
                </Badge>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Interests</p>
                <div className="flex flex-wrap gap-1">
                  {prospect.interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Pain Points</p>
                <div className="flex flex-wrap gap-1">
                  {prospect.painPoints.map((pain, index) => (
                    <Badge key={index} variant="destructive" className="text-xs">
                      {pain}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Call Preparation Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { task: "Review prospect profile", completed: true },
                  { task: "Research company background", completed: true },
                  { task: "Identify relevant products", completed: false },
                  { task: "Prepare opening pitch", completed: false },
                  { task: "Review pricing options", completed: false },
                  { task: "Set call objectives", completed: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 ${item.completed ? 'text-green-500' : 'text-muted-foreground'}`}>
                      {item.completed ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Complete Checklist
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="research" className="space-y-6">
            <TabsList>
              <TabsTrigger value="research">Company Research</TabsTrigger>
              <TabsTrigger value="products">Product Recommendations</TabsTrigger>
              <TabsTrigger value="pitches">AI Pitch Suggestions</TabsTrigger>
              <TabsTrigger value="objections">Objection Handling</TabsTrigger>
            </TabsList>

            <TabsContent value="research">
              <Card>
                <CardHeader>
                  <CardTitle>Company Research: {prospect.company}</CardTitle>
                  <CardDescription>
                    Key insights and recent developments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Company Overview</h4>
                    <p className="text-sm text-muted-foreground">
                      {prospect.company} is a technology company with {prospect.companySize} employees 
                      in the {prospect.industry} industry. They are actively looking to upskill their 
                      engineering team to stay competitive in the market.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Recent News</h4>
                    <div className="space-y-2">
                      <div className="border-l-2 border-blue-500 pl-3">
                        <p className="text-sm font-medium">Secured Series B Funding</p>
                        <p className="text-xs text-muted-foreground">2 weeks ago</p>
                      </div>
                      <div className="border-l-2 border-green-500 pl-3">
                        <p className="text-sm font-medium">Launched New AI Product Line</p>
                        <p className="text-xs text-muted-foreground">1 month ago</p>
                      </div>
                      <div className="border-l-2 border-orange-500 pl-3">
                        <p className="text-sm font-medium">Expanded Engineering Team</p>
                        <p className="text-xs text-muted-foreground">6 weeks ago</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                        <Badge key={index} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <div className="space-y-4">
                {suggestedProducts.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">
                          Recommended
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Why This Fits</h5>
                        <p className="text-sm text-muted-foreground">
                          Based on {prospect.name}'s interests in {prospect.interests.join(', ')} and 
                          their company's recent AI initiatives, this course aligns perfectly with their upskilling needs.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Key Features</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Pricing</h5>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-lg font-bold">₹{product.pricing.premium.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Per person (Premium)</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-green-600">₹{product.pricing.enterprise.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Team of 8+ (Enterprise)</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">
                        Add to Call Discussion
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pitches">
              <div className="space-y-4">
                {pitchSuggestions.map((pitch) => (
                  <Card key={pitch.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-sm">
                            {pitch.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </CardTitle>
                          <CardDescription>{pitch.context}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{pitch.effectiveness}/10</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-3 rounded-lg mb-3">
                        <p className="text-sm">{pitch.content}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Used {pitch.usageCount} times</span>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Use This Pitch
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
                    objection: "Budget is too high",
                    response: "I understand budget is a concern. Let me show you the ROI other companies like yours have achieved. We also offer flexible payment plans and team discounts.",
                    effectiveness: 8.2
                  },
                  {
                    objection: "We don't have time for training",
                    response: "Our flexible learning format allows your team to learn at their own pace. Most complete the program in just 2-3 hours per week over 6 months.",
                    effectiveness: 7.5
                  },
                  {
                    objection: "We need to think about it",
                    response: "I completely understand. What specific concerns can I address to help you make the best decision for your team?",
                    effectiveness: 8.8
                  }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-sm text-red-600">
                          "{item.objection}"
                        </CardTitle>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{item.effectiveness}/10</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                        <p className="text-sm text-green-800">{item.response}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
