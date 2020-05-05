/**
 * @author Adam Morris classroomtechtools.com
 * @version 1.0
 * @license MIT
 */

// 1) create a namespace called namespace:

/**
 * @return {NAMESPACE}
 */
function namespace() {
}

// 2) build namespace.* methods by building on the function variable
namespace.method = namespace_method;
namespace.anotherMethod = namespace_anotherMethod;


// 3) use undocumented @name annotation and dot notation to change the exposed name

/**
 * @name namespace.method
 * @param {Number} int
 * @return {Number}
 */
function namespace_method (int) {
  return 0;
}


// 4) Rinse, repeat

/**
 * @name namespace.anotherMethod
 * @param {String} name
 * @return {String}
 */
function namespace_anotherMethod(name) {
  return '';
}



