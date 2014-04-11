var lectureUrl = "";

function my_module_lectures_page() {
	var content = {};
    
    content['my_lectures_list'] = {
    	theme: 'view',
    	//format: 'ul',
    	format: 'table',
 		path: 'my-lectures/json', 
		row_callback: 'my_module_lectures_page_row',
   		
   		attributes: {
      		id: 'my_lectures_view'
    	}
  	};
  	
  	return content;
}

function my_module_lecture_video_page(){
	var content = {};
  	var htmlvideocode='<div class="embedded-video">';
	htmlvideocode+='<div class="player"><iframe width="100%" height="360px" src="'+lectureUrl+'" frameborder="0" allowfullscreen></iframe>  </div></div></div>';
	content='<br\>'+htmlvideocode;
	return content;
}


function my_module_lectures_page_row(view, row) {
		
	var ht= '<br/><center><td>'+row.title+'<br/>';
	var str = row.pdfdownload;
	
	while(str.search("files")!=-1){			
		var pos = str.search("files");
		var filename = str.slice(pos+6, str.search("pdf")+3);
		ht += '<a href="#" onclick="pdfDownload(\''+filename+'\');">'+filename+'</a><br/>';
		pos = str.search(",");
	
		if(pos != -1)
			str = str.slice(pos+1);
		else
			break;		
	}
	
	ht += '<br/><a href="#" onclick="videoPlay(\''+row.video_new+'\')">View Lecture('+row.length+')</a>';
	return ht+'<hr/></center>';
}

function videoPlay(youtubeUrl){
	lectureUrl = youtubeUrl;
	lectureUrl = lectureUrl.replace("watch?v=", "embed/");
	drupalgap_goto(drupalgap.settings.video_play, {reloadPage:true});
}


function pdfDownload(filename) {
var link="http://10.0.2.2/www/sites/default/files/"+filename;
var fileTransfer = new FileTransfer();

fileTransfer.download(
	link,
    "file:///mnt/sdcard/"+filename,
    function(error) {
    	console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code: " + error.code);
    }
);

}

