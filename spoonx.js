/************************************************/
/* spoonx-tools configuration                   */
/* @see https://github.com/SpoonX/spoonx-tools  */
/************************************************/

var appRoot = 'src/';

module.exports = {
  path : {
    root: appRoot,

    /* options and their defaults */

    /* js files to ignore
     *
     *  ignore: [],
     */

    /* future use: use TypeScript or Babel for transpiling
     *
     * useTypeScriptForDTS: false,
     */

    /* Imports to append to the import block of the main file.
     * Add here eg. non-concated local imports in the main file as they will
     * get removed during the build process (ValueConverters, CustomElements).
     *
     * importsToAdd: ["import {AssociationSelect} from './association-select';"],
     */
     importsToAdd: ["import {DatatableExport} from './datatable-export';"],

    /* js to be transpiled, but not be concated
     * (ValueConverters, CustomElements)
     *
     * jsResources: [appRoot + 'association-select.js'],
     */
     jsResources: [appRoot + 'datatable-export.js'],

    /* other resources that need to get copied keeping their path
     * resources: appRoot + '{** / *.css,** / *.html}',
     */
     resources: appRoot + '{**/*.css,**/*.html}',


    /* imports that are only used internally, eg 'extend'. no need to d.ts export them
     *
     * importsToIgnoreForDts: ['extend'],
     */
    importsToIgnoreForDts: ['json2csv', 'js2xmlparser'],

    /* sort when concating
     * sort: true,
     */
     sort: true,

    /* concat js files
     * concat: true,
     */
     concat: true,

    /* default options overwrites for karma
     * karma: {browsers: ['Chrome']}
     */
  }
};
