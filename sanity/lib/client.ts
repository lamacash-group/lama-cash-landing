import {createClient, groq} from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export async function getBlogs(locale: string) {
  const query = groq`*[_type == "blog"] {
    _id,
    "title": title[$locale],
    "text": text[$locale]
  }`

  // Передаем locale как переменную в запрос
  return client.fetch(query, { locale });
}