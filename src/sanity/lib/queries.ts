import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { client } from './client'

// Revalidate every 60 seconds — content published in Studio shows up on the
// live site within a minute, without needing a full redeploy.
export const REVALIDATE_SECONDS = 60

// A Sanity outage or misconfiguration shouldn't 500 the whole page — fall
// back to null/empty so pages still render with their static content.
async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    return await client.fetch(query, {}, { next: { revalidate: REVALIDATE_SECONDS } })
  } catch {
    return fallback
  }
}

export type HomePageContent = {
  heroHeadline: string
  heroSubhead: string
  heroBody: string
  videoSectionHeading?: string
}

export async function getHomePage(): Promise<HomePageContent | null> {
  return safeFetch(
    `*[_id == "homePage"][0]{heroHeadline, heroSubhead, heroBody, videoSectionHeading}`,
    null,
  )
}

export type AboutPageContent = {
  heroTagline: string
  bioParagraph1: string
  bioParagraph2: string
  searchingForHeading?: string
  searchingForItems?: string[]
  offersHeading?: string
  offersItems?: string[]
  testimonialsHeading?: string
  ctaHeading?: string
  ctaButtonLabel?: string
}

export async function getAboutPage(): Promise<AboutPageContent | null> {
  return safeFetch(
    `*[_id == "aboutPage"][0]{
      heroTagline, bioParagraph1, bioParagraph2,
      searchingForHeading, searchingForItems,
      offersHeading, offersItems,
      testimonialsHeading, ctaHeading, ctaButtonLabel
    }`,
    null,
  )
}

export type SpeakingTopic = {
  title: string
  description?: string
}

export type BookingOption = {
  title: string
  priceLabel?: string
}

export type SpeakingPageContent = {
  heroHeadline: string
  heroSubhead: string
  heroBody: string
  topicsHeading?: string
  topics?: SpeakingTopic[]
  topicsClosingLine?: string
  bookingHeading?: string
  bookingOptions?: BookingOption[]
  videoHeading?: string
  contactHeading?: string
  contactBody?: string
  closingTagline?: string
}

const speakingPageFallback: SpeakingPageContent = {
  heroHeadline: '',
  heroSubhead: '',
  heroBody: '',
  bookingOptions: [
    { title: 'Keynote' },
    { title: 'Workshop & Staff Training' },
    { title: 'Panelist' },
  ],
}

export async function getSpeakingPage(): Promise<SpeakingPageContent | null> {
  return safeFetch(
    `*[_id == "speakingPage"][0]{
      heroHeadline, heroSubhead, heroBody,
      topicsHeading, topics[]{title, description}, topicsClosingLine,
      bookingHeading, bookingOptions[]{title, priceLabel},
      videoHeading, contactHeading, contactBody, closingTagline
    }`,
    speakingPageFallback,
  )
}

export type OnlineClassesPageContent = {
  heroHeadline: string
  heroSubhead: string
  heroBody: string
  stanStoreHeading?: string
  stanStoreBody?: string
  stanStoreButtonLabel?: string
  stanStoreUrl?: string
  postSnippetHeading?: string
  postSnippetBody?: string
  postUrl?: string
  postLinkLabel?: string
}

export async function getOnlineClassesPage(): Promise<OnlineClassesPageContent | null> {
  return safeFetch(
    `*[_id == "onlineClassesPage"][0]{
      heroHeadline, heroSubhead, heroBody,
      stanStoreHeading, stanStoreBody, stanStoreButtonLabel, stanStoreUrl,
      postSnippetHeading, postSnippetBody, postUrl, postLinkLabel
    }`,
    null,
  )
}

export type ContactPageContent = {
  heading: string
  body?: string
}

export async function getContactPage(): Promise<ContactPageContent | null> {
  return safeFetch(`*[_id == "contactPage"][0]{heading, body}`, null)
}

export type SanityTestimonial = {
  quote: string
  author: string
  role?: string
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return safeFetch(
    `*[_type == "testimonial"] | order(_createdAt asc){quote, author, role}`,
    [],
  )
}

export type SanityBuyLink = {
  label: string
  url?: string
  primary?: boolean
}

export type SanityBook = {
  title: string
  slug: string
  description: string
  coverImage?: SanityImageSource | null
  badge?: string
  bulkOrderNote?: string
  featured?: boolean
  buyLinks?: SanityBuyLink[]
}

export async function getBooks(): Promise<SanityBook[]> {
  return safeFetch(
    `*[_type == "book"] | order(featured desc, _createdAt asc){
      title, "slug": slug.current, description, coverImage,
      badge, bulkOrderNote, featured, buyLinks[]{label, url, primary}
    }`,
    [],
  )
}
