function dividir(a, b) {
	if (a == 0 || b == 0) {
		return 'No se puede dividir cero';
	} else {
		return a / b;
	}
}

module.exports = dividir;
