// this is required to make the ts compiler +electron happy and correctly reference to go object.
// https://stackoverflow.com/questions/42497479/uncaught-referenceerror-exports-is-not-defined-in-filed-generated-by-typescript/43702240#43702240
import * as go from 'gojs'
export default go