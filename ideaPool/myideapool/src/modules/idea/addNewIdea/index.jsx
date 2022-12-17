import React from 'react'
import { useDispatch } from 'react-redux'
import { addIdea } from '../../../store/ideaSlice';
export const AddNewIdea = () => {

    const disptach = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        disptach(
            addIdea({
                title:value,
        }))
    }

  return (
    <div>AddNewIdea</div>
  )
}
