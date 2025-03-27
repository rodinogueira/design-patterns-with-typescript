"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatabaseClassic = void 0;
var MyDatabaseClassic = exports.MyDatabaseClassic = /** @class */ (function () {
    function MyDatabaseClassic() {
        this.users = [];
    }
    MyDatabaseClassic.getInstance = function () {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic.instance;
    };
    MyDatabaseClassic.prototype.add = function (user) {
        this.users.push(user);
    };
    MyDatabaseClassic.prototype.remove = function (index) {
        this.users.splice(index, 1);
    };
    MyDatabaseClassic.prototype.show = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user);
        }
    };
    MyDatabaseClassic.instance = null;
    return MyDatabaseClassic;
}());
var db1 = MyDatabaseClassic.getInstance();
var db2 = MyDatabaseClassic.getInstance();
console.log(db1 === db2);
db1.add({ name: 'Rodrigo', age: 37 });
db1.show();
