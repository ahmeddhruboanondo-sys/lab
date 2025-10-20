const rateLimitMap = new Map<string, number[]>()

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(key) || []

  const validTimestamps = timestamps.filter(t => now - t < windowMs)

  if (validTimestamps.length >= limit) {
    return true
  }

  validTimestamps.push(now)
  rateLimitMap.set(key, validTimestamps)

  return false
}
