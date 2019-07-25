import test from 'ava';
import transformString, {title, capitalize, lowercase, uppercase} from '.';

test('Check title', t => {
	t.is(transformString('Lorem ipsum dolor sit amet'), 'Lorem ipsum dolor sit amet');
	t.is(title('Lorem ipsum dolor sit amet'), 'Lorem ipsum dolor sit amet');
});

test('Check capitalize', t => {
	t.is(transformString('Lorem ipsum dolor sit amet', {type: 'capitalize'}), 'Lorem Ipsum Dolor Sit Amet');
	t.is(capitalize('Lorem ipsum dolor sit amet'), 'Lorem Ipsum Dolor Sit Amet');
});

test('Check lowercase', t => {
	t.is(transformString('Lorem ipsum dolor sit amet', {type: 'lowercase'}), 'lorem ipsum dolor sit amet');
	t.is(lowercase('Lorem ipsum dolor sit amet'), 'lorem ipsum dolor sit amet');
});

test('Check uppercase', t => {
	t.is(transformString('Lorem ipsum dolor sit amet', {type: 'uppercase'}), 'LOREM IPSUM DOLOR SIT AMET');
	t.is(uppercase('Lorem ipsum dolor sit amet'), 'LOREM IPSUM DOLOR SIT AMET');
});
