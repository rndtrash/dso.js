import fs from 'fs';

import dso_js from './dist/dso.js';

const { dso } = dso_js;
const { decompiler } = dso;

console.dir(dso);

fs.readFile ('/home/ivan/games/Blockland v20/base/main-Vanilla.cs.dso', ( error, buffer ) =>
{
	if ( error )
	{
		console.error (error);
		return;
	}

	let codeString;

	try
	{
		codeString = decompiler.decompileDSO (buffer);
	}
	catch ( decompilerError )
	{
		console.error ('[!] Decompiler Error:', decompilerError);
		return;
	}

	fs.writeFileSync ('./main-Vanilla.cs.dso', codeString);
});
