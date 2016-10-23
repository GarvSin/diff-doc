$(function(){
	jQuery.fn.extend({
		createFilePanel:function (){
				  $(this).empty().append( '<input type="file" accept="all" onchange="openFile(event)"><br>'
										  +'<div class="panel panel-default">'
										  +'<div class="panel-heading"></div>'
										  +'<div class="panel-body pre-scrollable"><pre></pre></div>'
										  +'<div  class="panel-footer"></div>'
										  +'</div>');
			}
	});
});

