import {createClient, groq} from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export async function getBlogs(locale: string) {
  const query = groq`*[_type == "blog" && defined(slug.current)] {
    _id,
    "title": title[$locale],
    "description": description[$locale],
    "content": content[$locale],
    slug,
    mainImage,
  }`

  return client.fetch(query, { locale });
}

export async function getBlogBySlug(slug: string, locale: string) {
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    _id,
    "title": title[$locale],
    "content": content[$locale],
    slug
  }`
  return client.fetch(query, { slug, locale });
}

