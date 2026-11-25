'use server'

export async function searchMovies(formData) {
  const titleSearchKey = (formData.get("titleSearchKey") || "").trim()
  const type = (formData.get("type") || "").trim()
  const year = (formData.get("year") || "").trim()

  if (!titleSearchKey) return { Search: [] }

  const params = new URLSearchParams({
    apikey: "f1cbc41e",
    s: titleSearchKey,
  })
  if (type) params.set("type", type)
  if (year) params.set("y", year)

  try {
    const httpRes = await fetch(`https://www.omdbapi.com/?${params.toString()}`)
    const jsonRes = await httpRes.json()
    return jsonRes
  } catch (err) {
    return { error: `Erro na requisição ${err}` }
  }
}
