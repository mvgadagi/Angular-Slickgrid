/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function parseBoolean(str) {
    return /(true|1)/i.test(str + '');
}
/** @type {?} */
export const booleanFilterCondition = (options) => {
    /** @type {?} */
    const searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    return parseBoolean(options.cellValue) === parseBoolean(searchTerm);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbkZpbHRlckNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc2xpY2tncmlkLyIsInNvdXJjZXMiOlsiYXBwL21vZHVsZXMvYW5ndWxhci1zbGlja2dyaWQvZmlsdGVyLWNvbmRpdGlvbnMvYm9vbGVhbkZpbHRlckNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLFNBQVMsWUFBWSxDQUFDLEdBQW9CO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDcEMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQW9CLENBQUMsT0FBOEIsRUFBRSxFQUFFOztVQUNsRixVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0lBQ3JGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlckNvbmRpdGlvbiwgRmlsdGVyQ29uZGl0aW9uT3B0aW9uIH0gZnJvbSAnLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VCb29sZWFuKHN0cjogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgcmV0dXJuIC8odHJ1ZXwxKS9pLnRlc3Qoc3RyICsgJycpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9vbGVhbkZpbHRlckNvbmRpdGlvbjogRmlsdGVyQ29uZGl0aW9uID0gKG9wdGlvbnM6IEZpbHRlckNvbmRpdGlvbk9wdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBBcnJheS5pc0FycmF5KG9wdGlvbnMuc2VhcmNoVGVybXMpICYmIG9wdGlvbnMuc2VhcmNoVGVybXNbMF0gfHwgJyc7XHJcbiAgcmV0dXJuIHBhcnNlQm9vbGVhbihvcHRpb25zLmNlbGxWYWx1ZSkgPT09IHBhcnNlQm9vbGVhbihzZWFyY2hUZXJtKTtcclxufTtcclxuIl19