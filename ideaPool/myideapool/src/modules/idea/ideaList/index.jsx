import React from 'react'
import { useSelector } from 'react-redux';
import IdeaItem from '../ideaItem';


export const IdeaList = () => {

    //next line :  goes to store, picks out all ideas from state and assigns to ideas var
    const ideas = useSelector((state) => state.ideas);

  return (
    <ul className='list-group'>
			{ideas.map((idea) => (
				<IdeaItem id={idea.id} title={idea.title} Impact={idea.impact} Ease={idea.ease} Confidence={idea.confidence} completed={idea.completed} />
			))}
		</ul>
  )
}
