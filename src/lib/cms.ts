// --- MASTER CMS MOCK FILE ---
// This file satisfies all imports to prevent build crashes.

// Types
export interface BlogPost { id: string; title: string; slug: string; }
export interface NewsItem { id: string; title: string; }
export interface Event { id: string; title: string; }

// Blog Functions
export const getBlogPosts = async () => { return []; };
export const getBlogPost = async () => { return null; };
export const getBlogPostBySlug = async (slug: string) => { return null; };

// Admin/Feedback Functions
export const getFeedback = async () => { return []; };
export const updateFeedbackStatus = async () => { return true; };
export const getFeedbackStats = async () => { return { total: 0, pending: 0, resolved: 0 }; };

// News & Events Functions
export const getNewsItems = async () => { return []; };
export const getEvents = async () => { return []; };

// Search Function
export const searchContent = async (query: string) => { return { posts: [], news: [], events: [] }; };