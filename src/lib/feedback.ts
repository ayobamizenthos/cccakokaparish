import { collection, addDoc, getDocs, query, where, orderBy, Timestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface Feedback {
  id?: string;
  type: 'general' | 'bug' | 'feature' | 'prayer' | 'testimony' | 'complaint';
  subject: string;
  message: string;
  name?: string;
  email?: string;
  phone?: string;
  submittedAt: Timestamp;
  status: 'new' | 'reviewed' | 'responded' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  adminNotes?: string;
  response?: string;
  respondedAt?: Timestamp;
  respondedBy?: string;
}

export const submitFeedback = async (feedback: Omit<Feedback, 'id' | 'submittedAt' | 'status'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'feedback'), {
    ...feedback,
    submittedAt: Timestamp.now(),
    status: 'new'
  });
  return docRef.id;
};

export const getFeedback = async (status?: Feedback['status'], type?: Feedback['type']): Promise<Feedback[]> => {
  let q = query(collection(db, 'feedback'), orderBy('submittedAt', 'desc'));

  if (status) {
    q = query(q, where('status', '==', status));
  }

  if (type) {
    q = query(q, where('type', '==', type));
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Feedback));
};

export const updateFeedbackStatus = async (
  id: string,
  status: Feedback['status'],
  adminNotes?: string,
  response?: string,
  respondedBy?: string
): Promise<void> => {
  const updateData: Partial<Feedback> = { status };

  if (adminNotes) updateData.adminNotes = adminNotes;
  if (response) {
    updateData.response = response;
    updateData.respondedAt = Timestamp.now();
    updateData.respondedBy = respondedBy;
  }

  const docRef = doc(db, 'feedback', id);
  await updateDoc(docRef, updateData);
};

export const getFeedbackStats = async (): Promise<{
  total: number;
  new: number;
  reviewed: number;
  responded: number;
  closed: number;
  byType: Record<Feedback['type'], number>;
}> => {
  const allFeedback = await getFeedback();

  const stats = {
    total: allFeedback.length,
    new: allFeedback.filter(f => f.status === 'new').length,
    reviewed: allFeedback.filter(f => f.status === 'reviewed').length,
    responded: allFeedback.filter(f => f.status === 'responded').length,
    closed: allFeedback.filter(f => f.status === 'closed').length,
    byType: {} as Record<Feedback['type'], number>
  };

  const types: Feedback['type'][] = ['general', 'bug', 'feature', 'prayer', 'testimony', 'complaint'];
  types.forEach(type => {
    stats.byType[type] = allFeedback.filter(f => f.type === type).length;
  });

  return stats;
};