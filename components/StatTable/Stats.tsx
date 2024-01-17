import { UserStats, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<UserStats[]> {
  // Fetch data from your API here.
  return [
    {"userName": "ruuffian", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 3, "deaths": 2, "assists": 4},
    {"userName": "CloudTurtle", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 40, "deaths": 0, "assists": 2},
    {"userName": "Buggleberry Finn", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 5, "deaths": 12, "assists": 0},
    {"userName": "Praetorian", "teamName": "Mac and Cheese Club", "gamesPlayed": 1, "kills": 0, "deaths": 0, "assists": 45},
]
}

export default async function StatTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}