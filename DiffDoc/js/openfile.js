    var openFile   = function(event) {
    var filePath   = event.target.files[0];
    var $filePanel = $(event.target).parent('.file-panel');
    var reader     = new FileReader();
    reader.onload  = function(){
                                var $previewNode= $filePanel.find('.panel');
                                var fileData = reader.result;
                                console.log('fileDataLength:'+fileData.length);
                                $previewNode.find('.panel-body pre').text(fileData);

                                $previewNode.find('.panel-heading').html(filePath.name);
                                $previewNode.find('.panel-footer').html(getFileDetails(filePath));
                                console.log('done['+filePath.name+']');
                            };
    reader.readAsText(filePath);
  };
  var dateOptions = {
                    weekday: "long", year: "numeric", month: "short",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                    };
  var getFileDetails = function(fileObj){
                                         if(fileObj == undefined || fileObj == null) return "";
                                         var details  = " <span class='badge label-info  '>Type: "+fileObj.type+"</span>";
                                         details += " <span class='badge label-info  '>Size: "+fileObj.size+" Bytes </span>";
                                         details += "<span class='badge'>Last modified: "+new Date(fileObj.lastModifiedDate).toLocaleTimeString("en-us",dateOptions)+"</span>";
                                         return details;
                                        }