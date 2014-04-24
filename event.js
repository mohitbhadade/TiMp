var eventBody="";
var eventTitle="";

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
	return '<center><h4>'+row.title+'</h4><br/>Created On: '+row.createdon+'<br/>Due Date: '+row.dates+'</center><hr/>'
}
