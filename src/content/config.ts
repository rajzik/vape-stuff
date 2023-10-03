import { z, defineCollection } from 'astro:content';

const schema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().transform((date) => new Date(date)),
  isDraft: z.boolean().default(false),
});

export type Data = z.infer<typeof schema>;

defineCollection({
  schema: schema,
});
