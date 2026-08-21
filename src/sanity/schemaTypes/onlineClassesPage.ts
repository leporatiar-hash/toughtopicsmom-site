import { defineField, defineType } from 'sanity'

export const onlineClassesPage = defineType({
  name: 'onlineClassesPage',
  title: 'Online Classes Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      initialValue: 'Online Classes',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero subhead',
      type: 'text',
      rows: 3,
      initialValue:
        'Practical, judgment-free courses to help your family talk about body safety.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero body text',
      type: 'text',
      rows: 4,
      initialValue:
        "Every class is built from what actually works with kids — clear language, age-appropriate boundaries, and real scripts you can use tonight. New classes launch regularly, so check back often.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'classes',
      title: 'Class cards',
      type: 'array',
      description:
        'Shown as a card grid near the top of the page. Drag to reorder — put the free class first.',
      of: [
        {
          type: 'object',
          name: 'classCard',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'One-line description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'coverImage',
              title: 'Cover image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'buttonLabel',
              title: 'Button text',
              type: 'string',
              initialValue: 'View on Stan',
            }),
            defineField({
              name: 'buttonUrl',
              title: 'Stan Store URL',
              type: 'url',
              validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'buttonUrl', media: 'coverImage' },
          },
        },
      ],
    }),
    defineField({
      name: 'stanStoreHeading',
      title: 'Stan Store section heading',
      type: 'string',
      initialValue: 'Take a Class on Stan',
    }),
    defineField({
      name: 'stanStoreBody',
      title: 'Stan Store section body text',
      type: 'text',
      rows: 3,
      initialValue:
        "All of Kimberly's online classes — including Raising Safe Siblings: for Families — are hosted on Stan. Browse the full catalog, watch at your own pace, and get instant access right after checkout.",
    }),
    defineField({
      name: 'stanStoreButtonLabel',
      title: 'Stan Store button text',
      type: 'string',
      initialValue: 'Browse Classes on Stan',
    }),
    defineField({
      name: 'stanStoreUrl',
      title: 'Stan Store URL',
      type: 'url',
      description: 'The public storefront link, e.g. https://stan.store/Toughtopicsmom',
      initialValue: 'https://stan.store/Toughtopicsmom',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
    defineField({
      name: 'postSnippetHeading',
      title: 'Blog teaser — heading',
      type: 'string',
      description: 'Short teaser that links out to the blog post on Substack.',
      initialValue: 'New: Online Classes Have a New Home',
    }),
    defineField({
      name: 'postSnippetBody',
      title: 'Blog teaser — snippet text',
      type: 'text',
      rows: 3,
      description: 'A short excerpt from the Substack post.',
      initialValue:
        "My online classes have a new home. I've moved everything over to Stan — one simple storefront, instant access, and more classes coming soon.",
    }),
    defineField({
      name: 'postUrl',
      title: 'Blog teaser — link to full post',
      type: 'url',
      description: 'Link to the specific Substack post once it is published.',
      initialValue: 'https://kimberlykingauthor.substack.com',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'postLinkLabel',
      title: 'Blog teaser — link text',
      type: 'string',
      initialValue: 'Read the full post',
    }),
  ],
})
