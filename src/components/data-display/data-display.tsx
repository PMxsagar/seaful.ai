"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Phone,
  Mail,
  Calendar,
  Building,
  User,
  Target,
  Star,
  MoreHorizontal
} from 'lucide-react';
import { Prospect, Call, ActionItem, Product } from '@/lib/types';
import { mockProspects, mockCalls, mockProducts, generateMockCalls } from '@/lib/mock-data';

const DataDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('prospects');
  const [filterStatus, setFilterStatus] = useState('all');

  // Generate additional mock data for demonstration
  const allCalls = [...mockCalls, ...generateMockCalls(10)];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'proposal': return 'bg-blue-100 text-blue-800';
      case 'negotiation': return 'bg-yellow-100 text-yellow-800';
      case 'cold': return 'bg-gray-100 text-gray-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'missed': return 'bg-red-100 text-red-800';
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

  const filteredProspects = mockProspects.filter(prospect => {
    const matchesSearch = prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prospect.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prospect.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || prospect.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const filteredCalls = allCalls.filter(call => {
    const prospect = mockProspects.find(p => p.id === call.prospectId);
    const matchesSearch = prospect?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prospect?.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         call.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || call.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const ProspectsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Industry</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Contact</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredProspects.map((prospect) => (
          <TableRow key={prospect.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{prospect.name}</p>
                  <p className="text-sm text-gray-600">{prospect.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-gray-400" />
                <span>{prospect.company}</span>
              </div>
            </TableCell>
            <TableCell>{prospect.position}</TableCell>
            <TableCell>{prospect.industry}</TableCell>
            <TableCell>{prospect.budget}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(prospect.status)}>
                {prospect.status}
              </Badge>
            </TableCell>
            <TableCell>{prospect.lastContact?.toLocaleDateString()}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const CallsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prospect</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Conversion</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredCalls.map((call) => {
          const prospect = mockProspects.find(p => p.id === call.prospectId);
          return (
            <TableRow key={call.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{prospect?.name}</p>
                  <p className="text-sm text-gray-600">{prospect?.company}</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{call.type}</Badge>
              </TableCell>
              <TableCell>
                {call.duration ? (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{call.duration}m</span>
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(call.status)}>
                  {call.status}
                </Badge>
              </TableCell>
              <TableCell>
                {call.rating ? (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{call.rating}/10</span>
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </TableCell>
              <TableCell>{call.startTime?.toLocaleDateString()}</TableCell>
              <TableCell>
                {call.conversionLikelihood && (
                  <Badge className={
                    call.conversionLikelihood === 'high' ? 'bg-green-100 text-green-800' :
                    call.conversionLikelihood === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {call.conversionLikelihood}
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );

  const ProductsTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Basic Price</TableHead>
          <TableHead>Premium Price</TableHead>
          <TableHead>Enterprise Price</TableHead>
          <TableHead>Target Audience</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockProducts.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{product.category}</Badge>
            </TableCell>
            <TableCell>{product.duration}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span>₹{product.pricing.basic.toLocaleString()}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span>₹{product.pricing.premium.toLocaleString()}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span>₹{product.pricing.enterprise.toLocaleString()}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {product.targetAudience.slice(0, 2).map((audience, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {audience}
                  </Badge>
                ))}
                {product.targetAudience.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{product.targetAudience.length - 2}
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Target className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Data Management</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="prospects">Prospects</TabsTrigger>
          <TabsTrigger value="calls">Calls</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        {/* Search and Filter Controls */}
        <div className="flex gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('all')}
            >
              All
            </Button>
            {selectedTab === 'prospects' && (
              <>
                <Button
                  variant={filterStatus === 'qualified' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('qualified')}
                >
                  Qualified
                </Button>
                <Button
                  variant={filterStatus === 'proposal' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('proposal')}
                >
                  Proposal
                </Button>
                <Button
                  variant={filterStatus === 'cold' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('cold')}
                >
                  Cold
                </Button>
              </>
            )}
            {selectedTab === 'calls' && (
              <>
                <Button
                  variant={filterStatus === 'completed' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('completed')}
                >
                  Completed
                </Button>
                <Button
                  variant={filterStatus === 'scheduled' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('scheduled')}
                >
                  Scheduled
                </Button>
                <Button
                  variant={filterStatus === 'missed' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('missed')}
                >
                  Missed
                </Button>
              </>
            )}
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        <TabsContent value="prospects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prospects ({filteredProspects.length})</CardTitle>
              <CardDescription>
                Manage your prospect database and track lead information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <ProspectsTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calls" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calls ({filteredCalls.length})</CardTitle>
              <CardDescription>
                View and manage all your sales calls and their outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <CallsTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Products ({mockProducts.length})</CardTitle>
              <CardDescription>
                Manage your product catalog and pricing information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <ProductsTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Prospects</p>
                <p className="text-2xl font-bold">{mockProspects.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Calls</p>
                <p className="text-2xl font-bold">{allCalls.length}</p>
              </div>
              <Phone className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Products</p>
                <p className="text-2xl font-bold">{mockProducts.length}</p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold">24.5%</p>
              </div>
              <div className="h-8 w-8 text-orange-600">₹</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataDisplay;
