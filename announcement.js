function my_module_announcements_page(){

var content = {};
content['my_announcement_list'] = {
    theme: 'view',
    format: 'ul',
    path: 'my_announcements/json', 
    row_callback: 'my_module_announcements_page_row',
    attributes: {
      id: 'my_announcements_view'
    }
  };
  return content;

}

function my_module_announcements_page_row(view, row) {
     return '<br/>'+l(row.title,'node/'+row.nid) +'<br/>Created On:'+ row.createdon;
}

