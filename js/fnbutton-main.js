(function() {
       tinymce.PluginManager.add('fnbutton_mce_button', function( editor, url ) {
           editor.addButton('fnbutton_mce_button', {
                       text: '👣',
                       icon: false,
                       onclick: function() {
                         // change the shortcode as per your requirement
                         editor.windowManager.open({
                            title: 'Add Footnote',
                            width: 400,
                            height: 200,
                            body: [{
                              type: 'textbox',
                              name: 'footnote',
                              label: '',
                              multiline : true,
                              minHeight: 150,
                            }],
                            onsubmit: function( e ) {
                              editor.insertContent( '[efn_note]' +  e.data.footnote + '[/efn_note]' );
                            }
                          });
                      }
             });
       });
})();

//          {type: 'textbox', label: 'textbox', value: 'Fit will take all the space available.'},
// {
//                 type: 'textbox',
//                 multiline: true,
//                 name: 'content',
//                 label: 'Content',
//                 minWidth: 350,
//                 minHeight: 150
//                 },