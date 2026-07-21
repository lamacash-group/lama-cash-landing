import { type SchemaTypeDefinition } from 'sanity'
import {blog} from "@/sanity/schemaTypes/blog";
import {customImage} from "@/sanity/schemaTypes/customImage";
import {statsColumns} from "@/sanity/schemaTypes/statsColumn";
import {imageWithQuote} from "@/sanity/schemaTypes/imageWithQuote";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    customImage,
    statsColumns,
    imageWithQuote,
  ],
}
