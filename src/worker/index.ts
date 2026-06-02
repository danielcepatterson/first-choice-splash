import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.post("/api/quote", async (c) => {
	const { email } = await c.req.json();

	if (!email) {
		return c.json({ error: "Email is required" }, 400);
	}

	try {
		// Send email using Resend or another email service
		// For now, we'll log it and return success
		// In production, integrate with an email service like Resend, SendGrid, etc.
		console.log(`Quote request from: ${email}`);

		return c.json({
			success: true,
			message: "Quote request received. We'll contact you soon!",
		});
	} catch (error) {
		console.error("Error processing quote request:", error);
		return c.json({ error: "Failed to process request" }, 500);
	}
});

export default app;
