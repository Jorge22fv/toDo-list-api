import React from "react";

export const Todo = ({ index, todo, eliminate }) => {
	return (
		<ul className="text-start">
			<li onClick={() => eliminate(index)}>
				{todo}
				<i id="trash" className="far fa-trash-alt"></i>
			</li>
		</ul>
	);
};
