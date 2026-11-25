import { readFile } from "fs/promises"
import path from "path"

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const titleSearchKey = (searchParams.get("titleSearchKey") || "").trim().toLowerCase()

  const filePath = path.join(process.cwd(), "data", "movies.json")
  const fileContent = await readFile(filePath, "utf-8")
  const movies = JSON.parse(fileContent)

  const filtered = titleSearchKey
    ? movies.filter((m) => m.Title.toLowerCase().includes(titleSearchKey))
    : movies

  return Response.json({
    Search: filtered,
    totalResults: String(filtered.length),
    Response: filtered.length > 0 ? "True" : "False",
  })
}
