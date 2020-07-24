export default async (req, res) => {
  const data = await fetch('http://localhost:4000/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: req.body
	});
  
  const body = await data.json();

  return res.status(data.status).json({
  	message: body.message
  });
}