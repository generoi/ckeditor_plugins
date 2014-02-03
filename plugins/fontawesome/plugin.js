(function(CKEDITOR) {
  CKEDITOR.plugins.add('fontawesome', {
    requires: 'dialog,fakeobjects',
    init: function(editor) {
      editor.addCommand('Fontawesome', new CKEDITOR.dialogCommand('Fontawesome', {
        allowedContent: '',
        requiredContent: ''
      }));
      editor.ui.addButton('Fontawesome', {
        label: 'Add fontawesome icon',
        command: 'fontawesome',
        icon: this.path + 'icon.png'
      });
      CKEDITOR.dialog.add('fontawesome', this.path + 'dialogs/fontawesome.js');
    }
  });

}(window.CKEDITOR));
