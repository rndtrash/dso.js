import fs from 'fs';
import path from 'path';

import dso_js from './dist/dso.js';

const { dso } = dso_js;
const { decompiler } = dso;

console.dir(dso);

//fs.readFile ('/home/ivan/games/Blockland v20/base/main-Vanilla.cs.dso', ( error, buffer ) =>
//fs.readFile ('/home/ivan/games/Blockland v20/base/client/mission.cs.dso', ( error, buffer ) =>
reverse('/home/ivan/games/Blockland v20/base/server/defaultMusicList.cs.dso');
function reverse(dsoPath) {
	fs.readFile (dsoPath, ( error, buffer ) =>
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

		fs.writeFileSync (path.basename(dsoPath).replace(/\.dso$/, ''), codeString);
	});
}
