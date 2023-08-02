import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';


const names =
[
	'OP_LOADVAR_STR',              /*  0x00  */ 
	'OP_LOADVAR_FLT',              /*  0x01  */ 
	'OP_SAVEFIELD_FLT',            /*  0x02  */
	'OP_LOADFIELD_FLT',            /*  0x03  */
	'OP_UINT_TO_FLT',              /*  0x04  */
	'OP_ADVANCE_STR_NUL',          /*  0x05  */ 
	'OP_UINT_TO_STR',              /*  0x06  */
	'OP_UINT_TO_NONE',             /*  0x07  */ 
	'FILLER1',                     /*  0x08  */
	'OP_ADD_OBJECT',               /*  0x09  */ 
	'FILLER2',                     /*  0x0A  */
	'OP_CALLFUNC_RESOLVE',         /*  0x0B  */ 
	'OP_FLT_TO_UINT',              /*  0x0C  */ 
	'OP_FLT_TO_STR',               /*  0x0D  */ 
	'FILLER3',                     /*  0x0E  */ 
	'OP_LOADVAR_UINT',             /*  0x0F  */
	'OP_SAVEVAR_STR',              /*  0x10  */ 
	'OP_JMPIFNOT',                 /*  0x11  */ 
	'OP_SAVEVAR_FLT',              /*  0x12  */ 
	'OP_ADVANCE_STR_APPENDCHAR',   /*  0x13  */
	'OP_TERMINATE_REWIND_STR',     /*  0x14  */
	'OP_ADVANCE_STR',              /*  0x15  */ 
	'OP_CMPLE',                    /*  0x16  */ 
	'OP_SETCURFIELD',              /*  0x17  */ 
	'OP_SETCURFIELD_ARRAY',        /*  0x18  */
	'OP_JMPIF_NP',                 /*  0x19  */
	'OP_JMPIF',                    /*  0x1A  */ 
	'OP_JMP',                      /*  0x1B  */ 
	'OP_INVALID',                  /*  0x1C  */ 
	'OP_BITOR',                    /*  0x1D  */
	'OP_SHL',                      /*  0x1E  */
	'OP_SHR',                      /*  0x1F  */
	'OP_STR_TO_NONE',              /*  0x20  */ 
	'OP_COMPARE_STR',              /*  0x21  */ 
	'OP_STR_TO_UINT',              /*  0x22  */ 
	'OP_SETCUROBJECT',             /*  0x23  */
	'OP_PUSH_FRAME',               /*  0x24  */ 
	'OP_REWIND_STR',               /*  0x25  */ 
	'FILLER4',                     /*  0x26  */ 
	'OP_CALLFUNC',                 /*  0x27  */ 
	'OP_MOD',                      /*  0x28  */ 
	'OP_LOADFIELD_UINT',           /*  0x29  */ 
	'OP_JMPIFFNOT',                /*  0x2A  */ 
	'OP_JMPIFF',                   /*  0x2B  */ 
	'OP_SAVEVAR_UINT',             /*  0x2C  */ 
	'OP_SUB',                      /*  0x2D  */ 
	'OP_MUL',                      /*  0x2E  */
	'OP_DIV',                      /*  0x2F  */
	'OP_NEG',                      /*  0x30  */
	'OP_CMPEQ',                    /*  0x31  */
	'OP_CMPGR',                    /*  0x32  */ 
	'OP_CMPNE',                    /*  0x33  */ 
	'FILLER5',                     /*  0x34  */ 
	'OP_LOADIMMED_UINT',           /*  0x35  */ 
	'OP_LOADIMMED_FLT',            /*  0x36  */
	'OP_LOADIMMED_IDENT',          /*  0x37  */
	'OP_TAG_TO_STR',               /*  0x38  */ 
	'OP_LOADIMMED_STR',            /*  0x39  */ 
	'OP_STR_TO_FLT',               /*  0x3A  */
	'OP_END_OBJECT',               /*  0x3B  */
	'OP_CMPLT',                    /*  0x3C  */ 
	'OP_BREAK',                    /*  0x3D  */
	'OP_SETCURVAR_CREATE',         /*  0x3E  */ 
	'OP_SETCUROBJECT_NEW',         /*  0x3F  */
	'OP_NOT',                      /*  0x40  */ 
	'OP_NOTF',                     /*  0x41  */ 
	'OP_SETCURVAR',                /*  0x42  */ 
	'OP_SETCURVAR_ARRAY',          /*  0x43  */
	'OP_ADD',                      /*  0x44  */
	'OP_SETCURVAR_ARRAY_CREATE',   /*  0x45  */
	'OP_JMPIFNOT_NP',              /*  0x46  */
	'OP_AND',                      /*  0x47  */
	'OP_RETURN',                   /*  0x48  */ 
	'OP_XOR',                      /*  0x49  */
	'OP_CMPGE',                    /*  0x4A  */
	'OP_LOADFIELD_STR',            /*  0x4B  */
	'OP_SAVEFIELD_STR',            /*  0x4C  */
	'OP_BITAND',                   /*  0x4D  */
	'OP_ONESCOMPLEMENT',           /*  0x4E  */
	'OP_ADVANCE_STR_COMMA',        /*  0x4F  */ 
	'OP_PUSH',                     /*  0x50  */ 
	'OP_FLT_TO_NONE',              /*  0x51  */ 
	'OP_CREATE_OBJECT',            /*  0x52  */
	'OP_FUNC_DECL',                /*  0x53  */ 
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
