// --- MASTER CMS MOCK FILE ---
// This file satisfies all imports to prevent build crashes.

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  author?: string;
  status?: 'draft' | 'published';
  publishedAt?: { toDate: () => Date };
}

export interface NewsItem {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  category?: string;
  status?: 'draft' | 'published';
  publishedAt?: { toDate: () => Date };
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  category?: string;
  status?: 'upcoming' | 'ongoing' | 'past';
  date?: { toDate: () => Date };
}

export interface Feedback {
  id?: string;
  type: string;
  subject: string;
  message: string;
  name?: string;
  email?: string;
  status: 'new' | 'reviewed' | 'responded' | 'closed';
  submittedAt: { toDate: () => Date };
}

// Blog Functions
export const getBlogPosts = async (_status?: string): Promise<BlogPost[]> => { return []; };
export const getBlogPost = async (_id?: string): Promise<BlogPost | null> => { return null; };
export const getBlogPostBySlug = async (_slug: string): Promise<BlogPost | null> => { return null; };
export const createBlogPost = async (_post: Partial<BlogPost>): Promise<BlogPost> => { 
  return { id: '', title: '', slug: '' }; 
};
export const updateBlogPost = async (_id: string, _data: Partial<BlogPost>): Promise<boolean> => { return true; };
export const deleteBlogPost = async (_id: string): Promise<boolean> => { return true; };

// Admin/Feedback Functions
export const getFeedback = async (): Promise<Feedback[]> => { return []; };
export const updateFeedbackStatus = async (
  _id: string, 
  _status: Feedback['status'], 
  _response?: string, 
  _respondedBy?: string, 
  _updatedBy?: string
): Promise<boolean> => { return true; };
export const getFeedbackStats = async () => { 
  return { total: 0, pending: 0, resolved: 0, new: 0, reviewed: 0, responded: 0, closed: 0 }; 
};

// News & Events Functions
export const getNewsItems = async (): Promise<NewsItem[]> => { return []; };
export const getEvents = async (): Promise<Event[]> => { return []; };

// Search Function
export const searchContent = async (_query: string): Promise<{ posts: BlogPost[]; news: NewsItem[]; events: Event[] }> => { 
  return { posts: [], news: [], events: [] }; 
};
