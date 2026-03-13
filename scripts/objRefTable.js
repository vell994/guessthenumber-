const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1
	];
};
self.C3_JsPropNameTable = [
	{Title: 0},
	{TextInput: 0},
	{GuessButton: 0},
	{ResultText: 0}
];

self.InstanceType = {
	Title: class extends self.ITextInstance {},
	TextInput: class extends self.ITextInputInstance {},
	GuessButton: class extends self.IButtonInstance {},
	ResultText: class extends self.ITextInstance {}
}