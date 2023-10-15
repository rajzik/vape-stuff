import { defineCollection, z, type SchemaContext } from 'astro:content';

const liquidSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().transform((date) => new Date(date)),
    isDraft: z.boolean().default(false),
    image: image().optional(),
    flavors: z.array(z.string()).default([]),
    type: z
      .array(z.enum(['tobacco', 'fruit', 'sweats', 'drinks', 'other']))
      .default([]),
    rating: z.number().min(1).max(10),
  });

export type LiquidCollectionData = z.infer<ReturnType<typeof liquidSchema>>;

export const collections = {
  liquids: defineCollection({
    schema: liquidSchema,
  }),
};
