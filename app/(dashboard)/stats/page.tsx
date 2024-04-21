import { getStatsAction, getChartsDataAction } from "@/utils/action"

const StatsPage = async () => {
  const charts = await getChartsDataAction()
  console.log(charts)
  return (
    <div>StatsPage</div>
  )
}

export default StatsPage