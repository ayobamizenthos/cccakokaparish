export interface Sermon {
  id: string;
  title: string;
  bibleReference: string;
  date: string;
  pastor: string;
  youtubeId: string;
  thumbnail: string;
  theme: string;
  summary: string;
  seriesTitle?: string;
  sermonNotesPdf?: string;
  keyTakeaways: string[];
  overview: string;
}

export const sermons: Sermon[] = [
  {
    id: "understanding-the-rapture",
    title: "Understanding the Rapture",
    bibleReference: "1 Thessalonians 4:13-18",
    date: "Sunday, October 6, 2025",
    pastor: "Pastor Emmanuel Adeyemi",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=450&fit=crop",
    theme: "The Second Coming of Christ is meant to comfort our hearts concerning our departed loved ones and our future hope.",
    summary: "Exemplary Faith in a Troubled World",
    seriesTitle: "Exemplary Faith in a Troubled World",
    sermonNotesPdf: "/sermons/understanding-the-rapture.pdf",
    keyTakeaways: [
      "The Rapture is imminent — it can happen at any moment.",
      "There are no signs for the Rapture; Matthew 24 refers to the Second Coming (not the Rapture).",
      "The doctrine of the Rapture is not a modern invention.",
      "The Rapture is meant to bring comfort, holiness, and urgency in evangelism.",
      "Don't be deceived by sensational false prophecies."
    ],
    overview: "In this timely and clear teaching, Pastor Emmanuel breaks down what the Bible says about the Rapture—a vital part of Christian eschatology. We explore the comfort Jesus offers concerning our departed loved ones and our future hope. This message will strengthen your faith and prepare your heart for Christ's return."
  },
  {
    id: "faith-in-troubled-times",
    title: "When Death Brings Doubt, Christ Brings Comfort",
    bibleReference: "1 Thessalonians 4:13-18",
    date: "Sunday, September 21, 2025",
    pastor: "Pastor Emmanuel Adeyemi",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop",
    theme: "Finding peace and hope in Christ when facing grief and loss.",
    summary: "Exemplary Faith in a Troubled World",
    seriesTitle: "Exemplary Faith in a Troubled World",
    sermonNotesPdf: "/sermons/when-death-brings-doubt.pdf",
    keyTakeaways: [
      "Grief is natural, but as believers, we grieve with hope.",
      "Christ's resurrection is the foundation of our comfort.",
      "Death is not the end for those who believe in Jesus.",
      "We will be reunited with our loved ones in Christ."
    ],
    overview: "This powerful message addresses the deep pain of loss and points us to the ultimate source of comfort—Jesus Christ. Through Scripture and pastoral wisdom, we discover how to navigate grief with faith and hope."
  },
  {
    id: "love-governs-lifestyle",
    title: "When Love Governs Your Lifestyle",
    bibleReference: "1 Thessalonians 4:1-12",
    date: "Sunday, September 14, 2025",
    pastor: "Pastor Emmanuel Adeyemi",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=450&fit=crop",
    theme: "Living a life that pleases God through genuine love and holy living.",
    summary: "Exemplary Faith in a Troubled World",
    seriesTitle: "Exemplary Faith in a Troubled World",
    sermonNotesPdf: "/sermons/love-governs-lifestyle.pdf",
    keyTakeaways: [
      "True love for God transforms how we live.",
      "Sexual purity is an act of worship and obedience.",
      "Our lifestyle should reflect Christ's character.",
      "Love for others is demonstrated through our actions."
    ],
    overview: "Discover how authentic love for God should shape every aspect of our daily lives. This sermon challenges us to align our lifestyle with God's will and to express our love through obedience and holy living."
  }
];
