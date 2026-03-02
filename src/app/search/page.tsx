export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const query = (await searchParams).query;

  return (
    <div>Search results for: {query}</div>
  )
}
