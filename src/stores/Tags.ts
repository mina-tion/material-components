import { observable, action, makeAutoObservable } from 'mobx'

import { ITag } from 'types/Tag'
import { RootStore } from 'stores'

export class TagsStore {
  rootStore: RootStore

  @observable tags: ITag[] = [
    { id: 1, title: 'tag' },
    { id: 2, title: 'another tag' },
    { id: 3, title: 'position tag here' },
    { id: 4, title: 'tag three' },
    { id: 5, title: 'second tag' },
  ]

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  @action setTag = (tagTitle: string) => {
    debugger
    this.tags = [...this.tags, { id: this.tags.length, title: tagTitle}]
  }
}
