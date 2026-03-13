export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

export const blogCategories = [
  'All',
  'Cox Technique',
  'Dry Needling',
  'Rehabilitation',
  'Manual Therapy',
  'Cupping Therapy',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-cox-technique-spinal-decompression',
    title: 'What Is the Cox Technique? A Guide to Non-Surgical Spinal Decompression',
    excerpt: 'Learn how Cox Technique flexion-distraction therapy provides gentle, effective relief for disc herniations, sciatica, and spinal stenosis without surgery.',
    category: 'Cox Technique',
    date: '2025-03-10',
    readTime: '5 min read',
    content: [
      'If you suffer from lower back pain, sciatica, or a herniated disc, you may have been told that surgery is your only option. But there is a proven, non-surgical alternative that has helped thousands of patients find relief: the Cox Technique.',
      'The Cox Technique, also known as Cox Flexion-Distraction, is a gentle, hands-on spinal manipulation performed on a specialized table. The technique uses a slow, rhythmic pumping motion to decompress the spinal discs, reduce pressure on spinal nerves, and restore proper joint mechanics.',
      'How Does It Work? During a Cox Technique session, you lie face-down on a segmented treatment table. Dr. Authement applies gentle pressure while the lower portion of the table moves in a controlled, rhythmic motion. This creates a negative pressure within the disc, which helps retract herniated or bulging disc material away from the nerve. The result is reduced inflammation, improved range of motion, and significant pain relief.',
      'What Conditions Does Cox Technique Treat? The Cox Technique is highly effective for a range of spinal conditions including: disc herniations and bulges, sciatica and radiculopathy, spinal stenosis, degenerative disc disease, facet joint syndrome, and spondylolisthesis. Research shows that Cox Technique can reduce intradiscal pressure by as much as -192 mmHg, creating a vacuum effect that promotes disc healing.',
      'What to Expect During Treatment: Most patients experience noticeable relief within the first few sessions. A typical treatment plan involves 2-3 visits per week for 4-6 weeks, depending on the severity of your condition. Each session lasts approximately 15-20 minutes and is completely painless. Many patients describe the treatment as relaxing.',
      'At Active Chiropractic & Rehab, Dr. Logan Authement is a certified Cox Technique provider with specialized training in this evidence-based approach. If you are dealing with back pain, neck pain, or sciatica, schedule a consultation to find out if Cox Technique is right for you.',
    ],
  },
  {
    slug: 'neurodynamic-dry-needling-explained',
    title: 'Neurodynamic Dry Needling: How It Works and What It Treats',
    excerpt: 'Discover how neurodynamic dry needling targets trigger points to release muscle tension, reduce chronic pain, and accelerate your recovery.',
    category: 'Dry Needling',
    date: '2025-03-05',
    readTime: '4 min read',
    content: [
      'Dry needling is one of the most effective tools in modern musculoskeletal care, yet many people have never heard of it or confuse it with acupuncture. At Active Chiropractic & Rehab, we use neurodynamic dry needling to treat a wide variety of pain conditions with precision and speed.',
      'What Is Dry Needling? Dry needling involves inserting thin, sterile monofilament needles into myofascial trigger points—tight, painful knots in your muscles that refer pain to other areas of the body. The term "dry" simply means no medication is injected. The needle itself creates a local twitch response that releases the trigger point, reduces muscle tension, and restores normal tissue function.',
      'Dry Needling vs. Acupuncture: While both use thin needles, the similarity ends there. Acupuncture is rooted in traditional Chinese medicine and focuses on energy meridians. Dry needling is based on Western medicine, anatomy, and neurophysiology. It specifically targets musculoskeletal dysfunction using evidence-based protocols.',
      'What Conditions Respond Well to Dry Needling? Dry needling is effective for: neck and back pain, tension headaches and migraines, shoulder impingement and rotator cuff issues, tennis and golfer\'s elbow, hip and knee pain, plantar fasciitis, TMJ dysfunction, and sports injuries. It is especially powerful when combined with other treatments like chiropractic adjustments and rehabilitation exercises.',
      'What Does It Feel Like? Most patients feel a brief, mild cramping sensation when the trigger point releases—this is the therapeutic twitch response and is actually a good sign. After treatment, you may experience mild soreness similar to a post-workout feeling, which typically resolves within 24-48 hours.',
      'At Active Chiropractic & Rehab, Dr. Authement combines neurodynamic dry needling with comprehensive chiropractic care to address the full picture of your pain. Contact us to learn if dry needling can help you get back to doing what you love.',
    ],
  },
  {
    slug: 'performance-rehabilitation-return-to-sport',
    title: 'Performance Rehabilitation: Getting You Back to Training and Sport',
    excerpt: 'Learn how evidence-based rehabilitation helps athletes and active individuals recover from injury and return to peak performance with confidence.',
    category: 'Rehabilitation',
    date: '2025-02-28',
    readTime: '5 min read',
    content: [
      'Whether you are a competitive athlete, a weekend warrior, or simply someone who wants to stay active, injuries can sideline your goals and impact your quality of life. At Active Chiropractic & Rehab, our performance rehabilitation program is designed to get you back to what you love—stronger and more resilient than before.',
      'What Is Performance Rehabilitation? Performance rehabilitation goes beyond traditional physical therapy. It focuses not just on reducing pain, but on restoring full function, strength, and movement quality. Using targeted exercises, neuromuscular training, and progressive loading protocols, we address the root cause of your dysfunction—not just the symptoms.',
      'Our Approach: Every rehabilitation plan at Active Chiropractic & Rehab is individualized. We start with a thorough assessment of your movement patterns, strength deficits, and functional limitations. From there, we design a progressive program that takes you from pain and dysfunction back to full performance. Our rehabilitation process includes: movement screening and functional assessment, corrective exercises targeting specific weaknesses, neuromuscular re-education for proper movement patterns, progressive strength and conditioning, sport-specific training and return-to-play protocols.',
      'Who Benefits from Performance Rehabilitation? Our rehab programs are designed for anyone dealing with: recurring injuries that keep coming back, post-surgical recovery (ACL, rotator cuff, spine surgery), chronic pain that has not responded to passive treatments, athletes looking to prevent injury and optimize performance, and weekend warriors wanting to stay active without pain.',
      'The key difference between our approach and traditional rehab is that we do not just get you to "pain-free"—we build you back to full capacity so the injury does not return. We combine rehabilitation with our other specialty services like Cox Technique, dry needling, and manual therapy to accelerate your recovery.',
      'At Active Chiropractic & Rehab, we believe that active in faith, active in fitness, and active in life starts with a body that moves well and feels strong. Schedule a consultation to start your personalized rehabilitation plan today.',
    ],
  },
];
