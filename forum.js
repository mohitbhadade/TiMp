var tempforumtitle="";
var tempforumbody="";

function my_module_forums_page(){
	var content = {};
	content['create_forum'] = {
		markup: '<button onclick="javascript:new_forum_create()">Add a Question</button><br/>'
	};
	
	content['my_forum_list'] = {
		theme: 'view',
    	format: 'ul',
  		path: 'my-forums/json', 
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

function my_module_forums_page_row(view, row) {
	var html = '<br/> <a href="#" onclick="my_comment_create(\''+row.nid+'\')">'+row.title+'('+row.newcomments+')</a>';
	html += '<br/> <a href = "#" onlclick = "userProf(\''+row.author_uid+'\')" >Author</a><br/>Last Comment by:' + row.last_cmnt_author + '</a><hr/>';
	return html;
	//return '<br/>'+row.title;
} 

function userProf(auid){
    user_load(auid, {
        success: function(account) {
          // Determine the incoming arguments, and set defaults if necessary.
          var view_mode = 'full';
          var langcode = null;
          if (arguments[1]) { view_mode = arguments[1]; }
          if (arguments[2]) { langcode = arguments[2]; }
          if (!langcode) { langcode = language_default(); }
          if (account) {
            var build = {
              'theme': 'user_profile',
              'account': account,
              'view_mode': view_mode,
              'language': langcode,
              'name': {'markup': account.name},
              'created': {
                markup:
                  (new Date(parseInt(account.created) * 1000)).toDateString()
              }
            };
            // Any picture?
            if (account.picture && account.picture.fid) {
              build.picture = {
                'theme': 'image',
                'path': account.picture.url
              };
            }
            _drupalgap_entity_page_container_inject(
              'user', account.uid, 'view', build
            );
          }
        }
    });
}

function my_comment_create(forumnid){
	node_load(forumnid, {
    success: function(node) {
      tempforumtitle=node.title;
      tempforumbody=node.body.und[0].value;
      alert('Loaded ' + node.title);
    }
});
	drupalgap_goto(drupalgap.settings.forums_subpage, {reloadPage:true});
}

function my_module_forums_subpage_page(){
	
	var content={};
	/*node = node_load(402);
	alert(node.nid);
	return comment_load_multiple(comment_get_thread(node, '', 100));
	alert(comment_retrieve(402)); */

	content['my_forum_body'] = {
		markup: '<p><h3>'+tempforumtitle+'</p></h3><hr/><br/>Summary - '+tempforumbody+'<br/><hr/>Comments - <br/><hr/>'
	};

	content['my_comment_list'] = {
		theme: 'view',
    	format: 'ul',
    	path: 'drupalgap/views_datasource/drupalgap_comments', 
    	row_callback: 'my_module_forum_comments_page_row',
    
   		attributes: {
      		id: 'drupalgap_comments_view'
   		}
  	};
  	return content;
}


function my_module_forum_comments_page_row(view,row){
	if(row.title==tempforumtitle)
		return '<br/>'+row.name+' says : '+row.comment_body+'<br/><h4>Created on :</h4>'+row.created'<hr/>';
	else
		return '';
}

function my_module_create_forum_form(form, form_state) {
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


function my_module_create_forum_form_validate(form, form_state) {
 	 if (form_state.values.question == '') {
    	drupalgap_form_set_error('question', 'Sorry, please enter question!');
  	 }
}


function my_module_create_forum_form_submit(form, form_state) {
	  var body_sub={
    	"und":[
      	{
        	"value":form_state.values.summary,
        	"summary":"",
        	"format":"filtered_html",
        	"safe_value":"",
        	"safe_summary":""
      	}
      	
    	]
  	};
  
  	var node = {
  	title:form_state.values.question,
  	body:body_sub,
  	type:'forum'
	};

	node_save(node, {
  		success:function(result) {
    		alert("Saved forum");
  		}
	});
}