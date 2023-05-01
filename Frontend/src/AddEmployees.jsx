const AddEmployees=()=>{
    return (
        <>
			<h1 className="animate__animated animate__fadeInDown">Adding new employees</h1>
				<form id="addEmployeeForm">
					<div className="nameField animate__animated animate__fadeInDown" >
						<div>
							<label>First name:</label>
							<input type="text" className="form-control" placeholder="Ex: Bill"/>
						</div>
						<div>
							<label>Last name:</label>
							<input type="text" className="form-control" placeholder="Ex: Gates"/>
						</div>
					</div>
					<div className="designationField animate__animated animate__fadeIn">
							<label id="designationLabel">Designation: </label>
							<div className="form-team-list">
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio1"/>
									<label className="form-check-label" >Python Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio2"/>
									<label className="form-check-label" >Backend Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio3"/>
									<label className="form-check-label" >C# Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio4"/>
									<label className="form-check-label" >Java Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio5"/>
									<label className="form-check-label" >Javascript Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio6"/>
									<label className="form-check-label" >Dotnet Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio7" />
									<label className="form-check-label" >Node Developer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio8"/>
									<label className="form-check-label" >Data Engineer</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="radio1" id="radio8"/>
									<label className="form-check-label" >Docker Developer</label>
								</div>
							</div>
							<div className="genderField animate__animated animate__fadeIn">
								<label className="genderLabel">Gender:</label>
								<div className="form-MaleFemaleChoice">
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radio2" id="radio9"/>
										<label className="form-check-label" >Male</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radio2" id="radio10"/>
										<label className="form-check-label" >Female</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radio2" id="radio10"/>
										<label className="form-check-label" >Non-Binary</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radio2" id="radio10"/>
										<label className="form-check-label" >Other</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radio2" id="radio10"/>
										<label className="form-check-label" >Prefer not to answer</label>
									</div>
								</div>
							</div>
							<div className="form-position animate__animated animate__fadeInUp">
								<label>Team:</label>
								<select id="inputState" className="form-control">
									<option>Team A</option>
									<option>Team B</option>
									<option>Team C</option>
									<option>Team D</option>
									<option selected>...</option>
								</select>
							</div>
					</div>
					<button className="submitNewEmployee animate__animated animate__fadeInUp">Submit!</button >
				</form>
		</>
    )
}
export default AddEmployees;