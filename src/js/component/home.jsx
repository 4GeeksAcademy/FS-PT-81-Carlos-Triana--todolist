import React, { useState } from "react";


//create your first component
const Home = () => {

	const [homework, sethomework] = useState('');
	const [homeworkList, sethomeworkList] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		const newhomework = { label: homework, done: false }
		sethomeworkList([...homeworkList, newhomework])
	}

	const handleChange = e => {
		sethomework(e.target.value)
	}

	const handleDelete = (index) => {
		const newList = homeworkList.filter((_, i) => i !== index);
		sethomeworkList(newList);
	}

	const handleClearInput = () => {
		sethomework('');
	}

	return (
		<div className="container-fluid bg-light vh-100 d-flex justify-content-center height: 100px">

			<div className="text-center fs-4 w-50">

				<div className="shadow p-0 mb-5 bg-body rounded mt-5">
					<form className="bg-white border-bottom mb-0 bg-body rounded-top w-100 p-3 mt-0" onSubmit={handleSubmit}>
						<input
							type="text"
							value={homework}
							onChange={handleChange}
							required
							style={{
								border: 'none',
								boxShadow: 'none',
								outline: 'none',
								backgroundColor: 'transparent'
							}}
						/>
						<button
							type="button"
							onClick={handleClearInput}
							style={{
								marginLeft: '10px',
								padding: '5px 10px',
								border: 'none',
								backgroundColor: 'white',
								cursor: 'pointer',
							}}
						>
							<i className="fa-solid fa-xmark" style={{ opacity: 0.5 }}></i> {/* Aquí aplica opacidad */}
						</button>
					</form>

					<ul className="p-3 mb-1 bg-body rounded-bottom w-100 mt-0 border-bottom" style={{ listStyleType: 'none', paddingLeft: 0 }}>
						{homeworkList.length > 0
							? homeworkList.map((homework, i) => <li key={i}>{homework.label}
								<span onClick={() => handleDelete(i)} style={{ cursor: 'pointer', paddingLeft: '10px' }}> <i class="fa-regular fa-trash-can"></i> </span></li>)
							: <li className="text-muted">Add your homeworks up</li>}
					</ul>

					<div style={{
						bottom: '10px',
						left: '10px',
						fontSize: '18px',
						color: 'gray'
					}}>
					   {homeworkList.length} item left
					</div>

				</div>

			</div>

		</div>
	);
};

export default Home;
