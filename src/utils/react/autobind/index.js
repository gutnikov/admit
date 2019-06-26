export default function autobind(_this) {
  const proto = Object.getPrototypeOf(_this);
  Object.getOwnPropertyNames(proto)
    .filter(function(name) {
      return name.match(/^handle/);
    })
    .forEach(function(handler) {
      _this[handler] = proto[handler].bind(_this);
    });
}
