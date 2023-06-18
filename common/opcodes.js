import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';


const names =
[
//	'OP_UINT_TO_FLT',              /*  0x00  */
	'OP_LOADVAR_STR',              /*  0x00  */ // rndtrash: from v20
	'OP_LOADVAR_FLT',              /*  0x01  */ // rndtrash: from v20
	'OP_UINT_TO_STR',              /*  0x02  */
//	'OP_UINT_TO_NONE',             /*  0x03  */
	'PLACEHOLDERRRRR',             /*  0x03  */
	'FILLER1',                     /*  0x04  */
//	'OP_ADD_OBJECT',               /*  0x05  */
	'OP_ADVANCE_STR_NUL_1',        /*  0x05  */ // rndtrash: from v20. seems to be an alias of 0x50
	'FILLER2',                     /*  0x06  */
	
	'OP_UINT_TO_NONE',             /*  0x07  */ // rndtrash: not quite sure what goes here
	
	'OP_FLT_TO_UINT',              /*  0x08  */

//	'OP_FLT_TO_STR',               /*  0x09  */
	'OP_ADD_OBJECT',               /*  0x09  */ // rndtrash: v20

	'OP_STR_TO_NONE_2',            /*  0x0A  */
	
//	'OP_LOADVAR_UINT',             /*  0x0B  */
	'OP_CALLFUNC_RESOLVE',         /*  0x0B  */ // rndtrash: from Blockland v20
	
//	'OP_SAVEVAR_STR',              /*  0x0C  */
	'OP_NOPE_NAH',                 /*  0x0C  */ // rndtrash:
//	'OP_JMPIFNOT',                 /*  0x0D  */
	'PLACEYHOLDERY',               /*  0x0D  */ // rndtrash:
//	'OP_SAVEVAR_FLT',              /*  0x0E  */
	'OP_PLACEHOLDER_YEAH',         /*  0x0E  */ // rndtrash:
	'OP_LOADIMMED_UINT',           /*  0x0F  */
//	'OP_LOADIMMED_FLT',            /*  0x10  */
	'OP_SAVEVAR_STR',              /*  0x10  */ // rndtrash: from v20
//	'OP_LOADIMMED_IDENT',          /*  0x11  */
	'OP_JMPIFNOT',                 /*  0x11  */ // rndtrash: from v20
	
	'OP_SAVEVAR_FLT',              /*  0x12  */ // rndtrash: from v20
	
	'OP_LOADIMMED_STR',            /*  0x13  */
	'OP_ADVANCE_STR_APPENDCHAR',   /*  0x14  */
//	'OP_TERMINATE_REWIND_STR',     /*  0x15  */
	'OP_ADVANCE_STR',              /*  0x15  */ // rndtrash: from v20
//	'OP_ADVANCE_STR',              /*  0x16  */
	'OP_POOOOOOOOOO',              /*  0x16  */ // rndtrash:
//	'OP_CMPLE',                    /*  0x17  */
	'OP_WRONG_NOPE',               /*  0x17  */ // rndtrash:
	'OP_SETCURFIELD',              /*  0x18  */
	'OP_SETCURFIELD_ARRAY',        /*  0x19  */
//	'OP_JMPIF_NP',                 /*  0x1A  */
	'OP_JMPIFF',                   /*  0x1A  */ // rndtrash: from Blockland v20

//	'OP_JMPIFF',                   /*  0x1B  */
	'OP_JMP',                      /*  0x1B  */ // rndtrash: not sure
	
//	'OP_JMP',                      /*  0x1C  */
	'OP_INVALID',                  /*  0x1C  */ // rndtrash: from Blockland v20
	
	'OP_BITOR',                    /*  0x1D  */
	'OP_SHL',                      /*  0x1E  */
	'OP_SHR',                      /*  0x1F  */
//	'OP_STR_TO_NONE',              /*  0x20  */
	'OP_NOOP',                     /*  0x20  */ // rndtrash: looks like a no op but uhhh umm???
	'OP_COMPARE_STR',              /*  0x21  */ // rndtrash: match
//	'OP_CMPEQ',                    /*  0x22  */
	'OP_STR_TO_UINT',              /*  0x22  */ // rndtrash: from Blockland v20
	'OP_CMPGR',                    /*  0x23  */
//	'OP_CMPNE',                    /*  0x24  */
	'OP_PUSH_FRAME',               /*  0x24  */ // rndtrash: from v20
//	'OP_OR',                       /*  0x25  */
	'OP_REWIND_STR',               /*  0x25  */ // rndtrash: from Blockland v20
//	'OP_STR_TO_UINT',              /*  0x26  */
	'OP_PLACEHOLDER_____',         /*  0x26  */ // rndtrash:
//	'OP_SETCUROBJECT',             /*  0x27  */
	'OP_CALLFUNC',                 /*  0x27  */ // rndtrash: from Blockland v20
//	'OP_PUSH_FRAME',               /*  0x28  */
	'OP_OP_OP_OP_OPPAN',           /*  0x28  */ // rndtrash:
//	'OP_REWIND_STR',               /*  0x29  */
	'OP_PLACEHOLDER__',            /*  0x29  */ // rndtrash:
//	'OP_SAVEFIELD_UINT',           /*  0x2A  */
	'OP_JMPIFFNOT',                /*  0x2A  */ // rndtrash: from v20
//	'OP_CALLFUNC',                 /*  0x2B  */
	'OP_JMPIF',                    /*  0x2B  */ // rndtrash: from v20
//	'OP_LOADVAR_STR',              /*  0x2C  */
	'OP_SAVEVAR_UINT',             /*  0x2C  */ // rndtrash: from v20
//	'OP_LOADVAR_FLT',              /*  0x2D  */
	'OP_SUGONDEEZ',                /*  0x2D  */ // rndtrash:
	'OP_SAVEFIELD_FLT',            /*  0x2E  */
	'OP_LOADFIELD_FLT',            /*  0x2F  */
	'OP_MOD',                      /*  0x30  */
	'OP_LOADFIELD_UINT',           /*  0x31  */
//	'OP_JMPIFFNOT',                /*  0x32  */
	'OP_PLCHLDRRR',                /*  0x32  */ // rndtrash:
//	'OP_JMPIF',                    /*  0x33  */
	'OP_PLACEHODLERR',             /*  0x33  */ // rndtrash:
//	'OP_SAVEVAR_UINT',             /*  0x34  */
	'OP_PLACE_HOLDAAAH',           /*  0x34  */ // rndtrash:
//	'OP_SUB',                      /*  0x35  */
	'OP_LOADIMMED_UINT',           /*  0x35  */ // rndtrash: from v20
	'OP_MUL',                      /*  0x36  */
	'OP_DIV',                      /*  0x37  */
	
//	'OP_NEG',                      /*  0x38  */
	'OP_TAG_TO_STR',               /*  0x38  */ // rndtrash: from v20

//	'OP_INVALID',                  /*  0x39  */
	'OP_LOADIMMED_STR',            /*  0x39  */ // rndtrash: from v20

	'OP_STR_TO_FLT',               /*  0x3A  */ // rndtrash: wow it's actually the same opcode as in Blockland v20
	'OP_END_OBJECT',               /*  0x3B  */
//	'OP_CMPLT',                    /*  0x3C  */
	'OP_CMPLE',                    /*  0x3C  */ // rndtrash: from v20
	'OP_BREAK',                    /*  0x3D  */
	'OP_SETCURVAR_CREATE',         /*  0x3E  */ // rndtrash: another match!
	'OP_SETCUROBJECT_NEW',         /*  0x3F  */
	'OP_NOT',                      /*  0x40  */ // rndtrash: matched
	'OP_NOTF',                     /*  0x41  */ // rndtrash: matched
	'OP_SETCURVAR',                /*  0x42  */ // rndtrash: matched
	'OP_SETCURVAR_ARRAY',          /*  0x43  */
	'OP_ADD',                      /*  0x44  */
	'OP_SETCURVAR_ARRAY_CREATE',   /*  0x45  */
	'OP_JMPIFNOT_NP',              /*  0x46  */
	'OP_AND',                      /*  0x47  */
	'OP_RETURN',                   /*  0x48  */ // rndtrash: another match with v20
	'OP_XOR',                      /*  0x49  */
	'OP_CMPGE',                    /*  0x4A  */
	'OP_LOADFIELD_STR',            /*  0x4B  */
	'OP_SAVEFIELD_STR',            /*  0x4C  */
	'OP_BITAND',                   /*  0x4D  */
	'OP_ONESCOMPLEMENT',           /*  0x4E  */
	'OP_ADVANCE_STR_COMMA',        /*  0x4F  */ // rndtrash: and another one
//	'OP_PUSH',                     /*  0x50  */
	'OP_ADVANCE_STR_NUL',          /*  0x50  */ // rndtrash: from v20
	'OP_FLT_TO_NONE',              /*  0x51  */ // rndtrash: matched
	'OP_CREATE_OBJECT',            /*  0x52  */
	'OP_FUNC_DECL',                /*  0x53  */ // rndtrash: another match!
];

const enums = enumerate (names);

/**
 * Checks if it's a non-filler opcode.
 *
 * @param   {integer} op
 * @returns {boolean}
 */
const isOpcode = op =>
{
	if ( typeof op === 'number' )
	{
		return has (names, op) && op !== enums.FILLER1 && op !== enums.FILLER2;
	}

	return has (enums, op) && op !== 'FILLER1' && op !== 'FILLER2';
};

/**
 * @param   {string[]} - opnames
 * @returns {Set}
 */
const createOpset = opnames =>
{
	const opcodes = [];

	const { length } = opnames;

	for ( let i = 0; i < length; i++ )
	{
		opcodes.push (enums[opnames[i]]);
	}

	return Object.freeze (new Set (opcodes));
};


export
{
	enums,
	names,

	isOpcode,
	createOpset,
};
