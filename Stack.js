function Stack() {
	this.stack = new Array();
	
}

Stack.prototype.pop = function() {
	return this.stack.pop();
};

Stack.prototype.push = function(item) {
	this.stack.push(item)
};