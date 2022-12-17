import React from 'react';
import { useDispatch } from 'react-redux';

const IdeaItem = ({ id, title,impact, ease, confidence, completed }) => {
	const dispatch = useDispatch();

	return (
		<li className="list-group-item">
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
					/>
					{title}
					{impact}
					{ease}
					{confidence}
					{completed}
				</span>
				<button className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default IdeaItem;
