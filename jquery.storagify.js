/*
	Storagify jQuery Plugin (C) 2011 Ethan Kramer
	
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
*/



(function ($){

	//name our plugin after "$.fn.". in this case our plugin name is simpleSpy
	$.fn.storagify = function(options){
		
		var defaults = {
					onStart:function(){},
					onExit:function(){},
					storageKey:'storageKey',
					revert:false
				},
			settings = $.extend({},defaults,options);
		
		return this.each(function(){
			var $this = $(this),
				$text = $this.text(),
				origKey = "orig" + settings.storageKey;
				
			localStorage.setItem(origKey,$text);
			
			$this.attr('contenteditable','');
			
			if(settings.revert){
				$this.text(localStorage.getItem(origKey));
			}else{
				$this.text(localStorage.getItem(settings.storageKey));
			}
			
			$this.focus(function(){
				var focusText = $this.text();
				
				$this.addClass("sf-focus");
				
				settings.onStart.apply(this,[$(this),focusText]);
				
			});
			
			$this.blur(function(){
				var blurText = $this.text();
				
				$this.removeClass("sf-focus");
				$this.addClass("sf-blur");
				
				settings.onExit.apply(this,[$(this),blurText]);
				
				localStorage.setItem(settings.storageKey,$this.text());
				
				$this.removeClass("sf-blur");
			});
		});
	};

})(jQuery);