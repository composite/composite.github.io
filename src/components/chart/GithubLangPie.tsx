import { useStore } from "@nanostores/react"
import type { Data, Layout } from "plotly.js"
import Plot from "react-plotly.js"
import { github, status } from "~/store/github"


export default function GithubLangPie() {

  const stat = useStore(status)
  const info = useStore(github)

  if (stat === 'init' || stat === 'load') return 'Loading...'
  if (stat === 'error') return 'Error'

  const data: Data[] = [
    {
      values: Object.values(info.langcounts),
      labels: Object.keys(info.langcounts),
      type: 'pie'
    }
  ]
  const layout: Partial<Layout> = {
    title: 'Github 저장소 주요 언어 점유율',
    autosize: true
  }
  console.log(data, layout)

  return <Plot data={data} layout={layout} className="rounded-xl shadow-xl" />
}
