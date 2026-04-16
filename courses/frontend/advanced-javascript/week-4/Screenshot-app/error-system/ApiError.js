import AppError from "./AppError.js";

class ApiError extends AppError {
    constructor(message, statusCode) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode; // Default to Internal Server Error
    }
    
    toUserMessage(){
        if(this.statusCode >= 500)
            return "Server is currently unavailable. Please try again later.";
        return `API Error: ${this.message}`;
    }
}