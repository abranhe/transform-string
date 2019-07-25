import { expectType } from 'tsd';
import transformString = require('.');
import { title, capitalize, uppercase, lowercase } from '.';

const options: transformString.Options = {};

expectType<String>(transformString('Lorem'));
expectType<String>(title('Lorem'));
expectType<String>(capitalize('Lorem'));
expectType<String>(uppercase('Lorem'));
expectType<String>(lowercase('Lorem'));
