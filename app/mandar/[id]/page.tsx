import Redi from '../../components/Redi';
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
	data.numero = data.numero + 1;
	await fetch(
		`https://daybook-460dd-default-rtdb.firebaseio.com/${id}.json`,
		{
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	return data;
};

export default async function CartelPage({
	params
}: {
	params: { id: string };
}) {
	const { id } = params;
	const data = await fetching(id);
	return <Redi url={data.img}></Redi>;
}
