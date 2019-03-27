$(function(){
                $('.file-panel').createFilePanel();
            });

var showdiff = function (){
                            var text1 = $('#filePanel1 .panel-body pre').text();
                            var text2 = $('#filePanel2 .panel-body pre').text();
                            var diff = diffString(text1,text2);
                            var diff = diffString(text1,text2);
                            $('#compareResult').html(diff);
                          }
