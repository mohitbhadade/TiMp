var tempwikititle='';
var tempwikibody='';

function my_module_wikis_page(){
var content = {};
content['search']= {
markup: '<button onclick="javascript:new_wiki_create()">Create New Wiki</button><br/>'
};

content['my_wiki_list'] = {
    theme: 'view',
    format: 'ul',
    //format: 'table',
    path: 'my_wikis/json',
    //markup: '<table>',
    row_callback: 'my_module_wikis_page_row',
    
    attributes: {
      id: 'my_wikis_view'
    }
  };
  return content;

}

function new_wiki_create(){
var page_id = drupalgap_get_page_id(drupalgap.settings.create_wiki);
drupalgap_remove_page_from_dom(page_id);
drupalgap_goto(drupalgap.settings.create_wiki);
}

function my_module_wikis_page_row(view, row) {
	var temp=JSON.stringify(row.body);
	var temp1 ='madhav';
	var temp2=JSON.stringify(temp1);
    return '<br/><a href="#" onclick="my_wiki_subpage_show(\''+row.nid+'\')">'+row.title+'</a><hr/>';
}

function my_wiki_subpage_show(wikinid){

node_load(wikinid, {
    success: function(node) {
      tempwikititle=node.title;
      tempwikibody=node.body.und[0].value;
      alert('Loaded ' + node.title);
    }
});

drupalgap_goto(drupalgap.settings.wiki_subpage, {reloadPage:true} );
}  

function my_module_wikis_subpage_page(){
var content = {};
	content['wiki_content'] = {
 			markup: '<br/><h3>'+tempwikititle+'</h3><hr/><br/>'+tempwikibody+'<br/><hr/>'
	};
	tempwikititle = '';
	tempwikibody = '';
	return content;
}


function my_module_create_wiki_form(form, form_state) {
  form.elements.wikititle = {
    type:'textfield',
    title:'Title',
    required:true
  };
  form.elements.wikibody = {
    type:'textarea',
    title:'Body',
    required:false
  };
  form.elements.create = {
    type:'submit',
    value:'Create Wiki'
  };
  return form;
  }


/*function my_module_create_wiki_form_validate(form, form_state) {
  if (form_state.values.wikititle == '') {
    drupalgap_form_set_error('wikititle', 'Sorry, please enter title!');
  }
}*/


function my_module_create_wiki_form_submit(form, form_state) {
  //alert('Question :' + form_state.values.question );
  var body_sub={
    	"und":[
      	{
        	"value":form_state.values.wikibody,
        	"summary":"",
        	"format":"filtered_html",
        	"safe_value":"",
        	"safe_summary":""
      	} 
      	
    	]
  	};
  
  var node = {
  title:form_state.values.wikititle,
  body:body_sub,
  type:'wiki_page'
};
node_save(node, {
  success:function(result) {
    alert("Saved wiki #" + result.nid);
  }
});

form_state.values.wikititle='';
form_state.values.wikibody='';

}