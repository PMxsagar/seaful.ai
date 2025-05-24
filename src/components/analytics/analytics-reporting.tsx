"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Phone, 
  Target, 
  DollarSign,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  Activity
} from 'lucide-react';
import { mockPerformance, generateMockCalls } from '@/lib/mock-data';

const AnalyticsReporting = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Generate mock analytics data
  const callsData = [
    { name: 'Mon', calls: 8, conversions: 2, revenue: 45000 },
    { name: 'Tue', calls: 12, conversions: 3, revenue: 67000 },
    { name: 'Wed', calls: 10, conversions: 4, revenue: 89000 },
    { name: 'Thu', calls: 15, conversions: 5, revenue: 92000 },
    { name: 'Fri', calls: 11, conversions: 3, revenue: 76000 },
    { name: 'Sat', calls: 6, conversions: 1, revenue: 34000 },
    { name: 'Sun', calls: 4, conversions: 1, revenue: 23000 },
  ];

  const conversionData = [
    { name: 'Inbound', value: 35, count: 45 },
    { name: 'Outbound', value: 22, count: 78 },
    { name: 'Demo', value: 65, count: 23 },
    { name: 'Follow-up', value: 28, count: 34 },
  ];

  const productPerformance = [
    { name: 'ML Mastery', sales: 12, revenue: 480000, conversion: 25 },
    { name: 'Leadership Program', sales: 8, revenue: 200000, conversion: 32 },
    { name: 'Data Science', sales: 15, revenue: 675000, conversion: 28 },
    { name: 'Cloud Computing', sales: 6, revenue: 210000, conversion: 18 },
    { name: 'DevOps Bootcamp', sales: 10, revenue: 350000, conversion: 22 },
  ];

  const monthlyTrends = [
    { month: 'Jan', calls: 156, deals: 23, revenue: 920000 },
    { month: 'Feb', calls: 142, deals: 28, revenue: 1120000 },
    { month: 'Mar', calls: 168, deals: 31, revenue: 1240000 },
    { month: 'Apr', calls: 134, deals: 25, revenue: 1050000 },
    { month: 'May', calls: 189, deals: 35, revenue: 1400000 },
    { month: 'Jun', calls: 176, deals: 32, revenue: 1280000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const kpiData = [
    {
      title: 'Total Revenue',
      value: '₹28.5L',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Calls Completed',
      value: '342',
      change: '+8.2%',
      trend: 'up',
      icon: Phone,
      color: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '24.5%',
      change: '-2.1%',
      trend: 'down',
      icon: Target,
      color: 'text-orange-600'
    },
    {
      title: 'Active Prospects',
      value: '89',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics & Reporting</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="flex gap-2">
        {['7d', '30d', '90d', '1y'].map((range) => (
          <Button
            key={range}
            variant={dateRange === range ? 'default' : 'outline'}
            size="sm"
            onClick={() => setDateRange(range)}
          >
            {range}
          </Button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold">{kpi.value}</p>
                    <div className="flex items-center mt-2">
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <Icon className={`h-8 w-8 ${kpi.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="calls">Call Analytics</TabsTrigger>
          <TabsTrigger value="products">Product Performance</TabsTrigger>
          <TabsTrigger value="agents">Agent Performance</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Daily Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={callsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="calls" fill="#8884d8" name="Calls" />
                    <Bar dataKey="conversions" fill="#82ca9d" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5" />
                  Call Type Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={conversionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {conversionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${(Number(value) / 100000).toFixed(1)}L`, 'Revenue']} />
                  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calls" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Call Volume by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm text-gray-600">{item.count} calls</span>
                      </div>
                      <Progress value={item.value} className="h-2" />
                      <div className="text-xs text-gray-500">
                        {item.value}% conversion rate
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Successful</span>
                    <Badge className="bg-green-100 text-green-800">68</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Follow-up Needed</span>
                    <Badge className="bg-yellow-100 text-yellow-800">42</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">No Interest</span>
                    <Badge className="bg-red-100 text-red-800">23</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Missed</span>
                    <Badge className="bg-gray-100 text-gray-800">15</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Average Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Call Duration</span>
                      <span className="font-semibold">24.5 min</span>
                    </div>
                    <Progress value={75} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Response Rate</span>
                      <span className="font-semibold">68%</span>
                    </div>
                    <Progress value={68} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Callback Rate</span>
                      <span className="font-semibold">42%</span>
                    </div>
                    <Progress value={42} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Satisfaction</span>
                      <span className="font-semibold">8.4/10</span>
                    </div>
                    <Progress value={84} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={productPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'revenue') return [`₹${(Number(value) / 100000).toFixed(1)}L`, 'Revenue'];
                    return [value, name];
                  }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="sales" fill="#8884d8" name="Sales Count" />
                  <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productPerformance
                    .sort((a, b) => b.revenue - a.revenue)
                    .slice(0, 3)
                    .map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} sales</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{(product.revenue / 100000).toFixed(1)}L</p>
                        <p className="text-sm text-gray-600">{product.conversion}% conversion</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rates by Product</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productPerformance
                    .sort((a, b) => b.conversion - a.conversion)
                    .map((product, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{product.name}</span>
                        <span className="text-sm text-gray-600">{product.conversion}%</span>
                      </div>
                      <Progress value={product.conversion} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Sagar Dewale', calls: 45, conversions: 12, revenue: 480000 },
                    { name: 'Priya Sharma', calls: 38, conversions: 10, revenue: 420000 },
                    { name: 'Rahul Kumar', calls: 52, conversions: 9, revenue: 380000 },
                    { name: 'Neha Patel', calls: 41, conversions: 11, revenue: 450000 },
                  ].map((agent, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm text-gray-600">
                          {agent.calls} calls • {agent.conversions} conversions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{(agent.revenue / 100000).toFixed(1)}L</p>
                        <p className="text-sm text-gray-600">
                          {((agent.conversions / agent.calls) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Call Duration</span>
                      <span className="font-semibold">25.3 min</span>
                    </div>
                    <Progress value={76} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Team Conversion Rate</span>
                      <span className="font-semibold">24.5%</span>
                    </div>
                    <Progress value={25} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Customer Satisfaction</span>
                      <span className="font-semibold">8.4/10</span>
                    </div>
                    <Progress value={84} className="h-2 mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Follow-up Rate</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <Progress value={92} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-gold-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Sagar hit monthly target</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Team exceeded conversion goal</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Record customer satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">New revenue milestone</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Monthly Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'revenue') return [`₹${(Number(value) / 100000).toFixed(1)}L`, 'Revenue'];
                    return [value, name];
                  }} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="calls" stroke="#8884d8" name="Calls" />
                  <Line yAxisId="left" type="monotone" dataKey="deals" stroke="#82ca9d" name="Deals" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#ffc658" name="Revenue" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Growth Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-700">Revenue Growth</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      +28% increase over last quarter
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-700">Call Volume</span>
                    </div>
                    <p className="text-sm text-blue-600 mt-1">
                      +15% increase in monthly calls
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-yellow-700">Conversion Rate</span>
                    </div>
                    <p className="text-sm text-yellow-600 mt-1">
                      -3% decline needs attention
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Next Month Predictions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Expected Calls</span>
                        <span className="font-medium">185</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Projected Revenue</span>
                        <span className="font-medium">₹14.2L</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Estimated Deals</span>
                        <span className="font-medium">38</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Confidence Levels</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Revenue Forecast</span>
                        <Badge className="bg-green-100 text-green-800">High (85%)</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Call Volume</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Medium (72%)</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Conversion Rate</span>
                        <Badge className="bg-red-100 text-red-800">Low (58%)</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsReporting;
