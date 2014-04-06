function my_module_wikis_page(){
var content = {};
content['search']= {
markup: '<button onclick="javascript:new_wiki_create()">Create New Wiki</button><br/>'
};

content['my_wiki_list'] = {
    theme: 'view',
    //format: 'ul',
    format: 'table',
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
drupalgap_goto(drupalgap.settings.create_wiki);
}

function my_module_wikis_page_row(view, row) {
 
    return '<br/>'+row.title+'<hr/>'
 
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
  var node = {
  title:form_state.values.wikititle,
  body:form_state.values.wikibody,
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