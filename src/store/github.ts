import dayjs from "dayjs"
import { atom, computed, map, onMount } from "nanostores"

export type LoadStatus = 'init' | 'load' | 'done' | 'error'
export interface GithubInfomation {
  id: number
  repos: number
  pushes: number
  stars: number
  issues: number
  langcounts: Record<string, number>
}

const stat = atom<LoadStatus>('init')
const info = atom<GithubInfomation>({} as GithubInfomation)

onMount(info, () => {
  info.set({} as GithubInfomation)
  stat.set('load')
  let abort = new AbortController()
  let timeout = setTimeout(abort.abort, 10000, 'Github Timeout')
  fetch('https://api.github.com/users/composite', { signal: abort.signal })
  .then(res => {
    clearTimeout(timeout)
    if (res.status === 200) {
      return res.json()
    } else throw new Error(res.status + '')
  })
  .then(github => {
    info.set({
      id: github.id,
      repos: github.public_repos ?? 0,
      pushes: 0,
      stars: 0,
      issues: 0,
      langcounts: {}
    } as GithubInfomation)
  })
  .then(() => {
    abort = new AbortController()
    timeout = setTimeout(abort.abort, 10000, 'Github Timeout')
    return fetch('https://api.github.com/users/composite/repos?sort=pushed&per_page=100', { signal: abort.signal })
  })
  .then(res => {
    clearTimeout(timeout)
    if (res.status === 200) {
      return res.json() as Promise<any[]>
    } else throw new Error(res.status + '')
  })
  .then(list => {
    const current = info.get()
    for (const repo of list) {
      current.pushes += +dayjs(repo.pushed_at).isAfter(dayjs().add(-1, 'y'))
      current.stars += current.id === repo.owner.id ? repo.stargazers_count : 0
      current.issues += repo.open_issues_count
      if (repo.language && current.id === repo.owner.id) {
        (repo.language in current.langcounts) ? ++current.langcounts[repo.language] : (current.langcounts[repo.language] = 1)
      }
    }
    console.log('result: ', current)
    info.set(current)
    stat.set('done')
  })
  .catch(why => {
    console.warn(why)
    stat.set('error')
  })
  return () => {
    stat.set('init')
    info.set({} as GithubInfomation)
  }
})

const f = <T>(o: T) => o
export const status = computed(stat, f)
export const github = computed(info, f)
