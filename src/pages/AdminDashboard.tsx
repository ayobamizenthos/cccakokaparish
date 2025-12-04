import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import {
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react';
import {
  getBlogPosts,
  getNewsItems,
  getEvents,
  getFeedback,
  updateFeedbackStatus,
  getFeedbackStats,
  BlogPost,
  NewsItem,
  Event,
  Feedback
} from '../lib/cms';
import { trackAdminAction } from '../lib/analytics';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [feedbackStats, setFeedbackStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [posts, news, eventList, feedbackList, stats] = await Promise.all([
        getBlogPosts(),
        getNewsItems(),
        getEvents(),
        getFeedback(),
        getFeedbackStats()
      ]);

      setBlogPosts(posts);
      setNewsItems(news);
      setEvents(eventList);
      setFeedback(feedbackList);
      setFeedbackStats(stats);
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackStatusUpdate = async (id: string, status: Feedback['status']) => {
    try {
      await updateFeedbackStatus(id, status);
      trackAdminAction('update_feedback_status', { feedbackId: id, status });
      fetchData();
    } catch (error) {
      console.error('Failed to update feedback status:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your church website content and feedback</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{blogPosts.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {blogPosts.filter(p => p.status === 'published').length} published
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">News Items</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{newsItems.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {newsItems.filter(n => n.status === 'published').length} published
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {events.filter(e => e.status === 'upcoming').length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {events.filter(e => e.status === 'ongoing').length} ongoing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Feedback</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{feedbackStats?.total || 0}</div>
                  <p className="text-xs text-muted-foreground">
                    {feedbackStats?.new || 0} new messages
                  </p>
                </CardContent>
              </Card>
            </div>

            {feedbackStats && (
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{feedbackStats.new}</div>
                      <div className="text-sm text-gray-600">New</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{feedbackStats.reviewed}</div>
                      <div className="text-sm text-gray-600">Reviewed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{feedbackStats.responded}</div>
                      <div className="text-sm text-gray-600">Responded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-600">{feedbackStats.closed}</div>
                      <div className="text-sm text-gray-600">Closed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Blog Posts</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author || '-'}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status || 'draft'}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.publishedAt?.toDate().toLocaleDateString() || '-'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <h2 className="text-2xl font-bold">Feedback Management</h2>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feedback.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Badge variant="outline">{item.type}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{item.subject}</TableCell>
                      <TableCell>{item.name || 'Anonymous'}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === 'new' ? 'destructive' :
                            item.status === 'reviewed' ? 'default' :
                            item.status === 'responded' ? 'secondary' : 'outline'
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.submittedAt.toDate().toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>{item.subject}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label>Type:</Label>
                                  <p className="text-sm text-gray-600">{item.type}</p>
                                </div>
                                <div>
                                  <Label>Message:</Label>
                                  <p className="text-sm">{item.message}</p>
                                </div>
                                {item.name && (
                                  <div>
                                    <Label>Name:</Label>
                                    <p className="text-sm">{item.name}</p>
                                  </div>
                                )}
                                {item.email && (
                                  <div>
                                    <Label>Email:</Label>
                                    <p className="text-sm">{item.email}</p>
                                  </div>
                                )}
                                <div>
                                  <Label>Status:</Label>
                                  <Select
                                    value={item.status}
                                    onValueChange={(value) => handleFeedbackStatusUpdate(item.id!, value as Feedback['status'])}
                                  >
                                    <SelectTrigger className="w-32">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="new">New</SelectItem>
                                      <SelectItem value="reviewed">Reviewed</SelectItem>
                                      <SelectItem value="responded">Responded</SelectItem>
                                      <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Placeholder tabs for news and events */}
          <TabsContent value="news" className="space-y-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">News Management</h2>
              <p className="text-gray-600">News management interface coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Events Management</h2>
              <p className="text-gray-600">Events management interface coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;