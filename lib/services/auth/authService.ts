import { setToken } from "./tokenService";

const AuthService = {
	login: async function (email: string, password: string) {
		// TOOD: Create feedback type.
		const feedback = {
			status: false,
			message: "Registration failed",
			data: null,
		};

		// TODO: Validate email and password.
		console.log(email, password);

		// TODO: Register user.
		try {
			// TODO: Call Register API.
			if(setToken("token-here")){
				feedback.status = true;	
				feedback.message = "Registration successful";
			} else {
				feedback.message = "Failed to save token";
			}
		} catch (error: any) {
			feedback.message = error?.message;
		}

		return feedback;
	},
};

export default AuthService;
