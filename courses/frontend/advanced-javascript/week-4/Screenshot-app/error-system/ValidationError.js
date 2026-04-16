import AppError from "./AppError.js";


class ValidationError extends AppError {

    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }

    toUserMessage(){
        return `Input Validation Failed: ${this.message}`;
        }
}