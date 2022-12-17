import React from 'react'
import { Empty } from '../empty'
import { IdeaList } from '../ideaList'

export const IdeaPage = () => {

    const handleAddNewIdea = () => {
        if (idea) return;
        dispatch(addNewIdea({
          content: '',
          impact: 10,
          ease: 10,
          confidence: 10,
        }));
      };

  return (
    <div>
        <IdeaList/>
        <Empty/>
    </div>
  )
}
