(function() {
       tinymce.PluginManager.add('fnbutton_mce_button', function( editor, url ) {
           editor.addButton('fnbutton_mce_button', {
                       text: '👣',//button text 
                       icon: false,//no icon currently
                       onclick: function() {
                         editor.windowManager.open({
                            title: 'Add Footnote',//header for modal
                            id: 'footnote-maker',
                            width: 550,
                            height: 220,
                            body: [{
                              type: 'textbox',
                              name: 'footnote',
                              label: '',//label seemed unnecessary
                              multiline : true,
                              minHeight: 150,
                            }],
                            onsubmit: function( e ) {
                              let foot = '[efn_note]' + tinyMCE.activeEditor.getContent() + '[/efn_note]';
                              console.log(tinyMCE.activeEditor.getContent());
                              editor.insertContent( foot );//set shortcodes with 
                            }                           
                          });    
                          tinymce.init({ 
                            selector: '#footnote-maker-body textarea', 
                            themes: 'modern',
                            width: 548, 
                            height: 172, 
                            forced_root_block : "" ,
                            toolbar: 'bold italic | alignleft alignright | bullist numlist outdent indent ',
                            menubar: false,
                            });                        
                      //forced_root_block : "" removes forced p elements
                      }
             });
       });
})();

