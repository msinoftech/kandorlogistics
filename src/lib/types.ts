export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  content: string;
  status: string;
  author: string;
  published_at: string;
  updated_at: string;
}

export interface testimonial {
  name: string;
  content: string;
  designation: string;
}

export interface faqItems {
  title: string;
  content: string;
}

export interface whyhire {
  title: string;
  content: string;
  icon: string;
}