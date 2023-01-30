import { NextApiRequest, NextApiResponse } from 'next';

// redireccioar a la pagina que se pase por parametro
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { url } = req.query;

	if (url) {
		res.redirect(url.toString());
	} else {
		res.status(404).json({ error: 'No url provided' });
	}
}
