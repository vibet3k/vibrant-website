import { Lexend_Deca, Radley } from 'next/font/google'

export const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',   // Add display swap for better loading experience
  preload: true,     // Ensure fonts are preloaded
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend-deca',
})

export const radley = Radley({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-radley',
})