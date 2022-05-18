let site = {
    siteName: "W3Docs",
    bookName: "Javascript",
    get fullName() {
        return `${this.siteName} ${this.bookName}`;
    },
    set fullName(value) {
        [this.siteName, this.bookName] = value.split(" ");
    }
};
function GetFullName(_siteName, _bookName) {
    this.site = _siteName;
    this.bookName = _bookName;
    Object.defineProperty(this, 'fullName', {
        get: () => {
            return `${_siteName} ${_bookName}`;
        },
        set: (value) => {
            [_siteName, _bookName] = value.split(" ");
        }
    });
}

let site1 = new GetFullName("W3Docs", "Javascript")
console.log(site1.fullName);
site1.fullName = 'w3 CSS';
console.log(site1.fullName);