import { useEffect, useState } from "react";

const DropdownFilter = () => {
	const [jsonData, setJsonData] = useState([]);

	const uniqueSymbols = new Set();
	const [uniqueSymbolsArray, setUniqueSymbolsArray] = useState([]);

	useEffect(() => {
		fetch("src/assets/dataTable.json")
			.then((response) => response.json())
			.then((data) => {
				// setJsonData(data.slice(0, 9));
				setJsonData(data);
				// console.log(data); // Access the array of objects
				jsonData.forEach((obj) => {
					uniqueSymbols.add(obj.SYMBOL);
				});
				setUniqueSymbolsArray([...uniqueSymbols]);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<details className="dropdown mb-32">
			<summary className="m-1 btn">open or close</summary>
			<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				{uniqueSymbolsArray.map((item) => (
					<li key={item}>
						<a>{item}</a>
					</li>
				))}
			</ul>
		</details>
	);
};

export default DropdownFilter;
