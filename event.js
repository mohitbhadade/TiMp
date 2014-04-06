function my_module_events_page(){

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

function my_module_events_page_row(view, row) {
	return '<br/>'+l(row.title,'node/'+row.nid) +'<br/>Created On :'+ row.createdon;
 
}
