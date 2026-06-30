import { type SchemaTypeDefinition } from 'sanity'
import {blog} from "@/sanity/schemaTypes/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
