import { type SchemaTypeDefinition } from 'sanity'

import { aboutPage } from './aboutPage'
import { book } from './book'
import { contactPage } from './contactPage'
import { homePage } from './homePage'
import { onlineClassesPage } from './onlineClassesPage'
import { speakingPage } from './speakingPage'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonial, book, homePage, aboutPage, speakingPage, onlineClassesPage, contactPage],
}
