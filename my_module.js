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
      page_callback: 'my_module_wikis_page',
      options:{
        reloadPage:true
      }
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
  title: 'Forum',
  page_callback: 'my_module_forums_subpage_page',
  options:{
        reloadPage:true
      }
  };
  
  items['my_video_play']={
  title: 'Lecture Video',
  page_callback: 'my_module_lecture_video_page',
  //'page_hide': 'my_module_delete_video_page'
  
  
  };
  
  items['create_new_forum']={
  	  title:'New Forum',
      page_callback:'drupalgap_get_form',
      page_arguments:['my_module_create_forum_form'],
      options:{
        reloadPage:true
      }
  
  };
  
  items['create_new_wiki']={
  	  title:'New Wiki',
      page_callback:'drupalgap_get_form',
      page_arguments:['my_module_create_wiki_form']
  };
  
  items['my_wikis_subpage']={
  title: 'Wiki',
  page_callback: 'my_module_wikis_subpage_page',
  options:{
        reloadPage:true
      }
  };
  
  items['my_post_comment'] = {
  	title: 'Post Comment',
  	page_callback:'drupalgap_get_form',
    page_arguments:['my_module_post_comment_form']
  };
  
  return items;
}

function my_module_login_page() {
  var content = {};
  content['my_heading'] = {
    markup: '<p><h1>Software Architecture</h1></p><hr></hr>'
  };
 
  content['my_paragraph'] = {
    	markup: introData
  };

  return content;
}

function my_module_home_page(){
	var content = {};
 	
 	content['home_page_list'] = { 
 	markup:'<a onclick="javascript:drupalgap_goto(drupalgap.settings.lectures);">Lectures(Learn)</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.forums);">Forums(Discuss)</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.wikis);">Wikis(Create)</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.events);">Events(Orgnize)</a><br/><hr/><a onclick="javascript:drupalgap_goto(drupalgap.settings.announcements);">Announcements</a><br/><hr/>'
 	};
 	
 	return content;
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

function my_module_block_view(delta) {
  var content = '';
  if (delta == 'my_custom_block') {
    var link = l('Home', drupalgap.settings.home, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Lectures', drupalgap.settings.lectures, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Forums', drupalgap.settings.forums, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    link += l('Events', drupalgap.settings.events, { InAppBrowser: false, attributes: { 'data-role': 'button' } });
    content = '<center>' + link + '</center>';
  }

  return content;
}

