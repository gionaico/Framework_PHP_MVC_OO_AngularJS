
angular.module('jcs-autoValidate')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.setI18nFileRootPath('frontend/assets/js/jcs-auto-validate/lang');
        defaultErrorMessageResolver.setCulture('es-co');
        
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          /*errorMessages['myCustomError'] = 'My custom error message';
          errorMessages['anotherErrorMessage'] = 'An error message with the attribute value {0}';*/
        });
    }
]);