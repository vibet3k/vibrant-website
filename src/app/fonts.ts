import { Lexend_Deca, Radley } from 'next/font/google'

export const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  // Include all the weights from the style guide
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend-deca',
})

export const radley = Radley({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-radley',
})