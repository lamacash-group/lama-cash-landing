import { groq } from 'next-sanity';
import {client} from "@/sanity/lib/client";

export interface Review {
  _id: string;
  title: string;
  image: {
    asset?: {
      _ref: string;
    };
    alt?: string;
    [key: string]: unknown;
  };
  order: number;
}

export async function getReviews(): Promise<Review[]> {
  const query = groq`*[_type == "review"] | order(order asc) {
    _id,
    title,
    image,
    order
  }`;
  return client.fetch(query);
}
