
// This makes the getTheNumber, getEnteredNumber and showResultMessage
// functions available in scripts in event sheets.
import { getTheNumber, getEnteredNumber, showResultMessage } from "./main.js";


const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		// This is the number the player must guess.
		let theNumber = getTheNumber();
		
		// This is the number the player just guessed.
		let guessedNumber = getEnteredNumber();
		let message;
		
		// Set the message to display.
		if (guessedNumber < theNumber)
		{
			message = "Higher!";
		}
		else if (guessedNumber > theNumber)
		{
			message = "Lower!";
		}
		else
		{
			message = "That's it!";
		}
		
		// Show the message.
		showResultMessage(message);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
