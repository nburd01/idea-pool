import React from 'react';
import { useDispatch } from 'react-redux';
// import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const IdeaItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	// const handleCheckboxClick = () => {
	// 	dispatch(toggleCompleteAsync({ id, completed: !completed }));
	// };

	// const handleDeleteClick = () => {
	// 	dispatch(deleteTodoAsync({ id }));
	// };

	return (
		<li className="list-group-item">
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						// checked={completed}
						// onClick={handleCheckboxClick}
					></input>
					{title}
				</span>
				<button className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default IdeaItem;
// import React from 'react'

// export const IdeaItem = () => {

    
//     return (
// 		<li className="list-group-item">
// 			<div className='d-flex justify-content-between'>
// 				<span className='d-flex align-items-center'>
// 					<input
// 						type='checkbox'
// 						className='mr-3'
// 					/>
// 					{title}
// 				</span>
// 				<button className='btn btn-danger'>
// 					Delete
// 				</button>
// 			</div>
// 		</li>
// 	);
// }
