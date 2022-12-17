import React from 'react'
import { AddNewIdea } from '../addNewIdea'
import { Empty } from '../empty'
import { IdeaList } from '../ideaList'

export const IdeaPage = () => {

  return (
    <div>
        <h1>Idea Page</h1>
        <AddNewIdea/>
        <IdeaList/>
        <Empty/>
    </div>
  )
}
