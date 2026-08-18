import type { StructureResolver } from 'sanity/structure'

// Page-copy types are "singletons" — there should only ever be one of each,
// so they're pinned as single documents below instead of a creatable list.
const SINGLETON_TYPES = new Set([
  'homePage',
  'aboutPage',
  'speakingPage',
  'onlineClassesPage',
  'contactPage',
])

const SINGLETON_PAGES: { id: string; type: string; title: string }[] = [
  { id: 'homePage', type: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', type: 'aboutPage', title: 'About Page' },
  { id: 'speakingPage', type: 'speakingPage', title: 'Speaking Page' },
  { id: 'onlineClassesPage', type: 'onlineClassesPage', title: 'Online Classes Page' },
  { id: 'contactPage', type: 'contactPage', title: 'Contact Page' },
]

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETON_PAGES.map(({ id, type, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(type).documentId(id)),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return id ? !SINGLETON_TYPES.has(id) : true
      }),
    ])
