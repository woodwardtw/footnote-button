(function() {
       tinymce.PluginManager.add('fnbutton_mce_button', function( editor, url ) {
           editor.addButton('fnbutton_mce_button', {
                       text: '👣',
                       icon: false,
                       onclick: function() {
                         // change the shortcode as per your requirement
                         editor.windowManager.open({
                            title: 'Add Footnote',
                            body: [{
                              type: 'textbox',
                              name: 'footnote',
                              label: ''
                            }],
                            onsubmit: function( e ) {
                              editor.insertContent( '[efn_note]' +  e.data.footnote + '[/efn_note]' );
                            }
                          });
                      }
             });
       });
})();