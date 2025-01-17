STORAGIFY
=========

Usage
-----

First include the latest version of jQuery  

``` html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
```  

Next, download and include Storagify  

``` html
<script src="/path/to/jquery.storagify.min.js"></script>
```

Last but not least, call Storagify on whatever elements you wish to editable.

``` javascript 
$('#theElement').storagify({storageKey:'storageKey'});
```

+	$('#element') is the element you want the HTML5 contentEditable attribute to placed on
+	The 'storageKey' is what will the element's key will be in localStorage
+	For a list of options you can pass please refer to the [API &amp; Options Section of the Website](http://ek.alphaschildren.org/resources/jquery-plugins/storagify/#api-options)

__That's it! Have Fun!__

Bug Reporter & Feature Requests
------------

Please report any bugs here on Github. 

[http://github.com/ekdevdes/Storagify/issues](http://github.com/ekdevdes/Storagify/issues)

Thank you.

Contributing
------------

If you would like to contribute to Storagify please do the following:

+	Fork this repo
+	Make your changes
+	Update example/index.html (the docs) with your change
+	Minify the javascript
+	Send me a pull request

Thank you :)

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