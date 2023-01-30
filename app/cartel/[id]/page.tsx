interface Cartel {
	img: string;
	numero: number;
}

const fetching = async (id: string): Promise<Cartel> => {
	const res = await fetch(
		`https://daybook-460dd-default-rtdb.firebaseio.com/${id}.json`
	);
	const data = await res.json();
	//aumentar el numero de visitas
	return data;
};

export default async function CartelPage({
	params
}: {
	params: { id: string };
}) {
	const { id } = params;
	const data = await fetching(id);
	return (
		<>
			<main>
				<h1>Cartel {id}</h1>
				<p>visitas : {data.numero}</p>
			</main>
		</>
	);
}
