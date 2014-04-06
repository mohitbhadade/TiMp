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
	return '<hr/><br/> <a href="node/"'+row.nid+'" onclick="javascript:node_load(\''+row.nid+'\')">'+row.title+'</a><br/>'+row.last_cmnt_author;
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