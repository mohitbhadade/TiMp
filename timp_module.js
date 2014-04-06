var introData="";
introData += "<p>Software architecture deals with the problem of building large scale software and ensuring 'quality'.";
introData += "<\/br>";
introData += "Quality of a software is described through Quality Attributes, like modifiability, performance, security,..";
introData += "<\/br>";
introData += "In course we will discuss three aspects of software architecture:";
introData += "<ul>";
introData += "    <li>Designing an Architecture<\/li>";
introData += "    <li>Describing an Architecture<\/li>";
introData += "    <li>Evaluating an Architecture<\/li>";
introData += "<\/ul>";
introData += "Software architecture will be discussed in the context of a contemporary computing platforms - the User Interface is on a mobile phone and the service is hosted on the Cloud <\/p>";

var lectureUrl = "";

var strHomeHtml="";
//strHomeHtml += "<p><a href=/""+lectures+"/"> Lectures</a>";
//strHomeHtml += "<p><a href=/""+forums+"/"> Forums</a>";


function my_module_menu() {
 	
  var items = {};
  items['my_login_page'] = {
    title: 'TALIM CS654',
    page_callback: 'my_module_login_page'
  };
   
  items['my_home'] = {
  	title: 'Welcome',
  	page_callback: 'my_module_home_page'
  	
  };
 
  items['my_lectures'] = {
    title: 'Lectures List',
    page_callback: 'my_module_lectures_page'
  }; 
  
  items['my_forums'] = {
    title: 'Forum List',
    page_callback: 'my_module_forums_page'
  };
  
  items['my_wikis'] = {
      title: 'Wiki Page',
      page_callback: 'my_module_wikis_page'
  };
	
  items['my_events'] = {
      title: 'Events Page',
      page_callback: 'my_module_events_page'
  };
	   
  items['my_announcements'] = {
      title: 'Announcements Page',
      page_callback: 'my_module_announcements_page'
  };
    
  items['my_forums_subpage']={
  title: 'Checking Subpage',
  page_callback: 'my_module_forums_subpage_page'
  };
  
  items['my_video_play']={
  title: 'Lecture Video',
  page_callback: 'my_module_lecture_video_page',
  //'page_hide': 'my_module_delete_video_page'
  };
  
  items['create_new_forum']={
  	  title:'New Forum',
      page_callback:'drupalgap_get_form',
      page_arguments:['my_module_create_forum_form']
  };
  
  return items;
}

/**
* The callback for the "Hello World" page.
*/
function my_module_login_page() {
  //alert('I am in My_module_homep');
  var content = {};
  content['my_heading'] = {
    markup: '<p><h1>Software Architecture</h1></p><hr></hr>'
  };
 
  content['my_paragraph'] = {
    	markup: introData
  };
  //page_callback : 'my_module_hello_world'
  return content;
}

function my_module_home_page(){

 var content = {};
 content['home_page_list'] = { 
 markup:'<a onclick="javascript:drupalgap_goto(drupalgap.settings.lectures);">Lectures</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.forums);">Forums</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.wikis);">Wikis</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.events);">Events</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.announcements);">Announcements</a><br/><hr/>'
 
 };
 
 return content;
}

function my_module_lectures_page() {
  var content = {};
    //alert('inside ');
    content['my_lectures_list'] = {
    theme: 'view',
    //format: 'ul',
    format: 'table',
 	path: 'my-lectures/json', /* the path to the view in Drupal */
    //markup: '<table>',
    
    row_callback: 'my_module_lectures_page_row',
    
    attributes: {
      id: 'my_lectures_view'
    }
  };
  return content;
}

function my_module_forums_page(){
//alert('I am in My_module_forump');
var content = {};
content['create_forum'] = {
markup: '<button onclick="javascript:new_forum_create()">Add a Question</button><br/>'
};
content['my_forum_list'] = {
	theme: 'view',
    format: 'ul',
    //format: 'table',
    path: 'my-forums/json', /* the path to the view in Drupal */
    //markup: '<table>',
    row_callback: 'my_module_forums_page_row',
    
    attributes: {
      id: 'my_forums_view'
    }
  };
  return content;

}

function new_forum_create(){
drupalgap_goto(drupalgap.settings.create_forum);
}


function my_module_forums_subpage_page(){
alert('inisde');
var content={};
content['my_forum_sublist']={
	 theme: 'view',
    format: 'ul',
    //format: 'table',
    path: 'drupalgap/views_datasource/drupalgap_content/json', /* the path to the view in Drupal */
    //markup: '<table>',
   row_callback: 'my_module_sampleforumview_row',
    
    attributes: {
      id: 'sampleforumview_view'
    }
};
return content;
}

function my_module_sampleforumview_row(){

return '</br>'+row.add_comment_link+'</br>'+row.comment_count+'</br>'+row.last_comment_author+'/br';
}



function my_module_wikis_page(){
//alert('I am in My_module_wiki_page');
var content = {};
content['my_wiki_list'] = {
    theme: 'view',
    //format: 'ul',
    format: 'table',
    path: 'my_wikis/json', /* the path to the view in Drupal */
    //markup: '<table>',
    row_callback: 'my_module_wikis_page_row',
    
    attributes: {
      id: 'my_wikis_view'
    }
  };
  return content;

}

function my_module_events_page(){
//alert('I am in My_module_events_page');
var content = {};
content['my_event_list'] = {
    theme: 'view',
    format: 'ul',
    //format: 'table',
    path: 'my_events/json', /* the path to the view in Drupal */
    //markup: '<table>',
    row_callback: 'my_module_events_page_row',
    
    attributes: {
      id: 'my_events_view'
    }
  };
  return content;

}

function my_module_announcements_page(){
//alert('I am in My_module_announcements_page');
var content = {};
content['my_announcement_list'] = {
    theme: 'view',
    format: 'ul',
    //format: 'table',
    path: 'my_announcements/json', /* the path to the view in Drupal */
    //markup: '<table>',
    row_callback: 'my_module_announcements_page_row',
    
    attributes: {
      id: 'my_announcements_view'
    }
  };
  return content;

}

function my_module_lecture_video_page(){
	var content = {};
	alert(lectureUrl);
	//content['my_video'] = {
		//markup: '<iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=qYvTCiMKzBY?width=640px&amp;height=360px&amp;theme=dark&amp;autoplay=0&amp;hd=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1&amp;iv_load_policy=1&amp;autohide=2&amp;start=0&amp;wmode=opaque" frameborder="0" allowfullscreen></iframe>'
//	};
  	var htmlvideocode='<div class="embedded-video">';
	htmlvideocode+='<div class="player"><iframe width="100%" height="360px" src="'+lectureUrl+'" frameborder="0" allowfullscreen></iframe>  </div></div></div>';
	content='<br\>'+htmlvideocode;
	return content;
}


function my_module_lectures_page_row(view, row) {
		
	var ht= '<br/><td>'+row.title+'<br/>';
	var str = row.pdfdownload;
	
	while(str.search("files")!=-1){			
		var pos = str.search("files");
		var filename = str.slice(pos+6, str.search("pdf")+3);
		ht += '<button onclick="pdfDownload(\''+filename+'\');">'+filename+'</button></td>';
		pos = str.search(",");
		if(pos != -1)
			str = str.slice(pos+1);
		else
			break;		
	}
	ht += '<br/><a href="#" onclick="videoPlay(\''+row.video_new+'\')">View Lecture('+row.length+')</a>';
	return ht+'<hr/>';
	//return '<br/><td>'+row.title+'<br/><button onclick="pdfDownload(\''+str+'\',\''+str1+'\');">'+str1+'</button></td><hr/>';
}

function videoPlay(youtubeUrl){
	lectureUrl = youtubeUrl;
	lectureUrl = lectureUrl.replace("watch?v=", "embed/");
	drupalgap_goto(drupalgap.settings.video_play, {reloadPage:true});
}

// <button onclick="pdfDownload('http://file.com/file.pdf','file.pdf')">

function my_module_forums_page_row(view, row) {
	//return '<br/>'+l(row.title,drupalgap.settings.forums_subpage) +'<br/>New comments :'+ row.newcomments;
	return '<hr/><br/> <a href="node/"'+row.nid+'" onclick="javascript:node_load(\''+row.nid+'\')">'+row.title+'</a><br/>'+row.last_cmnt_author;
}



function my_module_wikis_page_row(view, row) {
 
    return '<br/>'+l(row.title,'');
 
}

function my_module_events_page_row(view, row) {
	return '<br/>'+l(row.title,'node/'+row.nid) +'<br/>Created On :'+ row.createdon;
 
}

function my_module_announcements_page_row(view, row) {
     return '<br/>'+l(row.title,'node/'+row.nid) +'<br/>Created On:'+ row.createdon;
}


function my_module_block_info() {
  var blocks = {
    my_custom_block:{
      delta:'my_custom_block',
      module:'my_module',
    },
  };
  return blocks;
}

/**
 * Implements hook_block_view().
 */
function my_module_block_view(delta) {
  var content = '';
  if (delta == 'my_custom_block') {
    // Show today's date for the block's content.
    //var d = new Date();
    var link = l('Home', drupalgap.settings.home, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Lectures', drupalgap.settings.lectures, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Forums', drupalgap.settings.forums, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Events', drupalgap.settings.events, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    
    content = '<center>' + link + '</center>';
  }
  return content;
}

function pdfDownload(filename) {
var link="http://10.0.2.2/www/sites/default/files/"+filename;
alert(link);
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
alert('call done');
}

/**
 * Defining the create forum form.
 */
function my_module_create_forum_form(form, form_state) {
  alert('fdg');
  form.elements.question = {
    type:'textarea',
    title:'Add Question Title',
    required:true
  };
  form.elements.summary = {
    type:'textarea',
    title:'Add Summary',
    required:false
  };
  form.elements.create = {
    type:'submit',
    value:'Create Forum'
  };
  return form;
  }

/**
 * Defining the "create_forum" form's validation function (optional).
 */
function my_module_create_forum_form_validate(form, form_state) {
  // Inform the user that he/she can not leave question empty
  if (form_state.values.question == '') {
    drupalgap_form_set_error('question', 'Sorry, please enter question!');
  }
}

/**
 * Define the "create_forum" form's submit function.
 */
function my_module_create_forum_form_submit(form, form_state) {
  alert('Question :' + form_state.values.question );
  var node = {
  title:form_state.values.question,
  body:form_state.values.summary,
  type:'forum'
};
node_save(node, {
  success:function(result) {
    alert("Saved forum #" + result.nid);
  }
});

}