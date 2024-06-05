// TODO Move to config
const TOKEN_KEY = "my_app_token";

// TODO: Encrypt token.

/**
 * Sets the authentication token in local storage.
 * @param {string} token - The authentication token to be stored.
 * @returns {boolean} Returns true if the token is successfully saved.
 */
export const setToken = (token: string): boolean => {
	try {
		localStorage.setItem(TOKEN_KEY, token);
		return true;
	} catch (error) {
		console.error("Error saving token:", error);
		return false;
	}
};

/**
 * Retrieves the authentication token from local storage.
 * @returns {string | null} The stored authentication token, or null if it doesn't exist.
 */
export const getToken = (): string | null => {
	return localStorage.getItem(TOKEN_KEY);
};

/**
 * Removes the authentication token from local storage.
 * @returns {boolean} - `true` if the token is removed successfully, `false` if it fails.
 */
export const removeToken = (): boolean => {
	try {
		localStorage.removeItem(TOKEN_KEY);
		return true; // Token removed successfully
	} catch (error) {
		console.error("Error removing token:", error);
		return false; // Failed to remove token
	}
};
