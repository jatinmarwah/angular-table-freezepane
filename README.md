# Angular based directive for excel like freeze pane V1.0
This is a angular based excel like freeze pane of table, you can view demo <a href="https://jatinmarwah.github
.io/angular-table-freezepane/app/#/" target=
"_blank">here</a>

Download the project and to use this directive make sure to include the following files into your work space:<br />
<b>1) directive/freezepane.js <br /><br /></b>
<b>2) template/directive_template/freezepane.html /*Make sure to keep the directory as is from root folder, else change 
the directive path in freezepane.js */<br /><br /></b>
<b>3) styles/freezepane.css <br /></b>

Include "freezepaneModule" as a dependancy to your angular module.

<!--Include the following directive-->
<tablefreeze tableId="table1" freezeRows="1" freezeCols="1" tableTemplateUrl="template/table_template/table.html"></tablefreeze>
<br />
The "tablefreeze" directive has following attributes: <br />
a) tableId = Pass the table ID you wish to apply freeze pane on<br />
b) freezeRows = No of rows that needs to be frozen<br />
c) freezeCols = No of columns that needs to be frozen<br />
d) tableTemplateUrl = Path to your table template from root directory<br />
<br /><br />
You can generate excel like "freezepane" on multiple tables in your application or within the same page, just pass 
the table id and template. 


 
