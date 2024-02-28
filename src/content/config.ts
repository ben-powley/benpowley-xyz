import { z, defineCollection } from 'astro:content';

const experienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        companyName: z.string(),
        jobTitle: z.string(),
        start: z.string(),
        end: z.optional(z.string()),
        isCurrent: z.boolean(),
    })
});

export const collections = {
  'experience': experienceCollection,
};