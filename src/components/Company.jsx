import React, { useState } from "react";
import { useCompanies } from "../utils/hooks";

const Company = () => {
	const [type, setType] = useState("iexvolume");
	const [companies] = useCompanies(type);

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
