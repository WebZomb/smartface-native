Ext.data.JsonP.UI_DatePicker({"tagname":"class","name":"UI.DatePicker","autodetected":{},"files":[{"filename":"analysis.js","href":null}],"since":"0.1","members":[{"name":"cancelColor","tagname":"property","owner":"UI.DatePicker","id":"property-cancelColor","meta":{"ios":true}},{"name":"cancelFont","tagname":"property","owner":"UI.DatePicker","id":"property-cancelFont","meta":{"ios":true}},{"name":"cancelHighlightedColor","tagname":"property","owner":"UI.DatePicker","id":"property-cancelHighlightedColor","meta":{"ios":true}},{"name":"cancelText","tagname":"property","owner":"UI.DatePicker","id":"property-cancelText","meta":{"ios":true}},{"name":"datePickerMode","tagname":"property","owner":"UI.DatePicker","id":"property-datePickerMode","meta":{"ios":true}},{"name":"okColor","tagname":"property","owner":"UI.DatePicker","id":"property-okColor","meta":{"ios":true}},{"name":"okFont","tagname":"property","owner":"UI.DatePicker","id":"property-okFont","meta":{"ios":true}},{"name":"okHighlightedColor","tagname":"property","owner":"UI.DatePicker","id":"property-okHighlightedColor","meta":{"ios":true}},{"name":"okText","tagname":"property","owner":"UI.DatePicker","id":"property-okText","meta":{"ios":true}},{"name":"style","tagname":"property","owner":"UI.DatePicker","id":"property-style","meta":{"android":true}},{"name":"title","tagname":"property","owner":"UI.DatePicker","id":"property-title","meta":{"ios":true}},{"name":"titleColor","tagname":"property","owner":"UI.DatePicker","id":"property-titleColor","meta":{"ios":true}},{"name":"titleFont","tagname":"property","owner":"UI.DatePicker","id":"property-titleFont","meta":{"ios":true}},{"name":"setDate","tagname":"method","owner":"UI.DatePicker","id":"method-setDate","meta":{"android":true,"ios":true}},{"name":"setMaxDate","tagname":"method","owner":"UI.DatePicker","id":"method-setMaxDate","meta":{"android":true,"ios":true}},{"name":"setMinDate","tagname":"method","owner":"UI.DatePicker","id":"method-setMinDate","meta":{"android":true,"ios":true}},{"name":"show","tagname":"method","owner":"UI.DatePicker","id":"method-show","meta":{"android":true,"ios":true}},{"name":"onCancelled","tagname":"event","owner":"UI.DatePicker","id":"event-onCancelled","meta":{"android":true,"ios":true}},{"name":"onDateSelected","tagname":"event","owner":"UI.DatePicker","id":"event-onDateSelected","meta":{"android":true,"ios":true}}],"alternateClassNames":[],"aliases":{},"id":"class-UI.DatePicker","short_doc":"DatePicker is a dialog where users are able to pick a date on. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>DatePicker is a dialog where users are able to pick a date on.</p>\n\n<pre class='inline-example '><code>const DatePicker = require('sf-core/ui/datepicker');\nvar myDatePicker = new DatePicker();\nmyDatePicker.onDateSelected = function(date) {\n    <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>('Year: ' + date.getFullYear() + ' Month: ' + date.getMonth() + ' Day' + date.getDate());\n};\nmyDatePicker.show();\n</code></pre>\n        <p>Available since: <b>0.1</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cancelColor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-cancelColor' class='name expandable'>cancelColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets cancelColor of the picker. ...</div><div class='long'><p>Gets/sets cancelColor of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-cancelFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-cancelFont' class='name expandable'>cancelFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets cancelFont of the picker. ...</div><div class='long'><p>Gets/sets cancelFont of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-cancelHighlightedColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-cancelHighlightedColor' class='name expandable'>cancelHighlightedColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets cancelHighlightedColor of the picker. ...</div><div class='long'><p>Gets/sets cancelHighlightedColor of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-cancelText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-cancelText' class='name expandable'>cancelText</a> : String<span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets cancelText of the picker. ...</div><div class='long'><p>Gets/sets cancelText of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-datePickerMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-datePickerMode' class='name expandable'>datePickerMode</a> : <a href=\"#!/api/UI.DatePicker.iOS.DatePickerMode\" rel=\"UI.DatePicker.iOS.DatePickerMode\" class=\"docClass\">UI.DatePicker.iOS.DatePickerMode</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'><p>The mode determines whether dates, times, or both dates and times are displayed.</p>\n</div><div class='long'><p>The mode determines whether dates, times, or both dates and times are displayed.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-okColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-okColor' class='name expandable'>okColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets okColor of the picker. ...</div><div class='long'><p>Gets/sets okColor of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-okFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-okFont' class='name expandable'>okFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets okFont of the picker. ...</div><div class='long'><p>Gets/sets okFont of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-okHighlightedColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-okHighlightedColor' class='name expandable'>okHighlightedColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets okHighlightedColor of the picker. ...</div><div class='long'><p>Gets/sets okHighlightedColor of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-okText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-okText' class='name expandable'>okText</a> : String<span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets okText of the picker. ...</div><div class='long'><p>Gets/sets okText of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-style' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-style' class='name expandable'>style</a> : <a href=\"#!/api/UI.DatePicker.Android.Style\" rel=\"UI.DatePicker.Android.Style\" class=\"docClass\">UI.DatePicker.Android.Style</a><span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'><p>According to your requirements, this property enables you to specify native built-in styles.</p>\n</div><div class='long'><p>According to your requirements, this property enables you to specify native built-in styles.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets title of the picker. ...</div><div class='long'><p>Gets/sets title of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-titleColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-titleColor' class='name expandable'>titleColor</a> : <a href=\"#!/api/UI.Color\" rel=\"UI.Color\" class=\"docClass\">UI.Color</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets titleColor of the picker. ...</div><div class='long'><p>Gets/sets titleColor of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='property-titleFont' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-property-titleFont' class='name expandable'>titleFont</a> : <a href=\"#!/api/UI.Font\" rel=\"UI.Font\" class=\"docClass\">UI.Font</a><span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Gets/sets titleFont of the picker. ...</div><div class='long'><p>Gets/sets titleFont of the picker. This property only works with show method. Must set before show method.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-setDate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-method-setDate' class='name expandable'>setDate</a>( <span class='pre'>date</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial date avaliable on the picker. ...</div><div class='long'><p>Sets the initial date avaliable on the picker.</p>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMaxDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-method-setMaxDate' class='name expandable'>setMaxDate</a>( <span class='pre'>maxDate</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the maximum date avaliable on the picker. ...</div><div class='long'><p>Sets the maximum date avaliable on the picker.</p>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>maxDate</span> : Date<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMinDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-method-setMinDate' class='name expandable'>setMinDate</a>( <span class='pre'>minDate</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the minimum date avaliable on the picker. ...</div><div class='long'><p>Sets the minimum date avaliable on the picker.</p>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minDate</span> : Date<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Makes the picker appear on the screen. ...</div><div class='long'><p>Makes the picker appear on the screen.</p>\n        <p>Available since: <b>0.1</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onCancelled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-event-onCancelled' class='name expandable'>onCancelled</a>( <span class='pre'></span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Triggered when click cancel button on the picker. ...</div><div class='long'><p>Triggered when click cancel button on the picker.</p>\n        <p>Available since: <b>3.1.3</b></p>\n</div></div></div><div id='event-onDateSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.DatePicker'>UI.DatePicker</span><br/></div><a href='#!/api/UI.DatePicker-event-onDateSelected' class='name expandable'>onDateSelected</a>( <span class='pre'>date</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Triggered when a date is selected on the picker. ...</div><div class='long'><p>Triggered when a date is selected on the picker.</p>\n        <p>Available since: <b>0.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});