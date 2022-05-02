let userInput: unknown; //better than any but not as good as union
let userName: string; //fixed type

userInput = 5;
userInput = "max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("an error occured!", 500);

console.log("hi"); // -w for watch mode
