Ext.data.JsonP.UI_EmailComposer({"tagname":"class","name":"UI.EmailComposer","autodetected":{},"files":[{"filename":"analysis.js","href":null}],"since":"3.0.3","members":[{"name":"addAttachmentForAndroid","tagname":"method","owner":"UI.EmailComposer","id":"method-addAttachmentForAndroid","meta":{"android":true}},{"name":"addAttachmentForiOS","tagname":"method","owner":"UI.EmailComposer","id":"method-addAttachmentForiOS","meta":{"ios":true}},{"name":"onClose","tagname":"method","owner":"UI.EmailComposer","id":"method-onClose","meta":{"android":true,"ios":true}},{"name":"setBCC","tagname":"method","owner":"UI.EmailComposer","id":"method-setBCC","meta":{"android":true,"ios":true}},{"name":"setCC","tagname":"method","owner":"UI.EmailComposer","id":"method-setCC","meta":{"android":true,"ios":true}},{"name":"setMessage","tagname":"method","owner":"UI.EmailComposer","id":"method-setMessage","meta":{"android":true,"ios":true}},{"name":"setSubject","tagname":"method","owner":"UI.EmailComposer","id":"method-setSubject","meta":{"android":true,"ios":true}},{"name":"setTO","tagname":"method","owner":"UI.EmailComposer","id":"method-setTO","meta":{"android":true,"ios":true}},{"name":"show","tagname":"method","owner":"UI.EmailComposer","id":"method-show","meta":{"android":true,"ios":true}},{"name":"canSendMail","tagname":"method","owner":"UI.EmailComposer","id":"static-method-canSendMail","meta":{"static":true,"android":true,"ios":true}}],"alternateClassNames":[],"aliases":{},"id":"class-UI.EmailComposer","short_doc":"A standard interface for managing, editing, and sending an email message. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>A standard interface for managing, editing, and sending an email message. When email composer is dismiss, page's onShow will be triggered.</p>\n\n<pre class='inline-example '><code>const File = require('sf-core/io/file');\nconst FileStream = require('sf-core/io/filestream');\nconst EmailComposer = require('sf-core/ui/emailcomposer');\nconst System = require('sf-core/device/system');\n\nif (EmailComposer.canSendMail()) {\n    var emailcomposer = new EmailComposer();\n    emailcomposer.setBCC([\"bcc@smartface.io\",\"bcc2@smartface.io\"]);\n    emailcomposer.setCC([\"cc@smartface.io\",\"cc2@smartface.io\"]);\n    emailcomposer.setTO([\"to@smartface.io\",\"to2@smartface.io\"]);\n    emailcomposer.setMessage(\"message\");\n    emailcomposer.setSubject(\"subject\");\n    emailcomposer.onClose = function(){\n        <a href=\"#!/api/console-static-method-log\" rel=\"console-static-method-log\" class=\"docClass\">console.log</a>(\"onClose\");\n    };\n\n    var imageFile = new File({\n        path: 'assets://smartface.png'\n    });\n\n    emailcomposer.android.addAttachmentForAndroid(imageFile);\n\n    if (System.OS == \"iOS\") {\n        var imageFileStream = imageFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.BINARY);\n        var fileBlob = imageFileStream.readToEnd();\n        imageFileStream.close();\n        emailcomposer.ios.addAttachmentForiOS(fileBlob,\"image/png\",\"smartface.png\");\n    }\n\n    emailcomposer.show(page);\n}\n</code></pre>\n        <p>Available since: <b>3.0.3</b></p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-addAttachmentForAndroid' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-addAttachmentForAndroid' class='name expandable'>addAttachmentForAndroid</a>( <span class='pre'>file</span> )<span class=\"signature\"><span class='android' >android</span></span></div><div class='description'><div class='short'>Attach the given file to email composer. ...</div><div class='long'><p>Attach the given file to email composer.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>file</span> : <a href=\"#!/api/IO.File\" rel=\"IO.File\" class=\"docClass\">IO.File</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addAttachmentForiOS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-addAttachmentForiOS' class='name expandable'>addAttachmentForiOS</a>( <span class='pre'>blob, mimeType, fileName</span> )<span class=\"signature\"><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Attach the given file to email composer. ...</div><div class='long'><p>Attach the given file to email composer.\nFor Images; if you have multiple sizes of image resource (e.g smartface@2x.png, smartface@3x.png); you should give exact path of an image file.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>blob</span> : <a href=\"#!/api/Blob\" rel=\"Blob\" class=\"docClass\">Blob</a><div class='sub-desc'>\n</div></li><li><span class='pre'>mimeType</span> : String<div class='sub-desc'><p>mimeType's \"image/jpeg\",\"image/png\",\"image/gif\",\"image/tiff\",\"image/tiff\",\"application/pdf\",\"application/vnd\",\"text/plain\",</p>\n</div></li><li><span class='pre'>fileName</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-onClose' class='name expandable'>onClose</a>( <span class='pre'></span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>This function will be triggered when email composer is closed. ...</div><div class='long'><p>This function will be triggered when email composer is closed.</p>\n        <p>Available since: <b>3.0.3</b></p>\n</div></div></div><div id='method-setBCC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-setBCC' class='name expandable'>setBCC</a>( <span class='pre'>bcc</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial recipients to include in the email’s “BCC” field. ...</div><div class='long'><p>Sets the initial recipients to include in the email’s “BCC” field.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bcc</span> : String[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCC' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-setCC' class='name expandable'>setCC</a>( <span class='pre'>cc</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial recipients to include in the email’s “CC” field. ...</div><div class='long'><p>Sets the initial recipients to include in the email’s “CC” field.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cc</span> : String[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-setMessage' class='name expandable'>setMessage</a>( <span class='pre'>text, [isHtmlText]</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial body text to include in the email composer. ...</div><div class='long'><p>Sets the initial body text to include in the email composer.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>isHtmlText</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div><div id='method-setSubject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-setSubject' class='name expandable'>setSubject</a>( <span class='pre'>subject</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial text for the subject line of the email composer. ...</div><div class='long'><p>Sets the initial text for the subject line of the email composer.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>subject</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-setTO' class='name expandable'>setTO</a>( <span class='pre'>to</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>Sets the initial recipients to include in the email’s “TO” field. ...</div><div class='long'><p>Sets the initial recipients to include in the email’s “TO” field.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>to</span> : String[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-method-show' class='name expandable'>show</a>( <span class='pre'>page</span> )<span class=\"signature\"><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>This function shows email composer on the given UI.Page. ...</div><div class='long'><p>This function shows email composer on the given <a href=\"#!/api/UI.Page\" rel=\"UI.Page\" class=\"docClass\">UI.Page</a>.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>page</span> : <a href=\"#!/api/UI.Page\" rel=\"UI.Page\" class=\"docClass\">UI.Page</a><div class='sub-desc'><p>This is the page that email will be shown.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-canSendMail' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='UI.EmailComposer'>UI.EmailComposer</span><br/></div><a href='#!/api/UI.EmailComposer-static-method-canSendMail' class='name expandable'>canSendMail</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='static' >static</span><span class='android' >android</span><span class='ios' >iOS</span></span></div><div class='description'><div class='short'>You should call this method before attempting to display the email composition interface. ...</div><div class='long'><p>You should call this method before attempting to display the email composition interface. If it returns NO, you must not display the email composition interface.</p>\n        <p>Available since: <b>3.0.3</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>canSendMail</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});