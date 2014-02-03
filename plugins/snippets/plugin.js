(function(CKEDITOR) {
  CKEDITOR.plugins.add('snippets', {
    requires : 'richcombo',
    init : function(editor) {
      //  array of strings to choose from that'll be inserted into the editor
      var snippets = editor.config.snippets || [];

      var map = {};

      // add the menu to the editor
      editor.ui.addRichCombo('Snippets', {
        label: 'Snippet',
        title: 'Insert Snippet',
        className: 'cke_format',
        multiSelect: false,
        panel: {
          css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
        },
        init: function() {
          for (var i = 0, l = snippets.length; i < l; i++) {
            var placeholder = 'SNIPPET_PLACEHOLDER' + i;
            map[placeholder] = snippets[i][0];
            snippets[i][0] = placeholder;
            this.add.apply(this, snippets[i]);
          }
        },
        onClick: function( value ) {
          editor.focus();
          editor.fire( 'saveSnapshot' );
          editor.insertHtml(map[value]);
          editor.fire( 'saveSnapshot' );
        }
      });
    }
  });
}(window.CKEDITOR));
