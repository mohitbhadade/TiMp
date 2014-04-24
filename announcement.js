var temptitle="";
var tempbody="";

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
     return '<center><a href = "#" onclick = "announcementLoad(\''+row.nid+'\');">'+row.title+'<br/></a>Created On: '+row.createdon+'<hr/></center>'
}

function announcementLoad(nid){
	node_load(nid, {
    success: function(node) {
      temptitle=node.title;
      tempbody=node.body.und[0].value;
      drupalgap_goto(drupalgap.settings.announcement_subpage);
      }
});
	
}

function my_module_announcements_subpage_page(){
var content={};
content ['my_announcement_body']={
markup: '<center><h4>'+temptitle+'</h4><br/>'+tempbody+'<br/></center><hr/>'
};
return content;
}

