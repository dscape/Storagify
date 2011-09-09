STORAGIFY
=========

Usage
-----

`$('#element').storagify({
	storageKey:'storageKey'
})`

+	`$('#element')` is the element you want the HTML5 contentEditable attribute to placed on
+ 	The 'storageKey' is what will the element's key will be in `localStorage`

I have added two new options to Storagify `onStart` and `onExit`. Both options are functions. 

The `onStart` event called when the element the element in question has focus. 
The `onExit` event is called after the user is done editing the element in question and it has lost focus.

Ideas

The `onExit` event would be a good place to do a AJAX call to your server with the new title of the element in question. For example, you could use Storagify to posts on a blog and you could use Storagify's `onExit` event to send the new title of the blog title of the blog post or the new post body of the blog post up to your server via AJAX


The `onStart` event

$('#element').storagify({
	storageKey:'storageKey',
	onStart:function(){
		alert('hello');
	}
});

The `onExit` event

$('#element').storagify({
	storageKey:'storageKey',
	onExit:function(){
		alert('hello');
	}
});

Oh, and the `onStart` and the `onExit` events can be used together, and the `storageKey` option is required.

The `onStart` event & The `onExit` event

$('#element').storagify({
	storageKey:'storageKey',
	onStart:function(){
		alert('hello');
	},
	onExit:function(){
		alert('hello');
	}
});

Todo
----

+	Better documentation...I Promise
+ 	Update example/index.html with the new changes made to Storagify

Credits
-------

Anyone that uses this plugin, I would much appreciate it if you emailed me (at ethankr@comcast.net) the URL of the site you are going to use Storagify on and (optionally) a logo for your site that I may use on Storagify's website when I create it. 

Thank you.

License
-------

STORAGIFY IS DOUBLE LICENSED UNDER THE MIT LICENSE AND GPL LICENSE

MIT LICENSE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

GPL LICENSE

A jquery plugin for simple page editing that uses HTML5 content editable and HTML5 localStorage
	Copyright (C) 2011  Ethan Kramer

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.