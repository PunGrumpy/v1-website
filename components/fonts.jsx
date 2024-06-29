import { M_PLUS_1 } from 'next/font/google'

const mplus = M_PLUS_1({
  subsets: ['latin'],
  variable: '--font-mplus',
  weight: '400'
})

export const fonts = {
  mplus
}
