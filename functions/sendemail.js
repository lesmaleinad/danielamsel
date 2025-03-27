import { createMimeMessage } from 'mimetext';

export async function onRequestPost(context) {
	const formdata = await context.request.formData();
	const json = Object.fromEntries(formdata);
	console.log(json);

	const email = 'me@danielamsel.com';
	const msg = createMimeMessage();
	msg.setSender(email);
	msg.setRecipient(email);
	msg.setSubject(`${json.name} - ${json.email}: ${json.subject}`);
	msg.addMessage({
		contentType: 'text/plain',
		data: `${json.content}`
	});
	await context.env.EMAIL.send(message);
	return Response.redirect(new URL(context.request.url).origin);
}
