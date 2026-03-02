import "./page.css"

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const query = (await searchParams).query;

  return (
    <div className="search-container">
      <h1>Search results for: <span className="query">{query}</span></h1>
    </div>
  )
}
