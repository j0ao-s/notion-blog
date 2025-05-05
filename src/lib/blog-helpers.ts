export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getDateStr = (dateInput) => {
  const d = new Date(dateInput)
  const today = new Date()

  // Zera horas para comparação só de data
  const clearTime = (date) => {
    const newDate = new Date(date)
    newDate.setHours(0, 0, 0, 0)
    return newDate
  }

  const diffTime = clearTime(d).getTime() - clearTime(today).getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)

  if (diffDays === 0) return 'Hoje'
  if (diffDays === -1) return 'Ontem'
  //if (diffDays === 1) return 'Amanhã'

  const day = d.toLocaleString('pt-BR', { day: '2-digit' })
  const month = d.toLocaleString('pt-BR', { month: 'long' })
  const year = d.getFullYear()

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  return `${day} de ${capitalizedMonth} de ${year}`
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = (slug) => {
  if (typeof slug !== 'string') return slug

  let startingSlash = slug.startsWith('/')
  let endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}
