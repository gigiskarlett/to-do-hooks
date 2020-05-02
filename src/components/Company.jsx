import React, { useEffect, useState } from "react";

const Company = () => {
	const [companies, setCompanies] = useState([]);
	const [type, setType] = useState("iexvolume");

	useEffect(() => {
		fetch(
			`https://cloud.iexapis.com/stable/stock/market/list/${type}?token=pk_f8f6821d144c492a8d6d0b56e4ad160f`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log("fetched");
				setCompanies(res);
			});
	}, [type]);

	const trackType = (valueSelected) => {
		setType(valueSelected);
	};

	return (
		<>
			<select value={type} onChange={(e) => trackType(e.target.value)}>
				<option value="mostactive">active</option>
				<option value="iexvolume">volume</option>
			</select>
			<h1>Most active companies</h1>
			{companies.map((company, index) => (
				<li key={index + Math.random()}>
					{company.companyName}
					<span>Change percent: {company.changePercent}</span>
					<span>Latest Price: {company.latestPrice}</span>
				</li>
			))}
		</>
	);
};

export default Company;
