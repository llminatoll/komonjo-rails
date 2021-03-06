require('./emoji.js');
class Komonjo {
  static get Emitter() { return this._Emitter || (this._Emitter = require('./emitter.js')); }
  static get emitter() { return this._emitter || (this._emitter = new this.Emitter()); }
  static get Store() { return this._Store || (this._Store = require('./store.js')); }
  static get store() { return this._store || (this._store = new this.Store(this.emitter)); }
  static get Client() { return this._Client || (this._client = require('./client.js')); }
  static get client() { return this._client || (this._client = new this.Client()); }
  static get Channel() { return this._Channel || (this._Channel = require('./channel.js')); }
  static get Message() { return this._Message || (this._Message = require('./message.js')); }
  static get PartialMessage() { return this._PartialMessage || (this._PartialMessage = require('./partial-message.js')); }
  static get Emoji() { return this._Emoji || (this._Emoji = require('./emoji.js')); }
  static get User() { return this._User || (this._User = require('./user.js')); }
  static get Profile() { return this._Profile || (this._Profile = require('./profile.js')); }

  static get BaseComponent() { return this._BaseComponent || (this._BaseComponent = require('./components/base-component.jsx')); }
}

module.exports = Komonjo;
