'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const email = document.getElementById('text-convert').firstChild;

	email.nodeValue = email.nodeValue
		.replace(' ', '[at]')
		.replaceAll(' ', '[dot]')
		.replaceAll(new RegExp('[pppywicppyws]', 'g'), '')
		.replace('zz', 'bowdoin')
		.replace('q', 'edu');
});
