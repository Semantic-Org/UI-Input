var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-input',
  summary : 'Semantic UI - Input (official): Single component release of input',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Input.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
