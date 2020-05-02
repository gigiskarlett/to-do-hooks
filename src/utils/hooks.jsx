import { useEffect, useState } from "react";

export const useCompanies = (type) => {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		const fetchCompanies = () => {
			fetch(
				`https://cloud.iexapis.com/stable/stock/market/list/${type}?token=pk_f8f6821d144c492a8d6d0b56e4ad160f`
			)
				.then((res) => res.json())
				.then((res) => {
					console.log("fetched", type);
					setCompanies(res);
				});
		};
		const interval = setInterval(fetchCompanies, 3000);
		return () => clearInterval(interval);
	}, [type]);
	return [companies];
};
