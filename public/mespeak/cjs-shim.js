(function () {
  window.module = { exports: {} }
  window.exports = window.module.exports
  window.__captureCommonJs = function (name) {
    window[name] = window.module.exports
    window.module = { exports: {} }
    window.exports = window.module.exports
  }
  window.require = function (id) {
    if (id && id.indexOf('ESpeak') !== -1) return window.__ESpeakFactory
    throw new Error('Unsupported local module: ' + id)
  }
})()
