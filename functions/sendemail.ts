type Env = {
	'X-Smtp2go-Api-Key': string;
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
	const formdata = await context.request.formData();
	const json = Object.fromEntries(formdata);
	const response = await fetch('https://api.smtp2go.com/v3/email/send', {
		method: 'POST',
		headers: {
			'X-Smtp2go-Api-Key': context.env['SMTP2GO_API_KEY'],
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			sender: 'contact@danielamsel.com',
			to: ['me@danielamsel.com'],
			subject: `${json.name} - ${json.email}: ${json.subject}`,
			text_body: `${json.content}`
		})
	});

	if (!response.ok) {
		console.error(response);
		throw new Error(`${response.status} - Failed to send email.`);
	}

	return Response.redirect(
		`${new URL(context.request.url).origin}/about?email_sent=true`
	);
};
