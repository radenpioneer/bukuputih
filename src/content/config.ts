import { defineCollection, z } from 'astro:content'

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        image: image().optional(),
        tags: z
          .array(
            z.object({
              name: z.string(),
              slug: z.string(),
            })
          )
          .optional(),
        draft: z.boolean(),
        hidden: z.boolean().optional(),
      }),
  }),

  site: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        logo: image(),
        menu: z.array(
          z.object({
            name: z.string(),
            slug: z.string(),
          })
        ),
      }),
  }),
}
