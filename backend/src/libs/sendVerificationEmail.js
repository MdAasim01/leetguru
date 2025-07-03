import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT),
	secure: false, // Brevo recommends `false` for port 587
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export const sendVerificationEmail = async (to, token) => {
	const verifyLink = `${process.env.CLIENT_URL}/verify-email/${token}`;

	await transporter.sendMail({
		from: process.env.EMAIL_FROM,
		to,
		subject: "Verify your email address",
		html: `
			<h2>Welcome to Our Platform</h2>
			<p>Click the link below to verify your email address:</p>
			<p><a href="${verifyLink}" target="_blank">${verifyLink}</a></p>
			<p>This link will expire in 15 minutes.</p>
		`,
	});
};

// transporter.verify((err, success) => {
// 	if (err) {
// 		console.error("SMTP connection failed:", err);
// 	} else {
// 		console.log("SMTP connection successful!");
// 	}
// });

