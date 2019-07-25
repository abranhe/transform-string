'use strict';

const title = input => {
	return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
};

const capitalize = input => {
	return input.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, letter => letter.toUpperCase());
};

const lowercase = input => {
	return input.toLowerCase();
};

const uppercase = input => {
	return input.toUpperCase();
};

const transformString = (input, options) => {
	let str = input;

	options = {
		type: 'title',
		...options
	};

	if (options.type === 'title') {
		str = title(input);
	}

	if (options.type === 'capitalize') {
		str = capitalize(input);
	}

	if (options.type === 'lowercase') {
		str = lowercase(input);
	}

	if (options.type === 'uppercase') {
		str = uppercase(input);
	}

	return str;
};

module.exports = transformString;
module.exports.title = title;
module.exports.capitalize = capitalize;
module.exports.lowercase = lowercase;
module.exports.uppercase = uppercase;
