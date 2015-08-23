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

  <br /><br />

  **Like my Work? Although this is 100% free to use, but if you're feeling generous then you can**
  <br /><br />
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>

 
