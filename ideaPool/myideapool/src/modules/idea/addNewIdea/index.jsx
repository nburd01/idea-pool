import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIdea } from '../../../store/ideaSlice';

export const AddNewIdea = () => {
	const [title, setTitle] = useState('');
	const [impact, setImpact] = useState('');
	const [ease, setEase] = useState('');
	const [confidence, setConfidence] = useState('');
    const disptach = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        disptach(
            addIdea({
                title:title,
                impact:impact,
                ease:ease,
                confidence:confidence,
        }))
    }

    return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add ideas...'
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<input
				type='integer'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add impact'
				value={impact}
				onChange={(event) => setImpact(event.target.value)}
			/>
			<input
				type='integer'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add impact'
				value={ease}
				onChange={(event) => setEase(event.target.value)}
			/>
			<input
				type='integer'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add impact'
				value={confidence}
				onChange={(event) => setConfidence(event.target.value)}
			/>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
}
