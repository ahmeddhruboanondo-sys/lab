import { z } from 'zod'

export const applySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.string().min(1),
  cvUrl: z.string().url().optional(),
  message: z.string().min(10),
})
