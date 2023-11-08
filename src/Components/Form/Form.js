import "./Form.css";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState({
		day: "",
		month: "",
		year: "",
	});
	const [time, setTime] = useState({
		hour: "",
		minute: "",
	});
    const [people, setPeople] = useState(1);

    const handleCount = (symbol) => {
        if (symbol === "+") {
            setPeople(people + 1);
        } else if (symbol === "-" && people > 1) {
            setPeople(people - 1);
        }
    }

	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const [timeError, setTimeError] = useState(false);

	const validateName = () => {
		if (name === "") {
			return setNameError(true);
		}
		return setNameError(false);
	};

	const validateEmail = () => {
		if (email === "") {
			return setEmailError(true);
		}
		return setEmailError(false);
	};

	const validateDate = () => {
		if (
			(date.day === "" || date.day > 31) ||
			(date.month === "" || date.month > 12) ||
			(date.year === "" || date.year < 2023)
		) {
			return setDateError(true);
		}
		return setDateError(false);
	};

	const validateTime = () => {
		if (time.hour === "" || time.minute === "") {
			return setTimeError(true);
		}
		return setTimeError(false);
	};
      

	const handleSubmit = (e) => {
		e.preventDefault();
		validateName();
		validateEmail();
		validateDate();
		validateTime();

		if (
			name !== "" &&
			email !== "" &&
			(date.day !== "" && date.day <= 31) &&
			(date.month !== "" && date.month <= 12) &&
			(date.year !== "" && date.year >= 2023) &&
			time.hour !== "" &&
			time.minute !== ""
		) {
			window.location.href = "/confirmation";
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="form-wrapper p-4 p-sm-5"
		>
			<input
				type="text"
				value={name}
				placeholder="Name"
				className="w-100"
				onChange={(e) => setName(e.target.value)}
			/>
			<p className={nameError ? "input-error m-0 p-0" : "hidden"}>
				This field is required!
			</p>
			<input
				type="text"
				value={email}
				placeholder="Email"
				className="w-100"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<p className={emailError ? "input-error m-0 p-0" : "hidden"}>
				This field is required!
			</p>
			<div>
				<label>
					Pick a date:
					<p className={dateError ? "input-error m-0 p-0" : "hidden"}>
						This field is required!
					</p>
				</label>
				<input
					type="number"
					value={date.day}
					placeholder="DD"
                    max="31"
					onChange={(e) => setDate({ ...date, day: e.target.value })}
				/>
				<input
					type="number"
					value={date.month}
					placeholder="MM"
                    max="12"
					onChange={(e) =>
						setDate({ ...date, month: e.target.value })
					}
				/>
				<input
					type="number"
					value={date.year}
					placeholder="YYYY"
                    min="2023"
					onChange={(e) => setDate({ ...date, year: e.target.value })}
				/>
			</div>
			<div>
				<label>
					Pick a time:
					<p className={timeError ? "input-error m-0 p-0" : "hidden"}>
						This field is required!
					</p>
				</label>
				<input
					type="number"
					value={time.hour}
					placeholder="09"
                    max="12"
					onChange={(e) => setTime({ ...time, hour: e.target.value })}
				/>
				<input
					type="number"
					value={time.minute}
					placeholder="00"
                    max="59"
					onChange={(e) =>
						setTime({ ...time, minute: e.target.value })
					}
				/>
				<div className="custom-select">
					<select>
						<option value="am">AM</option>
						<option value="pm">PM</option>
					</select>
				</div>
			</div>
			<div className="select-people">
				<p onClick={() => handleCount('-')} className="select-symbol">-</p>
				<p className="edit">{people} people</p>
				<p  onClick={() => handleCount('+')}className="select-symbol">+</p>
			</div>
			<button className="btn-dine">make reservation</button>
		</form>
	);
};

export default Form;
