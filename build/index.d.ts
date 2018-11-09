/**
 * idx is a utility function for traversing properties on objects and arrays.
 * If an intermediate property is either null or undefined, it is instead returned.
 * The purpose of this function is to simplify extracting properties from
 *  a chain of maybe-typed properties.
 *
 * @param source Source object
 * @param predicate Predicate function traversing the source object returning a result
 */
export function idxMacro<TResult = any, TSource = any>(
  source: TSource,
  predicate: (source: TSource) => TResult
): TResult;

export default idxMacro;
